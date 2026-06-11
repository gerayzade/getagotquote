# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

"Get a GɵT quote" — a Next.js fan app that shows Game of Thrones quotes in three
languages (Common Tongue, Valyrian, Dothraki) over a matching character backdrop.

## Commands

```bash
npm run dev      # dev server at http://localhost:3000 (PWA disabled here)
npm run build    # production build
npm start        # serve the production build
npm run lint     # next lint (eslint-config-next, core-web-vitals)
npm run export   # build + `next export` -> static site in ./out
```

Requires Node 24.x (`engines` in package.json). There is no test suite.

## Architecture

This is a **Next.js 13 Pages Router** app (not App Router) targeting **static
export**. Key implications:

- `next.config.js` sets `images.unoptimized: true` because Next's image optimizer
  is incompatible with `next export`. PWA is added via `next-pwa` and disabled in
  development.
- Path alias `~/*` → `src/*` (defined in `jsconfig.json`; `NODE_PATH=./src` in env).
- `src/pages/_app.js` mounts `<GoogleAnalytics />` and imports the single global
  stylesheet `src/styles/index.scss`. `_document.js` holds the static `<head>`.

### Quote → image matching (the non-obvious core)

`HomePage.getInitialProps` in `src/pages/index.js` is the heart of the app. At
build/render time it:

1. Uses webpack's `require.context` to enumerate every `.jpg` under
   `public/images/got`.
2. For each quote, derives a character image by trying regexes in fallback order
   against the quote's `scene` (e.g. `S3E05`) and `character` name: (a) the exact
   episode, (b) earlier episodes in the same season, (c) earlier seasons, (d) any
   episode.
3. **Removes the matched image from the pool** so the same portrait isn't reused
   for different quotes. Because of this, the *order of quotes in the data file
   affects which image each quote gets.*

This means the image filename convention is load-bearing:
`public/images/got/season-<N>/S<season>E<episode>-<Character-Name>.jpg`, where the
character name has quotes stripped and spaces replaced with hyphens (matching the
`character` field in the data). To add a quote with a portrait, add both the data
entry and a correctly named image.

### Content data

`src/data/quotes.js` is a flat array; each entry has `common`, `valyrian`,
`dothraki`, `character`, and `scene`. Newlines (`\n`) inside quote strings are
converted to `<br/>` and injected via `dangerouslySetInnerHTML`. Quotes are
`shuffle`d (lodash) client-side on mount; arrow keys (←/→) and the "Next Quote"
button page through them with image preloading of the prev/current/next entries.

### Styling

SCSS compiled by Next (`sass` dev dependency). All rules live in
`src/styles/index.scss` plus partials `_mixins.scss`, `_fonts.scss`, `_reset.scss`.
Use the custom mixins rather than raw CSS — notably `screen('desktop' | 'tablet' |
'mobile' | …)` for breakpoints (tablet 768px, desktop 1112px), `position()`,
`box()`, `gradient()`, and `font-face()`. Custom GoT fonts (Trajan Pro 3, Volantene
Script, Dothraki Script) are declared in `_fonts.scss` and preloaded at runtime via
`fontfaceobserver` in `index.js`.

## Gotchas

- `react-redux` is listed as a dependency but is **not used** anywhere — there is no
  store. Don't assume Redux state management exists.
- Google Analytics (`src/components/GoogleAnalytics.js`) renders nothing in
  development or when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is unset. Copy `.env.sample` to
  `.env.local` to configure it.
