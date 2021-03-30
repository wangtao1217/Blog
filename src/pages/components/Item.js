import React from "react"
import { graphql, Link } from "gatsby"

// type ItemProps = {
//     title: String
//     summarize: String
// }

const Item = ({ title, description, summarize, date, route }) => {
  return (
    <Link to={route}>
      <div className=" mb-5 px-5 py-10 bg-white hover:bg-gray-100 rounded-lg transition-all pointer">
        <h1 className="text-4xl text-gray-900">{title}</h1>
        <h3 className="mt-4 text-xl text-gray-500">
          {date ? date : "上辈子写的"}
        </h3>
        <p className="text-gray-400 mt-4 text-xl">{description}</p>
      </div>
    </Link>
  )
}

export default Item
