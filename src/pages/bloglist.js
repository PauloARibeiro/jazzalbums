import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticQuery, graphql, Link } from "gatsby"
import Arrow from "../components/modules/backArrow"

// LIST ALL BLOGS
const BlogList = data => {
  return (
    <Layout>
      <Arrow />
      <SEO title="Home" keywords={[`Jazz`, `application`, `react`]} />
      <div className="blog" style={{ marginTop: "0px" }}>
        <div className="container">
          <div className="item-container">
            {data.allMarkdownRemark.edges.map(post => {
              const id = post.node.id
              const { path, title, description, image } = post.node.frontmatter

              return (
                <Link to={path}>
                  <div className="item" key={id} style={{background: `url(${image})`}}>
                    <div className="title">
                      <h2>{title}</h2>
                      <h5>{description}</h5>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

// BLOG QUERY
const BlogQuery = () => {
  return (
    <StaticQuery
      query={graphql`
        query BlogListQuery {
          allMarkdownRemark {
            edges {
              node {
                id
                frontmatter {
                  path
                  title
                  description
                  image
                }
              }
            }
          }
        }
      `}
      render={data => BlogList(data)}
    />
  )
}

export default BlogQuery
