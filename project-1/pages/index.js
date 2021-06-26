import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Project 1|Home</title>
      <meta name='keywords' content='debasis' />
    </Head>
    <div>
      <h1 className={styles.title} >Next App</h1>
      <p className={styles.text}>Server side rendering and Static site generator</p>
      <Link href='/lists'>
        <a className={styles.btn}>See Listings</a>
      </Link>

    </div>
    </>
  )
}
