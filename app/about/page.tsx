// pages/about.tsx
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { ABOUT_PAGE } from '@/lib/constants';
import client from '@/lib/contentful'
import { Metadata } from 'next';
import Founder from '@/assets/images/founder.png'
import Image from 'next/image';
export const metadata: Metadata = {
    title: 'About us | Coformatique',
    description: "Welcome to Coformatique, where innovation meets creativity to bring you the most cutting-edge solutions for all your technological needs",
}

async function getData() {
    const res = await client.getEntries({ content_type: ABOUT_PAGE })
    return res.items[0].fields
}

// Page component
const AboutPage = async () => {

    const pageContent: any = await getData()
    return (<div id='about'>
        <div className='my-10 pb-2'>
            <h1 className='title'>{pageContent.title}</h1>
            {pageContent.subTitle && <h2 className='subtitle'>{pageContent.subTitle}</h2>}
            <div className='grid grid-cols-2 justify-between'>

                <div className='description'>{documentToReactComponents(pageContent.description.content[0])}</div>
                <div>

                    <Image src={Founder}
                        alt="Founder Logo"
                        width={400}
                        height={400}
                        unoptimized
                    />
                </div>
            </div>
        </div>

        {pageContent.sections &&
            pageContent.sections.map((section: any, index: number) => (
                <div key={index} className='mb-12'>
                    <h2 className='section-title'>{section.fields.title}</h2>
                    {section.fields.subtitle && <h3 className='section-subtitle'>{section.fields.subtitle}</h3>}
                    <div className='section-content'>{documentToReactComponents(section.fields.content)}</div>
                </div>
            ))
        }

    </div >
    )
}
export default AboutPage;
