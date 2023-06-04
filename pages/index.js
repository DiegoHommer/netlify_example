import Head from 'next/head'
import styles from './Styles/Home.module.css'
import Link from 'next/link'

export default function Home() {

  return (
  <div className={styles['container']}>
    <Head>
      <title>IDE's Culinary Site</title>
    </Head>
    <h1 className={styles['header']}>Cooking Recipes</h1>
    <p className={styles['subtitle']}>Home made recipes available right 
      <Link href="/recipes"> HERE </Link>
    </p>
  </div>)
}

