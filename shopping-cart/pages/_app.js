import { StoreProvider } from '../components/context/Store'
import '../styles/globals.css'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css';
import Router from 'next/router'

Router.events.on('routeChangeStart', () => nProgress.start());
Router.events.on('routeChangeComplete', () => nProgress.done())
Router.events.on('routeChangeError', () => nProgress.done())

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  )
}

export default MyApp

MyApp.getInitialProps = async () => {
  return {
    pageProps: {
      checPublicKey: process.env.NEXT_APP_PUBLIC_KEY
    }
  }
}
