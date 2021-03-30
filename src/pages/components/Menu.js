import React from "react"
import { Link } from "gatsby"

const Menu = ({ data }) => {
  return (
    <div className="w-full flex flex-col  text-2xl text-gray-900 font-light items-end mt-10">
      {data?.map((item, i) => {
        const { title, route } = item
        return (
          <Link to={route} key={i}>
            <div className="w-full hover:text-tea hover:underline">
              <h1 className="my-6 text-4xl font-serif tracking-widest">{title}</h1>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Menu 


