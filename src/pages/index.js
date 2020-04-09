import React from "react"
import { Link, graphql } from "gatsby"
import IndexLayout from "../components/indexLayout"

export default ({ data }) => {
  return (
    <IndexLayout>
      <div>
        <h2 className="text-center text-4xl font-bold mb-6">
          <span className="border-solid border-b-4 border-blue-400 pb-2">
            進行中工程
          </span>
        </h2>
        <div className="flex flex-wrap justify-around mb-12">
        {data.progress.edges.map(({ node }) => (
          <div key={node.id} className="mx-auto mb-4 w-2/3 sm:w-5/12 md:w-30p rounded overflow-hidden shadow-lg">
            <Link to={node.fields.slug} className="hover:text-green-600">
              <div className="w-full h-40 md:h-32 bg-cover bg-center"
                   style={{ backgroundImage: "url(" + node.fields.slug + "index.jpg)" }} />
              <div className="px-6 py-4">
                <div className="text-xl mb-2">{node.frontmatter.title}</div>
                <p className="text-gray-700 text-base">
                  <span className="">
                    總工程經費</span> {node.frontmatter.cost}
                </p>
              </div>
            </Link>
          </div>
        ))}
        </div>

        <h2 className="text-center text-4xl font-bold mb-6">
          <span className="border-solid border-b-4 border-green-300 pb-2">
            已完成工程
          </span>
        </h2>
        <div className="flex flex-wrap justify-around mb-12">
        {data.completed.edges.map(({ node }) => (
          <div key={node.id} className="mx-auto mb-4 w-2/3 sm:w-5/12 md:w-30p rounded overflow-hidden shadow-lg">
            <Link to={node.fields.slug} className="hover:text-green-600">
              <div className="w-full h-40 md:h-32 bg-cover bg-center"
                   style={{ backgroundImage: "url(" + node.fields.slug + "index.jpg)" }} />
              <div className="px-6 py-4">
                <div className="text-xl mb-2">{node.frontmatter.title}</div>
                <p className="text-gray-700 text-base">
                  <span className="">
                    總工程經費</span> {node.frontmatter.cost}
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
            cost
          }
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
            cost
          }
          html
          timeToRead
        }
      }
    }
  }
`
