import React from "react"
import Menu from "./Menu"
import { Link } from "gatsby"

const Sidebar = ({ show }) => {
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
    {
      title: "实验室",
      route: "/experiment"
    }
  ]
  return (
    <div
      className={`${"mobile"} ${show} mr-8 box-border h-full shadow-xl  border-gray-600   bg-main  border-solid  rounded-xl flex py-14 p-20 justify-between flex-col`}
    >
      <Link to="/">
        <span className="flex justify-end text-gray-900 text-7xl">
          <span className="bg-tea w-28 h-28 rounded-2xl mr-10 overflow-hidden"></span>
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

      <span className="flex-1 text-gray-400 space-x-10 flex object-bottom justify-evenly items-end">
        <a className="link" href="https://github.com/wangtao1217">
          Github
        </a>
        <a className="link" href="https://space.bilibili.com/282193341">
          Bilibili
        </a>
      
        <a
          className="link"
          href="https://mail.163.com/js6/main.jsp?sid=WBMkUUteKSgiKXAMUNeeMgYYmoLEHDCY&df=mail163_letter#module=welcome.WelcomeModule%7C%7B%7D"
        >
          Email
        </a>
      </span>
    </div>
  )
}

export default Sidebar
