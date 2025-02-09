import React from 'react'
import Header from "@/components/home/Header";
import Expertise from "@/components/home/Expertise";
import Collection from "@/components/home/Collection";
import client from '@/lib/contentful'
import Sections from '@/components/shared/Section';
import { HOME_PAGE, SERVICES_PAGE, PORTFOLIO_PAGE } from '@/lib/constants';
import { transformSections } from '@/lib/utils';
import Skills from '@/components/shared/Skills';
import { Testimonials } from '@/components/home/Testimonials';
import { ParallaxText } from '@/components/home/ParallaxProps';




async function getData() {
  const res = await client.getEntries({ content_type: HOME_PAGE })
  return res.items[0].fields
}


async function getServices() {
  const res = await client.getEntries({ content_type: SERVICES_PAGE })
  return res.items[0].fields
}

async function getPortfolio() {
  const res = await client.getEntries({ content_type: PORTFOLIO_PAGE })
  return res.items[0].fields
}

const Home = async () => {
  const { sections, title, subHeading, banner,bannerTransparent }: any = await getData()

  const services: any = await getServices()

  const portfolio: any = await getPortfolio()

  return (
    <>
      <Header title={title} subHeading={subHeading} image={banner} bannerTransparent={bannerTransparent}/>
      <ParallaxText baseVelocity={-5}>Framer Motion</ParallaxText>
      <ParallaxText baseVelocity={5}>Test velocity</ParallaxText>
      <Expertise services={services} />
      <Collection services={portfolio} />
      <div className='mt-24'>
        <Skills />
      </div>
      {transformSections(sections)!.map((section: any, index: number) => section.title !== 'Trusted by Our Clients' ? <Sections section={section} key={index} /> :
        <Testimonials section={section} key={index} />
      )}
    </>
  )
}

export default Home
