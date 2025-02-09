'use client'
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { ISection } from "../page";


const Section = ({ index, section }: {index:number,section:ISection}) => {
    const bgClass =
        index % 4 === 0 ? "col-span-2" :
            index % 4 === 1 || index % 4 === 2 ? "col-span-1" :
                "col-span-2";
    return (
        <motion.div
            key={index}
            className={`bg-gray-50 rounded-2xl p-4 shadow  ${bgClass}`}
            variants={{
                hidden: {
                    opacity: 0
                },
                show: {
                    opacity: 1,
                }
            }}
            transition={{
                duration: 1
            }}
            initial="show"
            whileInView='show'
            viewport={{ once: false }}
        >
            <div className='col-span-2 object-contain h-3/4 flex rounded-2xl shadow-md overflow-hidden p-2 bg-white'>
                <motion.img
                    src={section.fields.logo.fields.file.url}
                    alt={section.fields.logo.fields.title}
                    width={200}
                    height={400}
                    className='m-auto object-contain w-96' />
            </div>
            <Balancer>
                <motion.div
                    className='text-gray-500 my-4 text-sm flex items-start gap-x-3'
                    initial="hidden"
                    whileInView="show"
                    variants={{
                        hidden: {},
                        show: {
                            transition: {
                                staggerChildren: 0.55,
                            },
                        },
                    }}
                >
                    <p className='text-sm'><span className='font-bold'>{section.fields.title}</span>{section.fields.content && documentToReactComponents(section.fields.content.content[0] as any)}</p>
                </motion.div>
            </Balancer>

        </motion.div>
    )
}

export default Section
