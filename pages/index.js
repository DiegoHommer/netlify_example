import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md'
import styles from "pages/home.css"

export default class Home extends Component {
  render() {
    let { title, cats } = attributes
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <article>
          <h1 style={styles.header}>{title}</h1>
          <HomeContent />
          <ul> 
            {cats.map((cat, k) => (
              <li key={k}>
                <h2>{cat.name}</h2>
                <p>{cat.description}</p>
                <img src={cat.photo} alt={cat.name}/>
              </li>
            ))}
          </ul>
        </article>
      </>
    )
  }
}

