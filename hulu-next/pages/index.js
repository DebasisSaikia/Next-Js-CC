import Head from 'next/head'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Results from '../components/Results'

import styles from '../styles/Home.module.css'
import request from '../utils/request'

export default function Home({ results }) {

  console.log(results)
  console.log(process.env.NEXT_APP_API_KEYS)
  return (
    <>
      <Head>
        <title>Hulu clone</title>
      </Head>
      <Header />
      <Results results={results} />
    </>
  )
}


// server side rendering
export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const requestmovie = await fetch(`https://api.themoviedb.org/3${request[genre]?.url || request.fetchTrending.url}`)
    .then((res) => res.json())

  return {
    props: {
      results: requestmovie.results || null
    }
  }
}