import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../pages/components/Layout"
import ReactMarkdown from "react-markdown"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <main className="bg-white p-20 post ">
        <div className="w-full text-5xl sm:4xl text-gray-800 justify-start mb-10">
          <span className="flex justify-start mt-10 ">
            {post.frontmatter.title}
          </span>
        </div>
        <div className="flex w-full mt-5 text-gray-800 items-center space-x-5">
          <span className="text-2xl  font-light">{post.frontmatter.date}</span>
          <span className="flex space-x-2">
            {post.frontmatter.tags.map((tag, i) => (
              <Link className="link" to="/tag-list">
                #{tag}
              </Link>
            ))}
          </span>
        </div>
        <ReactMarkdown
          className="leading-relaxed mt-20 max-w-7xl text-gray-800 text-xl"
          children={post.rawMarkdownBody}
        ></ReactMarkdown>
      </main>
      <footer className="flex w-full justify-between text-gray-400 text-2xl py-5 px-10">
        <Link className="link">prev</Link>
        <Link className="link">next</Link>
      </footer>
    </Layout>
  )
}

export default BlogPost

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
