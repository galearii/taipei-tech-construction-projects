import React from "react"
import { Link, graphql } from "gatsby"
import IndexLayout from "../components/indexLayout"

export default ({ data }) => {
  return (
    <IndexLayout>
      <div>
        <h4>In Progress</h4>
        {data.progress.edges.map(({ node }) => (
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

        <h4>Completed</h4>
        {data.completed.edges.map(({ node }) => (
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
    </IndexLayout>
  )
}

export const query = graphql`
  query {
    progress: allMarkdownRemark(
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
    completed: allMarkdownRemark(
      sort: {order: ASC, fields: [frontmatter___order]},
      filter: {fields: {slug: {regex: "/completed/"}}}) {
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
