const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

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
  const { createPage } = actions
  const result = await graphql(`
    query {
      tagsGroup: allMarkdownRemark {
        group(field: frontmatter___tags, limit: 100) {
          fieldValue
        }
      }
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              tags
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  console.log(JSON.stringify(result, null, 4))

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })

  createPage({
    path: "/tags",
    component: path.resolve("./src/templates/tags.js"),
    context: {
      tags: [1, 2, 3],
    },
  })

  const tags = result.data.tagsGroup.group
  tags.forEach(tag => {
    createPage({
      path: `/tag-list/${tag.fieldValue}`,
      component: path.resolve("./src/templates/tag-list.js"),
      context: {
        tag: tag.fieldValue,
      },
    })
  })

  createPage({
    path: "/record",
    component: path.resolve("./src/templates/record.js"),
    context: {
      tags: [1, 2, 3],
    },
  })

  createPage({
    path: "/reading",
    component: path.resolve("./src/templates/reading.js"),
    context: {
      tags: [1, 2, 3],
    },
  })
}
