import { Fragment } from 'react'
import GoogleAnalytics from '~/components/GoogleAnalytics'
import '~/styles/index.scss'

const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default App
