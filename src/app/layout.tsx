import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'Tyler Treadwell',
  description: `Tyler Treadwell is an entrepreneur and ui engineer working with mostly software. Browse the site to see what he's up to`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {



  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
