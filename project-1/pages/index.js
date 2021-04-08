import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >

      <h1>Next App</h1>
      <Link href='/lists'>
        See Listings
      </Link>

    </div>
  )
}
