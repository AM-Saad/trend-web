"use client";
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import useScroll from "@/lib/hooks/use-scroll";
import Image from "next/image";
import Logo from '@/assets/images/LogoColor.png'
import Button from '@/components/shared/Button'
import { motion } from 'framer-motion';


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
        href: "/collection",
        name: "Collection",
    }

];
const Nav = () => {
    const scrolled = useScroll(30);
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div
            className={`fixed top-0 w-full z-30 transition-all translate-x-[-50%] left-[50%] px-4
            ${scrolled
                    ? "border-b border-[#111] bg-stale-100/50 backdrop-blur-xl "
                    : "bg-white/0"
                }`}
        >
        {/* <motion.div className='fixed top-20 bg-red-500 w-full h-2 text-lg text-white'>{scrollY}</motion.div> */}

            <div className="flex h-16 items-center justify-between px-3">
                <Link href="/" className="font-bold text-3xl text-white">
                    {/* <Image
                        src={Logo}
                        alt=" Logo"
                        width="150"
                        height="150"
                        className="mr-2 rounded-sm"
                    /> */}
                    TREND
                     <span className='block text-xs font-medium text-center text-brand'>Car Rental</span>
                </Link>
                <div className=" items-center hidden md:flex gap-2">
                    {links.map((link) => (
                        <Link
                            key={link.href} href={link.href} className="px-3 py-2 rounded-md text-sm font-medium text-gray-200 hover:text-gray-900 hover:bg-gray-50 transition-colors">
                            {link.name}
                        </Link>
                    ))}
                    <Button title="Contact Us" onClick={() => {
                        window.location.href = '/contactus'
                    }} style={'bg-gradient-radial text-white'} />
                </div>
                <div className='md:hidden'>
                    <button
                        type="button"
                        className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-white"
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="#fff"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                        <svg
                            className="hidden h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="#fff"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                    <div
                        onClick={() => isOpen && setIsOpen(false)}
                        className={`md:hidden fixed top-16 h-screen bg-black bg-opacity-10 w-full p-2 mt-2 transition-opacity duration-1000 ${isOpen ? 'left-0 opacity-1' : '-left-[100%] opacity-0'}`}>

                        <ul
                            className={`md:hidden fixed top-16 h-screen bg-stale-100/50 backdrop-blur-xl  w-2/3 p-2 shadow-lg transition-all duration-700 ${isOpen ? 'left-0' : '-left-60'}`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => isOpen && setIsOpen(false)}

                                    className="px-3 py-2 rounded-md font-medium text-white text-xl ml-3 hover:text-gray-900 hover:bg-gray-50 transition-colors block my-2">
                                    {link.name}
                                </Link>
                            ))}
                            <Button title="Get in touch" onClick={() => {
                                window.location.href = '/contactus'
                            }} style="bg-gradient-radial text-white ml-5 mt-5" size="large" >
                                <span className="wave mt-[1px] ml-1"> 👋</span>
                            </Button>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Nav
