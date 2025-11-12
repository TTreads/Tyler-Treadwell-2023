'use client';

import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { Balancer } from 'react-wrap-balancer';

const Highlights = [
  {
    title: 'Payment Received',
    description: 'Your payment has been recorded and your project timeline stays right on track.',
  },
  {
    title: 'Receipt Emailed',
    description: 'A receipt is on its way to your inbox. Reach out if you need any adjustments or copies.',
  },
  {
    title: 'Next Up',
    description:
      'I will follow up with the latest build notes and any action items so you know exactly what to expect.',
  },
];

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col justify-start items-center px-6 pt-24 pb-16">
      <div className="w-full max-w-2xl text-center space-y-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-[0.4em] text-gray-400"
        >
          Thank you
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.9 }}
          className="text-3xl md:text-5xl font-serif leading-snug"
        >
          <Balancer>Payment confirmed — I appreciate your continued trust.</Balancer>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-[15px] text-gray-500 font-serif leading-relaxed max-w-xl mx-auto"
        >
          Everything is squared away. I will follow up shortly with next steps and make sure you have complete visibility
          into the work in progress. If you need anything specific—simply reply to the confirmation email.
        </motion.p>
      </div>

      <section className="w-full max-w-2xl mt-16 space-y-6">
        {Highlights.map((highlight, index) => (
          <motion.div
            key={highlight.title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 + 0.4, duration: 0.7 }}
            className="border border-gray-200 rounded-xl p-6 bg-white/80 shadow-sm"
          >
            <h2 className="text-base font-serif text-black mb-2">{highlight.title}</h2>
            <p className="text-sm font-serif text-gray-500 leading-relaxed">{highlight.description}</p>
          </motion.div>
        ))}
      </section>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7 }}
        className="mt-16"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-serif text-black border border-black rounded-full px-5 py-2 hover:bg-black hover:text-white transition"
        >
          Return home
          <span aria-hidden="true">↗</span>
        </Link>
      </motion.div>
    </main>
  );
}
