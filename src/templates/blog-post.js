import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// BLOG POST
const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  const backgroundImg = `url(${post.frontmatter.image}) no-repeat`

  return (
    <Layout>
      <SEO title="Home" keywords={[`Jazz`, `application`, `react`]} />
      <div className="container blog-page">
        <div className="blog-post">
          <h1>{post.frontmatter.title}</h1>

          <div className="author">
            <div className="img" />
            <h5 className="name">{post.frontmatter.author}</h5>
            <h5 className="date">{post.frontmatter.date}</h5>
          </div>

          <div class="img" style={{ background: backgroundImg }} />
          <div
            className="text"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>

        <div className="ads">
          <h1>Hello</h1>
        </div>
      </div>
    </Layout>
  )
}

// QUERY BLOG POST
export const blogQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
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
`

export default BlogPost
