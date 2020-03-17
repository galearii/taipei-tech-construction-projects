const path = require(`path`)
const { createFilePath } = require('gatsby-source-filesystem')

// To implement an API, you export a function with the same name of the API from gatsby-node.js
// This onCreateNode function will be called by Gatsby whenever a new node is created (or updated).
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info

  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/project-detail.js`),
      context: {
        // Data passed to context is available in page queries as GraphQL variables.
        slug: node.fields.slug,
      }
    })
  })
}
