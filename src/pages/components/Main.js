import React from 'react'

const Main = ({children}) => {
    return (
        <div className="flex-1  h-full overflow-y-scroll  ">
            {children}
        </div>
    )
}

export default Main
