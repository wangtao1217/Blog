import React from "react"
import { Link } from "gatsby"

const Article = () => {
  return (
    <div className="flex flex-col justify-center w-full">
      <Link to="/">Home</Link>
      <h1 className="inline-block text-4xl text-red-400 ">有关人生的无意义</h1>
      <p></p>
    </div>
  )
}

export default Article
