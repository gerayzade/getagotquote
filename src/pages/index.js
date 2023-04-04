import FontFaceObserver from 'fontfaceobserver'
import NextLink from 'next/link'
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import Layout from '~/components/Layout'
import { shuffle } from 'lodash'
import data from '~/data/quotes'

const HomePage = ({ quotes }) => {
  const [isPageVisible, setPageVisibility] = useState(false)
  const [isQuoteVisible, setQuoteVisibility] = useState(false)
  const [isQuoteAnimating, setQuoteAnimating] = useState(false)
  const [activeLang, setLang] = useState('common')
  const [isLangsVissible, setLangsVisibility] = useState(false)
  const [activeQuoteId, setActiveQuoteId] = useState(0)
  const [randomQuotes, setRandomQuotes] = useState([])

  const timeoutRef = useRef(null)

  const switchLang = (lang) => setLang(lang)
  const switchLangsVisibility = () => setLangsVisibility(!isLangsVissible)

  const getNexQuoteId = useCallback((id) => id === randomQuotes.length - 1 ? 0 : id + 1, [randomQuotes])
  const getPrevQuoteId = useCallback((id) => id === 0 ? randomQuotes.length - 1 : id - 1, [randomQuotes])

  const handleImagesPreload = useCallback((id) => {
    // Preload images for current/prev/next quotes
    setRandomQuotes(
      randomQuotes.map((quote, i) => {
        if (!quote.image.loaded && [id, getNexQuoteId(id), getPrevQuoteId(id)].indexOf(i) !== -1) {
          let img = new Image()
          img.src = quote.image.src
          quote.image.loaded = true
        }
        return quote
      })
    )
  }, [randomQuotes, getNexQuoteId, getPrevQuoteId])

  const switchQuote = useCallback((next = true) => {
    if (isQuoteAnimating) return
    const newId = next
      ? getNexQuoteId(activeQuoteId)
      : getPrevQuoteId(activeQuoteId)
    // Hide current quote
    setLangsVisibility(false)
    setQuoteVisibility(false)
    setQuoteAnimating(true)
    // Preload images
    handleImagesPreload(newId)
    // Show next/prev quote
    setTimeout(() => {
      setActiveQuoteId(newId)
    }, 150)
    setTimeout(() => {
      setQuoteAnimating(false)
      setQuoteVisibility(true)
    }, 300)
  }, [activeQuoteId, getNexQuoteId, getPrevQuoteId, handleImagesPreload, isQuoteAnimating])

  const handleKeyDown = useCallback((event) => {
    switch (event.key) {
      default:
        break
      case 'ArrowLeft':
        switchQuote(false)
        break
      case 'ArrowRight':
        switchQuote(true)
        break
    }
  }, [switchQuote])

  const activeQuote = randomQuotes[activeQuoteId]

  useEffect(() => {
    setRandomQuotes(shuffle(quotes))
  }, [quotes])

  useEffect(() => {
    // Preload fonts
    const fonts = ['Trajan Pro 3', 'Volantene Script', 'Dothraki Script']
    fonts.forEach(font => new FontFaceObserver(font).load())

    document.addEventListener('keydown', handleKeyDown)
    timeoutRef.current = setTimeout(() => { 
      setPageVisibility(true)
      setQuoteVisibility(true)
    }, 150)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      clearTimeout(timeoutRef.current)
    }
  }, [handleKeyDown])

  return (
    <Layout>
      {activeQuote && (
        <div
          className={`home-page ${isPageVisible ? 'show' : 'hide'}`} 
          onKeyDown={handleKeyDown}
        >
          <nav className="head-nav">
            <NextLink href="/about">About</NextLink>
            <div className={`lang-switch ${isLangsVissible ? 'toggle' : ''}`}>
              <span
                className="lang-switch-icon"
                onClick={switchLangsVisibility}
              />
              {['common', 'valyrian', 'dothraki'].map(lang => 
                <button
                  className={activeLang === lang ? 'active' : ''}
                  onClick={() => switchLang(lang)}
                  key={lang}
                >
                  {lang}
                </button>
              )}
            </div>
          </nav>
          <div className={`character-bg ${isQuoteVisible ? 'show' : 'hide'}`} style={{ backgroundImage: `url(${activeQuote.image.src})` }} />
          <div className={`quote ${activeLang} ${isQuoteVisible ? 'show' : 'hide'}`}>
            <p dangerouslySetInnerHTML={{__html: activeQuote[activeLang].replace(/[\n]/g, '<br/>')}} />
            <h3>- {activeQuote.character} / {activeQuote.scene}</h3>
          </div>
          <button
            className="next-quote"
            onClick={switchQuote}
          >
            Next Quote
          </button>
          <a
            className="copyright"
            href="https://gerayzade.az/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{'<'}</span> Gerayzade <span>{'/>'}</span>
          </a>
        </div>
      )}
    </Layout>
  )
}

HomePage.getInitialProps = () => {
  let assets = require.context('../../public/images/got', true, /\.(jpg)$/).keys()

  const getImageSrc = (scene, character) => {
    const name = character.replace(/["|']/g, '').replace(/\s+/g, '-')  // format character name
    const season = scene.substr(1,1), episode = scene.substr(3,2)     // extract episode data
    const lookExp = [
      `s${season}e${episode}-${name}`,              // a) current episode
      `s${season}e0[0-${episode - 1}]-${name}`,    // b) previous episodes from the current season
      `s[0-${season - 1}]e[0-9]+-${name}`,        // c) previous episodes
      `s[0-9]e[0-9]+-${name}`                    // d) all episodes
    ]
    let matches = ''
    let match
    for (let i = 0; i < lookExp.length; i++) {
      if (matches.length) break
      matches = assets.filter(image => image.match(new RegExp(lookExp[i], 'ig')))
      // choose from the closest episode
      match = matches[i === 3 ? 0 : matches.length - 1]
    }
    // remove matched image from the list to avoid repetition
    assets = assets.filter(image => !image.includes(match))
    // map image with quote
    return `/images/got/${match?.slice(2)}`
  }

  const quotes = data.map(quote => ({
    ...quote,
    image: {
      src: getImageSrc(quote.scene, quote.character),
      loaded: false,
    },
  }))
  return { quotes }
}

export default HomePage
