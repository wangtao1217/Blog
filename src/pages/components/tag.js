import React from "react"
import { Link } from 'gatsby'

const Tag = ({ children }) => {
  return (
    <span className="inline-block bg-gray-100 text-2xl  hover:underline m-3 px-8 py-2 text-gray-500">
      <Link className="link" to='/tag-list'># {children}</Link>
    </span>
  )
}

export default Tag
