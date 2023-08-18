'use client'
import React, { useEffect } from 'react'
import tyler from '@/app/tyler.jpg'
import { motion } from "framer-motion"
import { Balancer } from 'react-wrap-balancer'
const Jobs: Job[] = [{
  title: `Tech Consulting`,
  companyName: `Freelance`,
  location: `Remote`,
  date: `2022 — Now`,
  link: `https://tylertreadwell.com`,
}, {

  title: `UI Designer`,
  companyName: `Broadridge`,
  location: `Edgewood, NY`,
  date: `2019 — 2022`,
  link: `https://www.broadridge.com/`,
}, {
  title: `Founder`,
  companyName: `Zimute Media Inc`,
  location: `Deer Park, NY`,
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


let myDate = new Date();
let hrs = myDate.getHours();
console.log(hrs)
let themeMode = "";

if (hrs < 12)
  themeMode = 'light';
else if (hrs >= 12 && hrs <= 17)
  themeMode = 'dark';
else if (hrs >= 17 && hrs <= 24)
  themeMode = 'dark';


interface Job {
  title: string;
  companyName: string;
  location: string;
  date?: string;
  link?: string;
}

export default function Home() {
  const [Year, setYear] = React.useState(0)
  const [FadeDuration, setFadeDuration] = React.useState(0)

  useEffect(() => {
    let date = new Date()
    let year = date.getFullYear();
    setYear(year)

    let fadeDur = Jobs.length
    setFadeDuration(fadeDur)
  })

  return (
    <div className={`${themeMode}`}>
      <header className="max-w-[100vw] min-h-[50px]"></header>
      <main className='p-5 min-h-[80vh]'>
        <div className="max-w-[540px] m-auto md:p-5 pt-0 ">

          <motion.div
            initial={{ opacity: 0, y: 20 }} // Initial state (hidden)
            animate={{ opacity: 1, y: 0 }}  // Animation to apply
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-x-6">
              <img className="h-[92px] w-[92px] rounded-full" src={tyler.src} alt="Tyler Treadwell" />

              <div>
                <h3 className="text-[24px] font-bold leading-7 tracking-tight text-gray-900">Tyler Treadwell</h3>
                <p className="text-sm font-normal leading-6 text-[#555]">UI Engineer in New York, <span className="text-[#8b8b8b]">He/Him</span></p>
              </div>

            </div>


            <div className='mt-8'>

              <h3 className='text-[14px]'>About</h3>
              <p><Balancer>I'm ui engineer, optimist, and entrepreneur. I currently work as contract web consultant. Helping founders build end to end SaaS solutions for their clients.</Balancer></p>
            </div>
          </motion.div>
          <div className='mt-8'>
            <motion.div
              initial={{ opacity: 0, y: 20 }} // Initial state (hidden)
              animate={{ opacity: 1, y: 0 }}  // Animation to apply
              transition={{ duration: 0.5 }}
            >
              <h3 className='text-[14px]'>Work Experience</h3>
            </motion.div>
            {Jobs.map((job, index) => <>

              {

                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }} // Initial state (hidden)
                  animate={{ opacity: 1, y: 0 }}  // Animation to apply
                  transition={{ duration: 0.5, delay: index * 0.3 }} // Duration and delay
                >
                  <ExperienceItem Job={job} />
                </motion.div>
              }
            </>)}
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

        <footer className='max-w-[540px] m-auto md:p-5 pt-0 '>
          <div className='pb-10'>
            <div className="text-[12px]">Connect on <a target="_blank" className='underline' href='https://www.linkedin.com/in/ttreads/'>Linkedin</a></div>
            <div className='flex-col'><h3 className="text-[20px] font-bold tracking-tight text-gray-900 leading-tight">Tyler <br /> Treadwell</h3></div>
            <div className='md:flex justify-between'>

              <div className='flex-col text-[12px] mt-2 text-left'>
                <p>Find me on <a target="_blank" className='underline' href="https://dribbble.com/ttreads">Dribbble</a></p>
                <p>Browse my repos on <a target="_blank" className='underline' href="https://github.com/ttreads">Github</a></p>
              </div>
              <div className='flex-col text-[12px] mt-2 md:text-right'>
                <p>Built using <a target='_blank' className='underline' href='https://nextjs.org/?via=TylerTreadwell'>NextJS</a></p>
                <p className='text-[12px]'>&copy; {Year} All Rights Reserved</p>
              </div>

            </div>
          </div>
        </footer>
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
      <a className="flex align-center gap-1" target={props.Job.link ? "_blank" : "none"} href={props.Job.link ? props.Job.link : "#"}><span className='text-[14px]'>{<Balancer>{props.Job.title}</Balancer>} at {props.Job.companyName}</span><span style={{ whiteSpace: "nowrap" }}><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z" fill="#111"></path></svg></span></a> <small className='text-[14px] text-[#8b8b8b]'>{props.Job.location}</small>
    </div>
  </div>
}

