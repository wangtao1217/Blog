import React from "react"
import Menu from "./Menu"
import { Link } from "gatsby"


const Sidebar = ({show}) => {
  const menu_data = [
    {
      title: "档案",
      route: "/record",
    },
    {
      title: "标签",
      route: "/tags",
    },
    {
      title: "读书",
      route: "/reading",
    },
  ]
  return (
    <div className={`${'mobile'} ${show} mr-8 box-border h-full shadow-xl  border-gray-600  bg-main  border-solid  rounded-xl py-14 p-20 justify-start`}>
      <Link to="/">
        <span className="flex justify-end text-gray-900 text-7xl">
          <span className="bg-gray-300 w-32 h-32 rounded-2xl mr-10 overflow-hidden"></span>
          <span>
            <h1 className="text-5xl">
              Hooo
              <br />
              No
            </h1>
          </span>
        </span>
      </Link>

      <Menu data={menu_data} />
      <span></span>
      
    </div>
  )
}

export default Sidebar
