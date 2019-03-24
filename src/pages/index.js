import React from "react"

// import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Home from "../components/home/home"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Jazz`, `application`, `react`]} />
    <Home />
  </Layout> 
)

export default IndexPage
