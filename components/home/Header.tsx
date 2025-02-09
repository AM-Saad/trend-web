"use client"
import Balancer from "react-wrap-balancer";
import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity, Variant, Variants } from "framer-motion";
import { FADE_DOWN_ANIMATION_VARIANTS, FADE_UP_ANIMATION_VARIANTS } from "@/lib/constants";
import Button from "@/components/shared/Button";
import { wrap } from "@motionone/utils";
import { useRef } from "react";

const Header: React.FC<{ title: string, subHeading: any, image: any, bannerTransparent: any }> = ({ title, subHeading, image, bannerTransparent }) => {
    const { scrollY } = useScroll()
    const translateZ = useTransform(
        scrollY,
        [0, 100],
        [0, 360],
        { clamp: false }
    )

    const variant: Variants = {
        hidden: {

        }
    }
    return (
        <motion.div
            className="relative overflow-hidden md:h-[60vh] rounded-md mb-4">
            <motion.div className="py-8 bg-gray-500/10 backdrop-blur-md h-full overflow-hidden rounded-md px-2"
                initial="hidden"
                whileInView="show"
                animate="show"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    show: {
                        transition: {
                            staggerChildren: 0.15,
                        },
                    },
                }}>
                <motion.h1
                    className="bg-gradient-to-br from-white to-gray-400 bg-clip-text
                    font-display text-3xl md:text-4xl font-bold text-left lg:text-5xl tracking-[-0.02em] text-transparent
                    drop-5shadow-sm lg:leading-[3rem]
                    lg:w-[60%]"
                    variants={FADE_DOWN_ANIMATION_VARIANTS}>
                    <Balancer>{title}</Balancer>
                </motion.h1>

                <motion.p
                    className="mt-6 text-left text-paragraph md:text-2xl"
                    variants={FADE_DOWN_ANIMATION_VARIANTS}>
                    <Balancer>
                        {subHeading.content[0].content[0].value}
                    </Balancer>
                </motion.p>
                <motion.div className="mx-auto mt-6 flex items-center space-x-5" transition={{ duration: 5 }} >
                    <Button title="Get in touch" onClick={() => {
                        window.location.href = '/contactus'
                    }} style="bg-gradient-radial text-white" size="large" >
                        <span className="wave mt-[1px] ml-1"> 👋</span>
                    </Button>
                </motion.div>
            </motion.div>


            <motion.div
                className="h-full absolute top-0 right-0 "
                initial={{ opacity: 0 }}
                animate={{ opacity: .3 }}
                transition={{
                    duration: .9
                }}
            >
                <motion.img
                    variants={FADE_UP_ANIMATION_VARIANTS}
                    src={image.fields.file.url}
                    className="w-full "
                    alt="Trend Car Rental Logo"
                />

            </motion.div>
            <motion.div className=" h-full absolute top-0 right-0 z-[0]">
                <motion.img
                    initial={{ translateX: '10%', opacity: 0.5, translateY: '-10px' }}
                    animate={{ translateX: '0%', opacity: 1, translateY: '0' }}
                    transition={{
                        duration: .8
                    }}
                    variants={FADE_UP_ANIMATION_VARIANTS}
                    src={bannerTransparent.fields.file.url}
                    className="w-full "
                    alt="Trend Car Rental Logo"
                />
            </motion.div>
        </motion.div>
    )
}

export default Header
