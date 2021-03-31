import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../pages/components/Layout"
import Main from "../pages/components/Main"
import ReactMarkdown from "react-markdown"
import Tag from "../pages/components/tag"

export default ({ data, context }) => {
  const { allMarkdownRemark: all } = data
  console.log("=====data=====")
  console.log(all)

  let collection = {}
  const tags = all.nodes.forEach(node => {
    node.frontmatter.tags.map(tag => {
      if (collection[tag] == undefined) {
        collection[tag] = 1
      } else {
        collection[tag] += 1
      }
    })
  })

  console.log("collection:", collection)
  console.log("tags", tags)
  return (
    <Layout>
      <div className="p-10  bg-white">
        {Object.entries(collection).map(([key, val], i) => (
          <Tag tag={key}>
            {key}
            <span className="text-gray-400 ml-5 text-sm">{val}</span>
          </Tag>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      group(field: frontmatter___tags, limit: 100) {
        fieldValue
      }

      nodes {
        frontmatter {
          tags
        }
      }
    }
  }
`
