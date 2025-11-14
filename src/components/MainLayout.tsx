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
    const [theme, setTheme] = React.useState<'light' | 'dark'>('light')
    const [hasExplicitPreference, setHasExplicitPreference] = React.useState(false)

    useEffect(() => {
        const date = new Date()
        setYear(date.getFullYear())
        setFadeDuration(Jobs.length)

        if (typeof window === 'undefined') {
            return
        }

        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
        const storedTheme = window.localStorage.getItem('theme')

        if (storedTheme === 'dark' || storedTheme === 'light') {
            setTheme(storedTheme)
            setHasExplicitPreference(true)
        } else if (prefersDark.matches) {
            setTheme('dark')
        }

        const handleSystemThemeChange = (event: MediaQueryListEvent) => {
            const hasExplicitPreference = window.localStorage.getItem('theme')
            if (!hasExplicitPreference) {
                setTheme(event.matches ? 'dark' : 'light')
            }
        }

        prefersDark.addEventListener('change', handleSystemThemeChange)

        return () => prefersDark.removeEventListener('change', handleSystemThemeChange)
    }, [])

    useEffect(() => {
        if (typeof document === 'undefined') {
            return
        }
        document.documentElement.classList.toggle('dark', theme === 'dark')
        document.body.classList.toggle('dark_theme', theme === 'dark')
        if (typeof window !== 'undefined') {
            if (hasExplicitPreference) {
                window.localStorage.setItem('theme', theme)
            } else {
                window.localStorage.removeItem('theme')
            }
        }
    }, [theme, hasExplicitPreference])

    const toggleTheme = () => {
        setHasExplicitPreference(true)
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
    }

    return (
        <div className="transition-colors duration-300">
            {/* <header className="max-w-[100vw] min-h-[30px]"></header> */}
            <main className='p-5 pt-0 min-h-[80vh] pb-0 bg-white text-[#282C32] dark:bg-[#050505] dark:text-gray-100 transition-colors duration-300'>
                <div className="max-w-[640px] m-auto md:p-5 pt-0 ">
                    <div className="flex justify-end pb-4">
                        <button
                            type="button"
                            onClick={toggleTheme}
                            className="inline-flex hidden items-center gap-2 rounded-full border border-gray-300 dark:border-gray-700 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-gray-600 dark:text-gray-200 transition-colors duration-200 hover:border-black dark:hover:border-gray-400"
                            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                        >
                            {theme === 'dark' ? (
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                    <path
                                        d="M12 18a6 6 0 0 0 0-12v12Zm0 0a6 6 0 1 1-5.657-8.486A7.5 7.5 0 0 0 12 21a7.5 7.5 0 0 0 6.657-11.486A6 6 0 0 1 12 18Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            ) : (
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                    <path
                                        d="M12 5V3m5 9h2m-7 7v2m-7-9H3m15.364 6.364 1.414 1.414M4.222 6.222 5.636 7.636m0 8.728-1.414 1.414M18.364 7.636l1.414-1.414M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            )}
                            <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
                        </button>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }} // Initial state (hidden)
                        animate={{ opacity: 1, y: 0 }}  // Animation to apply
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-x-5">
                            {/* <Image width={92} height={92} className="rounded-full" src={tyler.src} alt="Tyler Treadwell" /> */}

                            <div>
                                {/* <Link href={CurrentDomain}>
                                    <h3 className="text-[21pt] font-bold leading-7 tracking-tight text-[#282C32]">Tyler Treadwell</h3>
                                </Link>
                                <p className="text-sm font-normal leading-6 text-[#555]">UI Engineer in New York</p> */}
                                {/* <div className="status flex align-center gap-2"><div className="blink"></div> <small className='uppercase text-[10px] font-bold relative mt-1' aria-label="Activity status building">building</small></div> */}
                            </div>

                        </div>


                        {/* <div className='pt-8 pb-8'>

                            <h3 className='text-[14px]'>About</h3>
                            <p className='text-[#282C32]'><Balancer>I am a forward-thinking UI engineer, and entrepreneur. My day to day involves assisting founders in creating end-to-end SaaS solutions for their clients.</Balancer></p>
                        </div> */}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }} // Initial state (hidden)
                        animate={{ opacity: 1, y: 0 }}  // Animation to apply
                        transition={{ duration: 0.5 }}
                    >

                        {/* <NavTabs tabs={Tabs} /> */}
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




