// pages/services.tsx
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { SERVICES_PAGE } from '@/lib/constants';
import client from '@/lib/contentful'
import { Metadata } from 'next';




export const metadata: Metadata = {
  title: 'Services | Coformatique',
  description: "Welcome to Coformatique, where innovation meets creativity to bring you the most cutting-edge solutions for all your technological needs",
}

async function getData() {
  const res = await client.getEntries({ content_type: SERVICES_PAGE })
  return res.items[0].fields
}

// Page component
const ServicesPage = async () => {
  const pageContent: any = await getData()

  return (
    <>


      <div id='services'>
        <div className='my-10 pb-2'>
          <h1 className='title'>{pageContent.title}</h1>
          {pageContent.subTitle && <h2 className='subtitle'>{pageContent.subTitle}</h2>}
          <p className='description'>{pageContent.description}</p>
        </div>

        {pageContent.sections &&
          pageContent.sections.map((section: any, index: number) => (
            <div key={index} className='my-12' id={section.fields.title}>
              <h2 className='section-title'>{section.fields.title}</h2>
              {section.fields.subTitle && <h3 className='section-subtitle'>{section.fields.subTitle}</h3>}
              <div className='section-content'>{documentToReactComponents(section.fields.content)}</div>
            </div>
          ))
        }

      </div>
    </>
  )
}
export default ServicesPage;
