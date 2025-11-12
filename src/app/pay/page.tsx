'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Balancer } from 'react-wrap-balancer';

const Notes = [
  {
    title: 'Secure checkout',
    body: 'Square encrypts every transaction and no card details ever touch this site.',
  },
  {
    title: 'Flexible amounts',
    body: 'Choose the agreed amount or add context in the notes field if something changed.',
  },
  {
    title: 'Receipt included',
    body: 'Square emails a receipt instantly so your records stay tidy.',
  },
];

export default function PayPage() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col justify-start items-center px-6 pt-24 pb-16">
      <div className="w-full max-w-2xl text-center space-y-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-xs uppercase tracking-[0.4em] text-gray-400"
        >
          Payments
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-3xl md:text-5xl font-serif leading-snug"
        >
          <Balancer>Settle an invoice at your convenience.</Balancer>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-[15px] text-gray-500 font-serif leading-relaxed max-w-xl mx-auto"
        >
          Use the secure Square checkout link below to complete a payment. If you need to split an amount or have a
          question about the total, send a note and I will confirm before you submit.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <Link
            href="https://square.link/u/lP52Jqi7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-serif text-white bg-black rounded-full px-6 py-3 hover:bg-gray-900 transition"
          >
            Go to secure checkout
            <span aria-hidden="true">↗</span>
          </Link>
        </motion.div>
      </div>

      <section className="w-full max-w-2xl mt-16 space-y-6">
        {Notes.map((note, index) => (
          <motion.div
            key={note.title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.4, duration: 0.7 }}
            className="border border-gray-200 rounded-xl p-6 bg-white/80 shadow-sm"
          >
            <h2 className="text-base font-serif text-black mb-2">{note.title}</h2>
            <p className="text-sm font-serif text-gray-500 leading-relaxed">{note.body}</p>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
