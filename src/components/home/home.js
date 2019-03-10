import React from "react"
import SEO from "../seo"
import AlbumList from "./homeAlbumList"

const Home = () => (
  <section className="home">
    <SEO title="Home" />

    <div className="intro">
      <h1>The best of Jazz</h1>

      <div className="arrow-container">
        <div className="arrow" />
      </div>
    </div>

    <AlbumList />
  </section>
)

export default Home
