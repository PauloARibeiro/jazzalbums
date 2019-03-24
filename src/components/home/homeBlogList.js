import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

// LIST ALL BLOGS
const BlogList = data => {
  return (
    <div className="blog">
      <div className="container">
        <h1>Blog</h1>
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
  )
}

// BLOG QUERY
const BlogQuery = () => {
  return (
    <StaticQuery
      query={graphql`
        query BlogIndexQuery {
          allMarkdownRemark {
            edges {
              node {
                id
                frontmatter {
                  path
                  date
                  title
                  description
                  author
                  authorBio
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
