import Head from 'next/head'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

import styles from '../styles/Home.module.css'

export default function Home() {
  console.log(process.env.API_KEYS)
  return (
    <>
      <Head>
        <title>Hulu clone</title>
      </Head>
      <Header />
    </>
  )
}
