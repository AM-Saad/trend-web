'use client';
import React, { useEffect, useRef, useState } from 'react'

const Skills = () => {
    const skillsSlider: any = useRef(null); // Using a ref to directly interact with the DOM
    const [isHovering, setIsHovering] = useState<boolean>(false)

    const skills: string[] = [

        "Web apps",
        "Blockchain",
        "AI/ML",
        "IoT",
        "AR/VR",
        "Product development consultancy",
        "A/B series startups",
        "Enterprise software",
        "Mobile apps",
        "Cloud Engineering",
        "DevOps",
        "QA",
        "UI/UX",
        "Digital transformation",
        "Product management",
        "Business analysis",
        "Software architecture",
        "Software development",
        "Software testing",
        "Software virtualization",
        "Software as an infrastructure"
    ]

    const colors = [
        "bg-red-300",
        "bg-green-300",
        "bg-blue-300",
        "bg-yellow-300",
        "bg-pink-300",
        "bg-purple-300",
        "bg-indigo-300",
        "bg-gray-300",
        "bg-red-400",
        "bg-green-400",
        "bg-blue-400",
        "bg-yellow-400",
        "bg-pink-400",
        "bg-purple-400",
        "bg-indigo-400",
        "bg-gray-400",
        "bg-red-200",
        "bg-green-200",
        "bg-blue-200",
        "bg-yellow-200",
        "bg-pink-200",
        "bg-purple-200",
        "bg-indigo-200",
        "bg-gray-200",
        "bg-red-500",
        "bg-green-500",
        "bg-blue-500",
        "bg-yellow-500",
        "bg-pink-500",
        "bg-purple-500",
        "bg-indigo-500",
        "bg-gray-500",
        "bg-red-400",
        "bg-green-400",
        "bg-blue-400",
        "bg-yellow-400",
        "bg-pink-400",
        "bg-purple-400",
        "bg-indigo-400",
        "bg-gray-400",
    ]
    useEffect(() => {
        const scrollElement = skillsSlider.current;

        const skillsInterval = setInterval(() => {
            if (isHovering) return
            if (scrollElement.scrollLeft >= scrollElement.scrollWidth - scrollElement.clientWidth) {
                // When reaching the end, set the scroll position back to 0
                scrollElement.scrollLeft = 0
            } else {
                scrollElement.scrollLeft += 1;
            }


        }, 20);

        return () => clearInterval(skillsInterval);
    }, [isHovering]);
    return (

        <div
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className={`flex-1 overflow-auto no-scrollbar rounded opacity-50 hover:opacity-70`} id='skills' ref={skillsSlider}>
            <div className='h-[200px] w-[2000px]'>
                <div className='w-[80%'>
                    {skills.map((skill, index) => <div key={skill} className={`px-2 grid-item rounded-full inline-block m-2 col-span-1  ${colors[index + 3]} text-sm`}>{skill}</div>)}
                    {skills.map((skill, index) => <div key={skill} className={`px-2 grid-item rounded-full inline-block m-2 col-span-1  ${colors[index]} text-sm`}>{skill} </div>)}
                    {skills.map((skill, index) => <div key={skill} className={`px-2 grid-item rounded-full inline-block m-2 col-span-1  ${colors[index + 3]} text-sm`}>{skill}</div>)}
                </div>
            </div>
        </div>
    )
}

export default Skills