
import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import { Provider } from 'react-wrap-balancer'
import MainLayout from '@/components/MainLayout';

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
      <body>
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
