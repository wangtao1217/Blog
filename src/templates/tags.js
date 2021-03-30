import React from "react"
import { graphql } from "gatsby"
import Layout from "../pages/components/Layout"
import Main from "../pages/components/Main"
import ReactMarkdown from "react-markdown"
import Tag from "../pages/components/tag"

export default ({ data, context }) => {
  // const post = data.markdownRemark
  // console.log(context);
  return (
    <Layout>
      <div className="p-10  bg-white">
        {["javascript", "React", "Css", "Html"].map((val, i) => (
          <Tag className="" key={i}>
            {val}
          </Tag>
        ))}
      </div>
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
