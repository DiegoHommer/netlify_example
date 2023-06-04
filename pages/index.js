import Head from 'next/head'
import styles from './Styles/Home.module.css'
import Link from 'next/link'

export default function Home() {

  return (
  <div className={styles['container']}>
    <Head>
      <title>IDE's Culinary Site</title>
    </Head>
    <div className={styles["header"]}>
      <h1>Cooking Recipes </h1>
      <p> Home made recipes available for your convenience </p>
    </div>
    <div className={styles['buttonsContainer']}>
      <Link href="/recipes" className={styles['buttonStyle']}> RECIPES </Link>
    </div>
  </div>)
}

