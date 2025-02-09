import React from 'react'

const Grid: React.FC<{ children: React.ReactNode, cols?:number }> = ({children, cols = 3}) => {
    return (
        <div className={`grid sm:grid-cols-2 md:grid-cols-3 max-w-full overflow-hidden gap-8 py-4`} >
            {children}
        </div>
    )
}

export default Grid
