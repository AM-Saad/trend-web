// pages/collection.tsx
'use client'
import { PORTFOLIO_PAGE } from '@/lib/constants';
import client from '@/lib/contentful'
import Section from '@/app/collection/section';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ISection } from '@/components/home/Collection';


const Collection = () => {
    const [pageContent, setPageContent] = useState<any>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)


    async function fetchData() {
        try {

            const res = await client.getEntries({ content_type: PORTFOLIO_PAGE })
            return res.items[0].fields
        } catch (error) {
        }
    }

    const getData = async () => {
        setIsLoading(true)
        const data = await fetchData()
        setIsLoading(false)

        if (data) {
            setPageContent(data)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    if (isLoading) {
        return <p>Loading...</p>
    }
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
        <div id='services'>
            <div className='my-10 pb-2'>
                <h1 className='title'>{pageContent.title}</h1>
                {pageContent.subTitle && <h2 className='subtitle'>{pageContent.subTitle}</h2>}
                <p className='description'>{pageContent.description}</p>
            </div>

            {pageContent.sections &&
                <motion.div

                    className='max-w-full grid md:grid-cols-2 lg:grid-cols-3 pb-2 gap-4'
                    initial="hidden"
                    animate="show"
                    variants={gridContainerVariants}
                >
                    {pageContent.sections.map((section: ISection, index: number) => <Section key={index} index={index} section={section} />)}
                </motion.div>
            }
        </div>
    )
}
export default Collection;
