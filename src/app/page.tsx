'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Balancer } from 'react-wrap-balancer';

interface Job {
  title: string;
  companyName: string;
  location: string;
  date?: string;
  link?: string;
}

const Jobs: Job[] = [
  {
    title: `Technical Web Consultant`,
    companyName: ``,
    location: `Remote`,
    date: `2022 — Now`,
    link: `https://tylertreadwell.com`,
  },
  {
    title: `UI Designer`,
    companyName: `Broadridge`,
    location: `New York`,
    date: `2019 — 2022`,
    link: `https://www.broadridge.com/`,
  },
  {
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
    link: `https://tylertreadwell.dev`,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col justify-start items-center px-6 pt-20 pb-10">
      <div className="w-full max-w-2xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-serif mb-6 leading-snug"
        >
          <Balancer>Tyler Treadwell — a quiet collection of work.</Balancer>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-[15px] text-gray-500 font-serif max-w-lg mx-auto mb-14 leading-relaxed"
        >
          I work with founders to shape elegant, end-to-end digital experiences—thoughtfully engineered with intent and clarity.
        </motion.p>
      </div>

      <section className="w-full max-w-2xl space-y-8">
        {Jobs.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 + 1.2, duration: 0.6 }}
          >
            <ExperienceItem job={job} />
          </motion.div>
        ))}
      </section>
    </main>
  );
}

function ExperienceItem({ job }: { job: Job }) {
  return (
    <div className="flex flex-col md:flex-row md:items-start gap-2 font-serif">
      <div className="w-32 shrink-0 text-gray-400 text-sm">{job.date}</div>
      <div>
        <a
          href={job.link || '#'}
          target={job.link ? '_blank' : '_self'}
          rel="noopener noreferrer"
          className="text-base text-black hover:underline inline-flex items-center gap-1"
        >
          <Balancer>
            {job.title}
            {job.companyName ? ` at ${job.companyName}` : ''}
          </Balancer>
          {job.link && (
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block"
            >
              <path
                d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z"
                fill="#111"
              />
            </svg>
          )}
        </a>
        <div className="text-sm text-gray-500">{job.location}</div>
      </div>
    </div>
  );
}
