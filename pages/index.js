import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import Head from 'next/head'
import styles from './Home.module.css'

export default function Home({ cats }) {
  return (<div className={styles['container']}>
    <Head>
      <title>Demo </title>
    </Head>
    <h1 className={styles['header']}>Welcome to my blog</h1>
    <p className={styles['subtitle']}>This is a subtitle idk what to type here</p>
    <ul className={styles['blog-list']}>
      {cats.map(cat => (
        <div>
          <h1> {cat.name} </h1>
          <h2> {cat.description} </h2>
          <img src={cat.photo} alt={cat.name}/>
        </div>
      ))}
    </ul>
  </div>)
}

export async function getStaticProps() {
  // List of files in blgos folder
  const filesInCats = fs.readdirSync('./content')

  // Get the front matter and slug (the filename without .md) of all files
  const cats = filesInCats.map(filename => {
    const file = fs.readFileSync(`./content/${filename}`, 'utf8')
    const matterData = matter(file)

    return {
      ...matterData.data, // matterData.data contains front matter
      slug: filename.slice(0, filename.indexOf('.'))
    }
  })

  return {
    props: {
      cats
    }
  }

}
