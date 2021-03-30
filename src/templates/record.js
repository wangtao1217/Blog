import React from "react"
import { graphql } from "gatsby"
import Layout from "../pages/components/Layout"
import Main from "../pages/components/Main"
import ReactMarkdown from "react-markdown"
import Tag from "../pages/components/tag"
import Empty from '../pages/empty'

const Record =  () => {
  // const post = data.markdownRemark
  // console.log(context);
  return (
    <Layout>
     <Empty/>
    </Layout>
  )
}

export default Record

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
