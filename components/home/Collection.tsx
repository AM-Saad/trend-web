'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useSpring, useTransform, Variant, Variants } from 'framer-motion'
import Button from '../shared/Button'


export interface ISection
    {
        fields:{
            title:string
            subTitle:string
            displayInHome:boolean
            homeShortText:string
            logo:{
                fields: { title: string, file: {
                    url:string
                } }
            }
            content:{
                content:unknown[]
            }
        }

}
interface IProp{
    title:string;
    subTitle:string;
    description:string;
    sections:ISection[]
}

const Collection: React.FC<{ services: IProp }> = ({ services }) => {
    const carouselRef = useRef(null)
    const { scrollY } = useScroll()

    const gridContainerVariants = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: .5
            }
        },
    }
    return (
        <motion.div className='mt-24 block' ref={carouselRef}>
            <h2 className='section-title'>{services.title}</h2>

            {services.sections && services.sections.length > 0 &&
                <motion.div
                    variants={gridContainerVariants}
                    initial="hidden"
                    animate="show"
                    className='grid grid-cols-3 gap-4 py-4 items-stretch content-center place-items-center justify-items-center'>
                    {services.sections.map((section: ISection, index: number) => {
                        const bgClass =
                            index % 4 === 0 ? "col-span-2" :
                                index % 4 === 1 || index % 4 === 2 ? "col-span-1" :
                                    "col-span-2";
                        if (section.fields.displayInHome)
                            return <motion.div
                                className={`bg-black rounded-lg p-5 shadow-xl shadow-zinc-900 ${bgClass}`}
                                variants={{
                                    hidden: {
                                        opacity: 0
                                    },
                                    show: {
                                        opacity: 1,
                                    }
                                }}
                            >
                                <Image
                                    src={"https:" + section.fields.logo.fields.file.url}
                                    alt={section.fields.logo.fields.title}
                                    width={3000}
                                    height={1000}
                                    key={index}
                                />
                                <p className='text-paragraph text-sm'>{section.fields.homeShortText}</p>
                                <Button title="Book" onClick={() => {
                                    window.location.href = '/contactus'
                                }} style="border border-brand bg-black text-white" size="large" >

                                </Button>
                            </motion.div>
                    })}
                </motion.div>
            }


            {services.sections && services.sections.length === 0 && <p className='text-gray-500 text-sm'>No Projects found!</p>}
        </motion.div>
    )
}

export default Collection
