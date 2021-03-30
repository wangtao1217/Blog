import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../pages/components/Layout"
import SideBar from "../pages/sidebar"
import Main from "../pages/components/Main"
import ReactMarkdown from "react-markdown"
import Tag from "../pages/components/tag"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SideBar />
      <Main>
        <main className="bg-white p-20 post">
          <div className="w-full text-6xl text-gray-800 justify-start mb-10">
            <span className="flex justify-start mt-10 ">
              {post.frontmatter.title}
            </span>
          </div>
          <div className="flex w-full mt-5 text-gray-800 items-center space-x-5">
            <span className="text-2xl  font-light">
              {post.frontmatter.date}
            </span>
            <span className="flex space-x-2">
              {post.frontmatter.tags.map((tag, i) => (
                <Link to="/tags">
                  <Tag>{tag}</Tag>
                </Link>
              ))}
            </span>
          </div>
          <ReactMarkdown
            className="leading-relaxed mt-20 max-w-7xl text-gray-800 text-xl"
            children={post.rawMarkdownBody}
          ></ReactMarkdown>
          <div>
            <span>prev</span>
            <span>next</span>
          </div>
        </main>
      </Main>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      htmlAst
      rawMarkdownBody
      frontmatter {
        title
        date
        tags
      }
    }
  }
`
