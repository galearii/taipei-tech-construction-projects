import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <img alt="Random Unsplash" src="https://source.unsplash.com/random/800x600" />

        <h4>In Progress</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
            >
              <h3>
                {node.frontmatter.title}{" "}
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: {order: ASC, fields: [frontmatter___order]},
      filter: {fields: {slug: {regex: "/in-progress/"}}}) {
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            title
            order
          }
          excerpt
          html
          timeToRead
        }
      }
    }
  }
`
