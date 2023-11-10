'use client'
import React from 'react'
import { motion } from "framer-motion"
import { Balancer } from 'react-wrap-balancer'
import { UUID } from 'crypto'
const Jobs: Job[] = [{
    id: 1,
    title: `Technical Web Consultant`,
    companyName: ``,
    location: `Remote`,
    date: `2022 — Now`,
    link: `https://tylertreadwell.com`,
}, {
    id: 2,
    title: `UI Designer`,
    companyName: `Broadridge`,
    location: `New York`,
    date: `2019 — 2022`,
    link: `https://www.broadridge.com/`,
}, {
    id: 3,
    title: `Founder`,
    companyName: `Zimute Media Inc`,
    location: `New York`,
    date: `2018 — 2022`,
    link: `http://zimute.com/`,

},
{
    id: 4,
    title: `Full Stack Web Engineer`,
    companyName: `Event Horizon Travel`,
    location: `Remote`,
    date: `2018 — 2019`,
    link: `https://eventhorizontravel.com/`,
},
{
    id: 5,
    title: `Freelance`,
    companyName: `TTreads Designs`,
    location: `Remote`,
    date: `2014 — 2019`,
    link: `https://tylertreadwell.com`,
},
]
interface Job {
    id: number,
    title: string;
    companyName: string;
    location: string;
    date?: string;
    link?: string;
}
function ExperiencePage() {
    return (
        <>  {Jobs.map((job, index) => <>

            {

                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }} // Initial state (hidden)
                    animate={{ opacity: 1, y: 0 }}  // Animation to apply
                    transition={{ duration: 0.5, delay: index * 0.3 }} // Duration and delay
                >
                    <ExperienceItem Job={job} key={index} />
                </motion.div>
            }
        </>)}</>
    )
}

export default ExperiencePage


function ExperienceItem(props: any) {
    return <div className="experience_item mt-5 md:flex justify-left gap-8">
        <div className="experience_date">
            <small className='text-[#8b8b8b]'>{props.Job.date}</small>
        </div>
        <div className="job align-left">
            <a className="flex align-center gap-1" target={props.Job.link ? "_blank" : "none"} href={props.Job.link ? props.Job.link : "#"}><span className='text-[14px]'>{<Balancer>{props.Job.title}</Balancer>} {props.Job.companyName ? "at" : ""} {props.Job.companyName}</span><span style={{ whiteSpace: "nowrap" }}><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z" fill="#111"></path></svg></span></a> <small className='text-[14px] text-[#8b8b8b]'>{props.Job.location}</small>
        </div>
    </div>
}
