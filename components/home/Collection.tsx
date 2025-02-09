'use client'
import Section from "@/app/collection/section"
import { ISection } from "@/app/page"
import { motion } from "framer-motion"

export const Collection:React.FC<{sections:ISection[]}>  = ({sections}) =>{

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

    return                <motion.div

    className='max-w-full grid md:grid-cols-2 lg:grid-cols-3 pb-2 gap-4'
    initial="hidden"
    animate="show"
    variants={gridContainerVariants}
>
    {sections.map((section: ISection, index: number) => <Section key={index} index={index} section={section} />)}
</motion.div>

}
