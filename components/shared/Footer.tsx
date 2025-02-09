'use client'
import Image from 'next/image'
import React from 'react'
import Logo from '@/assets/images/LogoColor.png'
import Icon from '@/assets/images/IconColored.png'
import Facebook from '@/assets/images/social_media/facebook.svg'
import LinkedIn from '@/assets/images/social_media/linkedin.svg'
import Instagram from '@/assets/images/social_media/instagram.svg'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';



const links = [
    {
        href: '/about',
        name: "About",
    },
    {
        href: "/services",
        name: "Services",
    },
    {
        href: "/portfolio",
        name: "Portfolio",
    },
    {
        href: "/contactus",
        name: "Contact Us",
    },
    {
        href: "/careers",
        name: "Careers",
    },
    {
        href: "/blog",
        name: "Blog",
    },
    {
        href: "/open-source",
        name: "Open Source Contributions",
    },
];

const Footer = () => {

    const year = new Date().getFullYear();
    return (
        <div className="w-full bg-black py-3 text-center text-sm mt-16 rounded">

            <div className='flex items-center gap-8'>
                <div className='h-[2px] w-full bg-brand'></div>
                <Image
                    src={Icon}
                    alt="Trend Car Rental icon Logo"
                    width={60}
                />
                <div className='h-[2px] w-full bg-brand'></div>
            </div>

            <div className='grid sm:grid-cols-2 justify-between p-2'>
                <div>
                    <h2 className='font-bold text-gray-100 mb-2 text-left'>Quick Links</h2>
                    <ul className='text-gray-300 md:grid md:grid-cols-2 md:gap-y-2 text-left'>
                        {links.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    className='transition-colors hover:text-brand'
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='justify-self-center'>
                    <div>

                        <Image
                            src={Logo}
                            alt="Coformatique Logo"
                            width={200}
                            height={200} />
                    </div>
                    <ul className='flex gap-x-5 items-center'>
                        <li>
                            <a
                                href="https://www.linkedin.com/company/coformatique"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 transition-colors hover:text-gray-800"
                            >
                                <Image
                                    src={LinkedIn}
                                    alt="LinkedIn"
                                    width={30}
                                    height={30}
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.facebook.com/coformatique"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 transition-colors hover:text-gray-800"
                            >
                                <Image
                                    src={Facebook}
                                    alt="Facebook"
                                    width={30}
                                    height={30}
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/coformatique"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 transition-colors hover:text-gray-800"
                            >
                                <Image
                                    src={Instagram}
                                    alt="Instagram"
                                    width={30}
                                    height={30}
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <p className="text-gray-500">
                <a
                    className="text-gray-800 transition-colors"
                    rel="noopener noreferrer"
                >

                    All Rights Reserved For <sup> &copy;</sup>Coformatique {year}.
                </a>
            </p>
        </div>

    )
}

export default Footer
