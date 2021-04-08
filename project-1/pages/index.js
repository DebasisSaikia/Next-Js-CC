import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
      <Navbar />
      <h1>Next App</h1>
      <Footer />
    </div>
  )
}
