
import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import { Provider } from 'react-wrap-balancer'
import MainLayout from '@/components/MainLayout';

import { Inter } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tyler Treadwell; Entrepreneur, UI Engineer',
  description: `Tyler Treadwell is an entrepreneur and ui engineer working with mostly software. Browse the site to see what he's up to`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {



  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <MainLayout>
            {children}
          </MainLayout>
        </Provider>
        <Analytics />
      </body>
    </html>
  )
}
