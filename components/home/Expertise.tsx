'use client'
import React from 'react'
import Card from '@/components/shared/Card'
import Grid from '@/components/shared/Grid'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Expertise: React.FC<{ services: any }> = ({ services }) => {
    return (
        <div className='mt-16'>
            <h2 className='section-title text-gray-500'>{services.title}</h2>

            {services.sections && services.sections.length > 0 &&
             <motion.div
             onViewportEnter={(entry) => console.log(entry?.isIntersecting)}
             onViewportLeave={(entry) => console.log(entry?.intersectionRect)}
             >
            <Grid>
                {services.sections.map((section: any, index: number) => {
                    if (section.fields.displayInHome)
                        return <Link href={`/services#${section.fields.title}`}>
                            <Card style='h-40' key={index}>
                                <h3 className='font-bold sm:text-lg mb-3 text-brand line-clamp-1'>{section.fields.title}</h3>
                                <p className='text-paragraph text-sm max-h-[75px] line-clamp-4 md:line-clamp-3'>{section.fields.homeShortText}</p>
                            </Card>
                        </Link>
                })}
            </Grid>
            </motion.div>
            }

            {services.sections && services.sections.length === 0 && <p className='text-gray-500 text-sm'>No Services found!</p>}
        </div>
    )
}

export default Expertise
