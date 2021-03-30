import React from "react"
import { graphql } from "gatsby"
import Layout from "../pages/components/Layout"
import Main from "../pages/components/Main"
import ReactMarkdown from "react-markdown"
import Tag from "../pages/components/tag"
import Item from "../pages/components/Item"

const TagList = ({ data, context }) => {
  // const post = data.markdownRemark
  // console.log(context);
  return (
    <Layout>
      <div className="p-10  bg-white h-full overflow-auto">
        <h2 className="center text-gray-600 border-b-2 border-gray-200 pb-10">
          #Html
        </h2>
        <div className="divide-y-4 divide-yellow-600 divide-dashed">
          {[1, 2, 3, 4].map(() => (
            <Item title={"haha"} description={"gagagagaag"} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default TagList
