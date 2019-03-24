import React from "react"
import { graphql } from "gatsby"
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  EmailShareButton,
  RedditShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  EmailIcon,
  RedditIcon,
} from "react-share"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Arrow from "../components/modules/backArrow"

// BLOG POST
const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  const backgroundImg = `url(${post.frontmatter.image}) no-repeat`

  return (
    <Layout>
      <Arrow />
      <SEO title="Home" keywords={[`Jazz`, `application`, `react`]} />
      <div className="container blog-page">
        <div className="blog-post">
          <h1>{post.frontmatter.title}</h1>

          <div className="author">
            <div className="img" />
            <h5 className="name">{post.frontmatter.author}</h5>
            <h5 className="date">{post.frontmatter.date}</h5>
          </div>

          <div className="share-buttons">
            <FacebookShareButton url={window.location.href} className="button">
              <FacebookIcon size={32} round />
            </FacebookShareButton>

            <TwitterShareButton url={window.location.href} className="button">
              <TwitterIcon size={32} round />
            </TwitterShareButton>

            <RedditShareButton url={window.location.href} className="button">
              <RedditIcon size={32} round />
            </RedditShareButton>

            <LinkedinShareButton url={window.location.href} className="button">
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>

            <EmailShareButton url={window.location.href} className="button">
              <EmailIcon size={32} round />
            </EmailShareButton>
          </div>

          <div class="img" style={{ background: backgroundImg }} />
          <div
            className="text"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>

        <div className="ads" />
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
