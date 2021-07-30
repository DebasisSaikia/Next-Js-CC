import { StoreProvider } from '../components/context/Store'
import '../styles/globals.css'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css';
import Router from 'next/router'
import { useEffect } from 'react';
import Layout from '../components/Layout';

Router.events.on('routeChangeStart', () => nProgress.start());
Router.events.on('routeChangeComplete', () => nProgress.done())
Router.events.on('routeChangeError', () => nProgress.done())

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.remove(jssStyles)
    }
  }, [])

  return (
    <StoreProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>

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
