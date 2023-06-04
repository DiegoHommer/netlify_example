import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import Head from 'next/head'
import styles from './Home.module.css'

export default function Home({ recipes }) {
  return (<div className={styles['container']}>
    <Head>
      <title>Demo </title>
    </Head>
    <h1 className={styles['header']}>Cooking Recipes</h1>
    <p className={styles['subtitle']}>Home made recipes available right here!</p>
    <ul className={styles['blog-list']}>
      {recipes.map(recipe => (
        <div>
          <h1> {recipe.title} </h1>
          <h2> {recipe.date} </h2>
          <h3> {recipe.body} </h3>
          <img src={recipe.photo} alt={recipe.title}/>
        </div>
      ))}
    </ul>
  </div>)
}

export async function getStaticProps() {
  // List of files in blgos folder
  const filesInRecipes = fs.readdirSync('./content/recipes')

  // Get the front matter and slug (the filename without .md) of all files
  const recipes = filesInRecipes.map(filename => {
    const file = fs.readFileSync(`./content/recipes/${filename}`, 'utf8')
    const matterData = matter(file)

    return {
      ...matterData.data, // matterData.data contains front matter
      slug: filename.slice(0, filename.indexOf('.'))
    }
  })

  return {
    props: {
      recipes
    }
  }

}
