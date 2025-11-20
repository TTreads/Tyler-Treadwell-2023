'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Balancer } from 'react-wrap-balancer';
import { ChangeEvent, FormEvent, useMemo, useState } from 'react';

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
  const [formValues, setFormValues] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const isSubmitDisabled = useMemo(() => {
    return (
      status === 'loading' ||
      !formValues.name.trim() ||
      !formValues.email.trim() ||
      formValues.message.trim().length < 10
    );
  }, [formValues, status]);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitDisabled) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/pay-note', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formValues),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Unable to send note.');
      }

      setStatus('success');
      setFormValues({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong.');
    } finally {
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <main className="min-h-screen bg-white dark:bg-[#050505] text-black dark:text-gray-100 flex flex-col justify-start items-center px-6 pt-24 pb-16">
      <div className="w-full max-w-2xl text-center space-y-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-xs uppercase tracking-[0.4em] text-gray-400 dark:text-gray-400"
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
          className="text-[15px] text-gray-500 font-serif leading-relaxed max-w-xl mx-auto dark:text-gray-400"
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
            className="inline-flex items-center gap-2 text-sm font-serif text-white bg-black rounded-full px-6 py-3 hover:bg-gray-900 transition dark:bg-yellow-400 dark:text-black"
          >
            Go to secure checkout
            <span aria-hidden="true">↗</span>
          </Link>
        </motion.div>
      </div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="w-full max-w-2xl mt-16"
      >
        <form
          onSubmit={handleSubmit}
          className="border border-gray-200 dark:border-gray-700 rounded-2xl p-8 space-y-6 bg-white/80 dark:bg-white/5 shadow-sm font-serif"
        >
          <div className="space-y-2 text-left">
            <label htmlFor="name" className="text-sm text-gray-500 uppercase tracking-[0.2em] dark:text-gray-400">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formValues.name}
              onChange={handleChange}
              className="w-full border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-1 focus:ring-black transition bg-white dark:bg-transparent dark:text-gray-100"
              placeholder="Jane Smith"
              required
            />
          </div>

          <div className="space-y-2 text-left">
            <label htmlFor="email" className="text-sm text-gray-500 uppercase tracking-[0.2em] dark:text-gray-400">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formValues.email}
              onChange={handleChange}
              className="w-full border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-1 focus:ring-black transition bg-white dark:bg-transparent dark:text-gray-100"
              placeholder="you@email.com"
              required
            />
          </div>

          <div className="space-y-2 text-left">
            <label htmlFor="message" className="text-sm text-gray-500 uppercase tracking-[0.2em] dark:text-gray-400">
              Note
            </label>
            <textarea
              id="message"
              name="message"
              value={formValues.message}
              onChange={handleChange}
              className="w-full border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-1 focus:ring-black transition bg-white dark:bg-transparent dark:text-gray-100 min-h-[140px]"
              placeholder="Hi Tyler — here’s the context on this payment…"
              required
            />
          </div>

          <div className="flex flex-col items-center gap-3">
            <button
              type="submit"
              disabled={isSubmitDisabled}
              className="inline-flex items-center gap-2 text-sm font-serif text-white bg-black rounded-full px-6 py-3 hover:bg-gray-900 transition disabled:opacity-50 disabled:cursor-not-allowed dark:bg-yellow-400 dark:text-black"
            >
              {status === 'loading' ? 'Sending…' : 'Send a note'}
              {status === 'loading' && (
                <motion.span
                  className="inline-block w-2 h-2 bg-white rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ repeat: Infinity, duration: 0.9, ease: 'easeInOut' }}
                />
              )}
            </button>

            <AnimatePresence mode="wait">
              {status === 'success' && (
                <motion.p
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-sm text-green-600"
                >
                  Message sent. I’ll reply shortly.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  key="error"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-sm text-red-600"
                >
                  {errorMessage || 'Something went wrong. Please try again.'}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </form>
      </motion.section>

      <section className="w-full max-w-2xl mt-16 space-y-6">
        {Notes.map((note, index) => (
          <motion.div
            key={note.title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.4, duration: 0.7 }}
            className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 bg-white/80 dark:bg-white/5 shadow-sm"
          >
            <h2 className="text-base font-serif mb-2 dark:text-gray-100">{note.title}</h2>
            <p className="text-sm font-serif text-gray-500 leading-relaxed dark:text-gray-400">{note.body}</p>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
