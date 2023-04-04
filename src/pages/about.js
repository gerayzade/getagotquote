import Image from 'next/image'
import NextLink from 'next/link'
import Rellax from 'rellax'
import {
  useEffect,
  useRef,
  useState,
} from 'react'
import Layout from '~/components/Layout'

const AboutPage = () => {
  const timeoutRef = useRef(null)
  const [isPageVisible, setPageVisibility] = useState(false)

  useEffect(() => {
    // Add parallax effect
    Rellax('h1 > img', { speed: -5 })

    timeoutRef.current = setTimeout(() => { 
      setPageVisibility(true)
    }, 150)

    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <Layout title="About">
      <div className={`about-page ${isPageVisible ? 'show' : 'hide'}`}>
        <NextLink href="/">
          <h1>
            <Image
              src="/images/title.png"
              alt="Title"
              width={900}
              height={119}
            />
          </h1>
        </NextLink>
        <div className="about">
          <p>
            Hi there! I am <strong>Heydar Gerayzade</strong> and here is my fan project where you can find cool quotes
            from the <strong>Game of Thrones</strong> TV series available not only in <strong>Common Tonque</strong>,
            but also in <strong>Valyrian</strong> and <strong>Dothraki</strong> languages!
          </p>
          <nav className="mid-nav">
            <NextLink href="/">
              ← Go Back
            </NextLink>
          </nav>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
