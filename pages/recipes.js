import fs from 'fs'
import matter from 'gray-matter'
import styles from './Styles/Recipes.module.css'

export default function Recipes({ recipes }) {
    return(
      <div className={styles['container']}> 
        <div className={styles['recipe-list']}>
        {recipes.map(recipe => (
          <div className={styles['recipe-list-element']}>
            {recipe.photo && <img className={styles["imageContainer"]} width={80} src={recipe.photo} alt=""/> }
            <div className={styles['recipeContainer']}>
              <div className={styles['recipeHeader']}>
                {recipe.title}
                <div> {recipe.date} </div>
              </div>
              <div className={styles['recipeBody']}>
                <div className={styles['ingredients']}>
                  <h3> Ingredients: </h3>
                  {recipe.howtomake.ingredients.map(ingredient => (
                    <text> * {ingredient} </text>
                  ))} 
                </div>
                <div className={styles['instructions']}>
                  <h3> Instructions: </h3>
                  <text> {recipe.howtomake.instructions} </text>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
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