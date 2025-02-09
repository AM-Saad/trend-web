import React from 'react'
import Head from 'next/head';

interface MetaProps {
    title?: string;
    description?: string;
    image?: any;
}


const Meta:React.FC<MetaProps> = ({title, description, image}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta property='og:title' content={title} />
            <meta property='og:description' content={description} />
            <meta property='og:image:alt' content={title} />
            {/* <meta property='og:image' content={image.file.url} /> */}
            {/* <meta property='og:image:width' content={image.file.details.image.width} />
            <meta property='og:image:height' content={image.fields.file.details.image.height} /> */}
        </Head>
    )
}

export default Meta