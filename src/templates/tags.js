import React from "react"
import { graphql } from "gatsby"
import Layout from "../pages/components/Layout"
import Main from "../pages/components/Main"
import ReactMarkdown from "react-markdown"
import Tag from '../pages/components/tag'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
        <Tag>haha</Tag>
    </Layout>
  )
}

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       htmlAst
//       rawMarkdownBody
//       frontmatter {
//         title
//         date
//       }
//     }
//   }
// `
