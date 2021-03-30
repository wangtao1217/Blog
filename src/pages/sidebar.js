import React from "react"
// import { Link, useHistory } from "react-router-dom"
import Menu from "./components/Menu"
import { Link } from "gatsby"
const Sidebar = ({show}) => {
  // let history = useHistory()
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
  // sm:fixed transform sm:-translate-x-80
  return (
    <div className={`${'mobile'} ${show} mr-10 box-border h-full shadow-xl  border-gray-600  bg-main  border-solid  rounded-xl py-14 p-20 justify-start`}>
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
