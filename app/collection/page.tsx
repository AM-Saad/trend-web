// pages/collection.tsx
'use client'
import { PORTFOLIO_PAGE } from '@/lib/constants';
import client from '@/lib/contentful'

import { useCallback, useEffect, useState } from 'react';
import { Collection } from '@/components/home/Collection';


const Collections = () => {
    const [pageContent, setPageContent] = useState<any>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)


    async function fetchData() {
        try {

            const res = await client.getEntries({ content_type: PORTFOLIO_PAGE })
            return res.items[0].fields
        } catch (error) {
        }
    }

    const getData = useCallback( async () => {
            setIsLoading(true)
            const data = await fetchData()
            setIsLoading(false)
            console.log(data)
            if (data) {
                setPageContent(data)
            }

    },[])

    useEffect(() => {
        getData()
    }, [getData])

    if (isLoading) {
        return <p>Loading...</p>
    }


    return (
        <div id='services'>
            <div className='my-10 pb-2'>
                <h1 className='title'>{pageContent.title}</h1>
                {pageContent.subTitle && <h2 className='subtitle'>{pageContent.subTitle}</h2>}
                <p className='description'>{pageContent.description}</p>
            </div>

            {pageContent.sections && <Collection sections={pageContent.sections} />
            }
        </div>
    )
}
export default Collections;
