import React, { useState } from "react"
import SideBar from "./sidebar"
import Main from "./Main"

const Layout = ({ children }) => {
  const [show, setShow] = useState(true)

  return (
    <div className="full-screen flex-row  p-5  text-gray-200 flex flex-1 text-lg bg-back">
      <SideBar show={show} />
      <Main>{children}</Main>
      <span
        onClick={() => setShow(!show)}
        className="navigation-buttom text-4xl bottom-5 right-5 w-16 h-16 center shadow-lg bg-tea rounded-full"
      >
        +
      </span>
    </div>
  )
}

export default Layout
