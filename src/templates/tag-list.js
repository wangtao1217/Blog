import React from "react"
import { graphql } from "gatsby"
import Layout from "../pages/components/Layout"
import Item from "../pages/components/Item"

const TagList = ({ data, pageContext }) => {
  const { tag } = pageContext
  const { nodes } = data.allMarkdownRemark
  // console.log("value: ", nodes)
  // console.log("pageContext: ", pageContext)
  return (
    <Layout>
      <div className="p-10  bg-white h-full overflow-auto">
        <h2 className="center text-gray-600 border-b-2 border-gray-200 pb-10">
          # {tag}
        </h2>
        <div className="divide-y-4 divide-yellow-600 divide-dashed">
          {nodes.map(
            (
              {
                frontmatter: { title, description, date, tags },
                fields: { slug },
              },
              i
            ) => (
              <Item
                key={i}
                title={title}
                date={date}
                route={slug}
                description={description}
              />
            )
          )}
        </div>
      </div>
    </Layout>
  )
}

export default TagList

export const query = graphql`
  query($tag: String) {
    allMarkdownRemark(filter: { frontmatter: { tags: { in: [$tag] } } }) {
      nodes {
        frontmatter {
          title
          description
          date
          tags
        }
        fields {
          slug
        }
      }
    }
  }
`
