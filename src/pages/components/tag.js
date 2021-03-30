import React from 'react'

const Tag = ({children}) => {
    return (
        <div className='bg-gray-100 px-2 py-1 rounded-sm hover:underline'>
            {children}
        </div>
    )
}

export default Tag
