const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "Mdx") {
    const slug = createFilePath({ node, getNode, basePath: "pages" })
    createNodeField({
      name: "slug",
      node,
      value: `${slug}`
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // 思路：先拿到所有页面，然后在进行遍历
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/components/PostLayout/PostLayout.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        id: node.id
      }
    })
  })

}
// component: path.resolve(`./src/templates/blog-post.js`),
