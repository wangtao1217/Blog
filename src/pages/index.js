import React from "react"
import { graphql } from "gatsby"

import Item from "./components/Item"
import Main from "./components/Main"
import Layout from "./components/Layout"

const Home = ({ data }) => {
  const { allMarkdownRemark: all } = data
  // console.log(data)
  return (
    <>
      <Layout>
        <Main>
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
        </Main>
      </Layout>
    </>
  )
}

export default Home

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
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
