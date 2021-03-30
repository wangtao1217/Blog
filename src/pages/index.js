import React, { useState, useContex } from "react"
import { Link, graphql } from "gatsby"
import Sidebar from "./sidebar"
import Item from "./components/Item"
import Files from "./my-files"
import Main from "./components/Main"

const PostList = ({ all }) => {
  return (
    <div className=" h-full sm:px-10 px-20 overflow-y-scroll">
      {all?.edges.map(({ node }, i) => {
        return (
          <Item
            title={node.frontmatter.title}
            summarize={node.excerpt}
            date={node.frontmatter.date}
            route={node.fields.slug}
          />
        )
      })}
    </div>
  )
}

const Article = () => {
  return (
    <div>
      <h1>Haha</h1>
    </div>
  ) 
}

export default function Home({ data }) {
  const [show, setShow] = React.useState(false)
  const { allMarkdownRemark: all } = data
  const State = React.createContext({ show: false })
  console.log(data)
  return (
    <>
      <State.Provider value={{ show }}>
        <div
          className=" flex-row  p-5  text-gray-200 flex flex-1 text-lg bg-back "
          id="container"
        >
          <Sidebar show={show} />
          <Main>
            {/* <div className=" h-full px-10 overflow-y-scroll"> */}
            {all?.edges.map(({ node }, i) => {
              return (
                <Item
                  title={node.frontmatter.title}
                  description={node.frontmatter.description}
                  date={node.frontmatter.date}
                  route={node.fields.slug}
                />
              )
            })}
            {/* </div> */}
          </Main>
          <span
            onClick={() => setShow(!show)}
            className="navigation-buttom  bottom-10 right-10 w-20 h-20 flex justify-center items-center shadow-2xl bg-rose rounded-full"
          >
            +
          </span>
        </div>
      </State.Provider>
    </>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          htmlAst
          rawMarkdownBody
          id
          frontmatter {
            title
            description
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
