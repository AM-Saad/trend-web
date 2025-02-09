'use client'
import React from 'react'
import Button from '../shared/Button'

const Contribution = () => {
    return (
        <div className='mb-10'>
            <h2 className='font-bold text-2xl sm:text-5xl text-gray-600 my-5'>Ready to Accelerate Your <br />Global Business?</h2>
            <p className='mt-6 text-left text-gray-500 md:text-xl'>Get in touch with our experts to discuss your project requirements <br />and discover how we can drive your success.</p>
            <Button size='large' style="bg-gradient-radial text-white mt-5" onClick={() => {
                window.location.href = '/contactus'

            }} title='Contact Us' />
        </div>
    )
}

export default Contribution