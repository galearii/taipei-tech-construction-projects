import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <div>
        <h2 className="text-2xl font-bold mb-6">
          <span className="border-solid border-b-4 border-blue-400 pb-2">
            {post.frontmatter.title}
          </span>
        </h2>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      html
      frontmatter {
        title
      }
    }
  }
`
