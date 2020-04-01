import React from "react"
import { Link, graphql } from "gatsby"
import IndexLayout from "../components/indexLayout"

export default ({ data }) => {
  return (
    <IndexLayout>
      <div>
        <h3 className="text-center text-2xl font-bold mb-6">
          <span className="border-solid border-b-4 border-blue-400 pb-2">
            進行中工程
          </span>
        </h3>
        <div className="flex flex-wrap justify-around mb-12">
        {data.progress.edges.map(({ node }) => (
          <div key={node.id} className="mx-auto mb-4 w-2/3 sm:w-5/12 md:w-32p rounded overflow-hidden shadow-lg">
            <Link to={node.fields.slug}>
              <div className="w-full h-40 md:h-32"
                   style={{ backgroundImage: "url(https://source.unsplash.com/random/480x320)" }} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{node.frontmatter.title}</div>
                <p className="text-gray-700 text-base">
                  {node.excerpt}
                </p>
              </div>
            </Link>
          </div>
        ))}
        </div>

        <h3 className="text-center text-2xl font-bold mb-6">
          <span className="border-solid border-b-4 border-green-300 pb-2">
            已完成工程
          </span>
        </h3>
        <div className="md:flex md:justify-around mb-12">
        {data.completed.edges.map(({ node }) => (
          <div key={node.id} className="w-2/3 mx-auto mb-4 md:w-32p rounded overflow-hidden shadow-lg">
            <Link to={node.fields.slug}>
              <div className="w-full h-40 md:h-32"
                   style={{ backgroundImage: "url(https://source.unsplash.com/random/480x320)" }} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{node.frontmatter.title}</div>
                <p className="text-gray-700 text-base">
                  {node.excerpt}
                </p>
              </div>
            </Link>
          </div>
        ))}
        </div>

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
