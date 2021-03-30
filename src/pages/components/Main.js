import React from 'react'

const Main = ({children}) => {
    return (
        <div className="flex-1  h-full overflow-y-auto  ">
            {children}
        </div>
    )
}

export default Main
