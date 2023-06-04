import fs from 'fs'
import matter from 'gray-matter'
import Image from 'next/image'
import styles from './Styles/Recipes.module.css'

export default function Recipes({ recipes }) {
    return(
        <ul className={styles['recipe-list']}>
        {recipes.map(recipe => (
            <div>
              <h1> {recipe.title} </h1>
              <h2> {recipe.date} </h2>
              {recipe.photo && <img className="thumbnail" width={80} src={recipe.photo} alt=""/> }
              <h3> {recipe.body} </h3>
            </div>
        ))}
        </ul>
    )
}

export async function getStaticProps() {
    // List of files in recipes folder
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