'use client'
import React, { useEffect } from 'react'
import tyler from '@/app/tyler.jpg'
import { motion } from "framer-motion"
import { Balancer } from 'react-wrap-balancer'
import Image from 'next/image'
import Footer from '@/components/Footer'
import NavTabs from '@/components/NavTabs'
import Link from 'next/link'

const Jobs: Job[] = [{
    title: `Technical Web Consultant`,
    companyName: ``,
    location: `Remote`,
    date: `2022 — Now`,
    link: `https://tylertreadwell.com`,
}, {

    title: `UI Designer`,
    companyName: `Broadridge`,
    location: `New York`,
    date: `2019 — 2022`,
    link: `https://www.broadridge.com/`,
}, {
    title: `Founder`,
    companyName: `Zimute Media Inc`,
    location: `New York`,
    date: `2018 — 2022`,
    link: `http://zimute.com/`,

},
{
    title: `Full Stack Web Engineer`,
    companyName: `Event Horizon Travel`,
    location: `Remote`,
    date: `2018 — 2019`,
    link: `https://eventhorizontravel.com/`,
},
{
    title: `Freelance`,
    companyName: `TTreads Designs`,
    location: `Remote`,
    date: `2014 — 2019`,
    link: `https://tylertreadwell.com`,
},
]

const Tabs: Tab[] = [
    { name: 'Experience', href: 'experience', current: true },
    // { name: 'Consulting', href: 'consulting', current: false },
    // { name: 'Latest Projects', href: 'projects', current: false },

]


interface Tab {
    name: string;
    href: string;
    current: boolean;

}
interface Job {
    title: string;
    companyName: string;
    location: string;
    date?: string;
    link?: string;
}

export default function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [Year, setYear] = React.useState(0)
    const [FadeDuration, setFadeDuration] = React.useState(0)
    const [Theme, setTheme] = React.useState("light")
    const [isDarkMode, setIsDarkMode] = React.useState(false);
    const [CurrentDomain, setCurrentDomain] = React.useState("")
    useEffect(() => {
        let date = new Date()
        let year = date.getFullYear();
        setYear(year)

        let fadeDur = Jobs.length
        setFadeDuration(fadeDur)

        if (typeof window !== 'undefined') {

            const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

            const handleDarkModeChange = (event: { matches: boolean | ((prevState: boolean) => boolean) }) => {
                setIsDarkMode(event.matches);
            };

            darkModeMediaQuery.addEventListener('change', handleDarkModeChange);

            // Initial check
            setIsDarkMode(darkModeMediaQuery.matches);

            setCurrentDomain(window.location.origin)

        }


        if (isDarkMode == false) {

            let myDate = new Date();
            let hrs = myDate.getHours();
            console.log(hrs)


            if (hrs < 12) {
                setTheme('light');
            }

            if (hrs >= 12 && hrs <= 17) {
                setTheme('light');
            }

            if (hrs >= 17 && hrs <= 24) {

                setTheme('dark_theme');
            }
        }

        if (isDarkMode == true) {
            setTheme('dark_theme');
        }



    }, [isDarkMode])

    return (
        <div className={`${Theme}`}>
            <header className="max-w-[100vw] min-h-[30px]"></header>
            <main className='p-5 pt-0 min-h-[80vh] pb-0'>
                <div className="max-w-[640px] m-auto md:p-5 pt-0 ">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }} // Initial state (hidden)
                        animate={{ opacity: 1, y: 0 }}  // Animation to apply
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-x-5">
                            {/* <Image width={92} height={92} className="rounded-full" src={tyler.src} alt="Tyler Treadwell" /> */}

                            <div>
                                <Link href={CurrentDomain}>
                                    <h3 className="text-[21pt] font-bold leading-7 tracking-tight text-[#282C32]">Tyler Treadwell</h3>
                                </Link>
                                <p className="text-sm font-normal leading-6 text-[#555]">UI Engineer in New York</p>
                                {/* <div className="status flex align-center gap-2"><div className="blink"></div> <small className='uppercase text-[10px] font-bold relative mt-1' aria-label="Activity status building">building</small></div> */}
                            </div>

                        </div>


                        <div className='pt-8 pb-8'>

                            <h3 className='text-[14px]'>About</h3>
                            <p className='text-[#282C32]'><Balancer>I am a forward-thinking UI engineer, and entrepreneur. My day to day involves assisting founders in creating end-to-end SaaS solutions for their clients.</Balancer></p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }} // Initial state (hidden)
                        animate={{ opacity: 1, y: 0 }}  // Animation to apply
                        transition={{ duration: 0.5 }}
                    >

                        <NavTabs tabs={Tabs} />
                    </motion.div>

                    <div className='mt-8'>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} // Initial state (hidden)
                            animate={{ opacity: 1, y: 0 }}  // Animation to apply
                            transition={{ duration: 0.8 }}
                        >
                            {children}
                        </motion.div>
                    </div>

                </div>
            </main>
            <motion.div
                key={FadeDuration}
                initial={{ opacity: 0, y: 20 }} // Initial state (hidden)
                animate={{ opacity: 1, y: 0 }}  // Animation to apply
                transition={{ duration: 0.5, delay: FadeDuration * 0.3 }} // Duration and delay
                className='p-5'
            >

                <Footer Year={Year} />
            </motion.div>
        </div>
    )
}


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






