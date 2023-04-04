import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'

export default class HtmlDocument extends Document {
  render() {
    return (
      <Html
        lang="en"
        dir="ltr"
      >
        <Head>
          <meta
            name="msapplication-TileColor"
            content="#020202"
          />
          <meta
            name="theme-color"
            content="#020202"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            href="/favicon.png"
          />
          <link
            rel="manifest"
            href="/site.webmanifest"
          />
          <link
            rel="mask-icon"
            href="/safari-pinned-tab.svg"
            color="#020202"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
