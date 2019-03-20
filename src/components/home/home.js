import React from "react"
import SEO from "../seo"
import Intro from "./homeIntro"
import AlbumList from "./homeAlbumList"
import BlogList from "./homeBlogList"
import Footer from "./homeFooter"

const Home = () => (
  <section className="home">
    <SEO title="Home" />
    <Intro />
    <div className="spacing" />
    <AlbumList />
    <BlogList />
    <Footer />
  </section>
)

export default Home
