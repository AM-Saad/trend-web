'use client'
import React from 'react'
import Card from '@/components/shared/Card'
import Grid from '@/components/shared/Grid'
import Button from './Button'
const Section: React.FC<{ section: any }> = ({ section }) => {
    return (
        <div className='mt-24'>
            <h2 className='font-bold text-2xl sm:text-5xl text-gray-500 my-5 capitalize lg:w-[70%] chrome'>{section.title}</h2>
            {section.subHeading && <p className='mt-6 text-left text-gray-500 md:text-xl lg:w-[50%]'>{section.subHeading}</p>}
            {section.blocks.length > 0 &&
                <Grid>
                    {section.blocks.map((service: any) =>
                        <Card style='h-50' key={service.title}>
                            <h3 className='font-bold sm:text-lg mb-3 text-brand'>{service.title}</h3>
                            <p className='text-gray-500'>{service.description}</p>
                        </Card>
                    )}
                </Grid>
            }
            {section.cta &&
                <Button
                    size='large'
                    style="bg-gradient-radial text-white mt-5"
                    title={section.cta}
                    onClick={() => section.cta === 'Contact Us' ? window.location.href = '/contactus' : null}
                />



            }

        </div >
    )
}

export default Section
