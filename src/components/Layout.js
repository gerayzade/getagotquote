import Head from 'next/head'
import PropTypes from 'prop-types'
import { useEffect } from 'react'

const Layout = ({ children, title }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="wrapper">
      <Head>
        <title>{`Game of Thrones: Get a Quote${title ? ` - ${title}` : ''}`}</title>
        <meta
          name="description"
          content="A definitive destination for fans of the favorite HBO TV series. Quotes are available not only in Common Tongue, but also in Valyrian and Dothraki languages!"
        />
      </Head>
      <main>
        {children}
      </main>
    </div>
  )
}

Layout.defaultProps = {
  title: null,
}

Layout.propTypes = {
  title: PropTypes.string,
}

export default Layout
