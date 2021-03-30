import React from 'react'

const Layout = ({children}) => {
    return (
        <div className="full-screen flex-row  p-5  text-gray-200 flex flex-1 text-lg bg-back">
            {children}
        </div>
    )
}

export default Layout
