'use client'
import React from 'react'
import Button from '../shared/Button'

const Contribution = () => {
    return (
        <div className='mb-10'>
            <h2 className='font-bold text-2xl sm:text-5xl text-gray-600 my-5'>Contributing to the <br />Open Source Community</h2>
            <p className='mt-6 text-left text-gray-500 md:text-xl'>We believe in giving back by sharing our knowledge and expertise through open source projects.</p>
            <Button size='large' style="bg-gradient-radial text-white mt-5 text-xs" onClick={() => { }} title='Explore Our Projects' />
        </div>
    )
}

export default Contribution