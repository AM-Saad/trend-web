'use client'
import React from 'react'
import Card from '@/components/shared/Card'
import Grid from '@/components/shared/Grid'
import Avatar from '@/components/shared/Avatar'

export const Testimonials: React.FC<{ section: any }> = ({ section }) => {
    const [showMore, setShowMore] = React.useState(false)
    return (
        <div className='mt-24 relative overflow-hidden'>
            <h2 className='section-title'>{section.title}</h2>
            {section.subHeading && <p className=' text-left text-gray-500 md:text-xl lg:w-[50%] my-5'>{section.subHeading}</p>}

            {section.blocks.length > 0 &&
                <>
                    <Grid>
                        {section.blocks.map((i: any, idx: number) =>
                            <Card style={`h-48 ${idx > 2 ? showMore ? 'block' : 'hidden md:block' : ''}`} key={i.title}>
                                <div className='flex items-center gap-3 mb-5'>
                                    <div className='w-8 h-8 bg-brand rounded-full shadow overflow-hidden'>
                                        {/* <Avatar name={i.fields.name} picture={i.fields.image.fields.file.url} /> */}
                                    </div>
                                    <h3 className='font-bold sm:text-lg text-brand'>{i.title}</h3>
                                </div>
                                <p className='text-paragraph  text-sm max-h-[75px] line-clamp-4 md:line-clamp-3'>{i.description}</p>
                            </Card>
                        )}
                    </Grid>
                    {!showMore && <span className='relative z-10 text-center block text-paragraph  text-lg md:hidden' onClick={() => setShowMore(true)}>
                        See More
                    </span>}
                    {!showMore && <div className='relative bg-gradient-radial-2 bottom-[7rem] h-32 left-0 p-1 w-screen md:hidden filter blur-[10px]'>
                    </div>}
                </>

            }
            {section.blocks.length === 0 && <p className='text-gray-500 text-sm'>No Testimonials found!</p>}
        </div>
    )
}
