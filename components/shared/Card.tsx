import React from 'react'

const Card: React.FC<{ children: React.ReactNode, style?: string }> = ({ children, style }) => {
    return (
        <div className={`flex flex-col p-4 shadow-md rounded-lg bg-gradient-to-tl from-black to-[#111] ${style}`}>
            {children}
        </div>
    )
}

export default Card
