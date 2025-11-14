
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://tylertreadwell.com';
const siteTitle = 'Tyler Treadwell | Product-Focused UI Engineer & Technical Web Consultant';
const siteDescription =
  'Product-focused UI engineer Tyler Treadwell partners with venture-backed founders to design and ship performant SaaS platforms, design systems, and conversion-friendly marketing sites.';

const schemaOrgJSONLD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      name: 'Tyler Treadwell',
      jobTitle: 'UI Engineer & Technical Web Consultant',
      url: siteUrl,
      sameAs: [
        'https://www.linkedin.com/in/ttreads',
        'https://github.com/ttreads',
        'https://x.com/ttreads'
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'Independent Studio',
        url: siteUrl
      },
      knowsAbout: [
        'UI engineering',
        'design systems',
        'React',
        'Next.js',
        'product strategy',
        'growth marketing'
      ],
      image: `${siteUrl}/tyler-og.jpg`
    },
    {
      '@type': 'WebSite',
      url: siteUrl,
      name: siteTitle,
      description: siteDescription,
      inLanguage: 'en-US',
      publisher: {
        '@type': 'Person',
        name: 'Tyler Treadwell'
      }
    }
  ]
};

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: '%s | Tyler Treadwell'
  },
  description: siteDescription,
  keywords: [
    'Tyler Treadwell',
    'UI engineer',
    'technical web consultant',
    'Next.js developer',
    'product designer',
    'design systems',
    'SaaS product strategy'
  ],
  authors: [{ name: 'Tyler Treadwell', url: siteUrl }],
  creator: 'Tyler Treadwell',
  publisher: 'Tyler Treadwell',
  category: 'technology',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: 'Tyler Treadwell',
    locale: 'en_US',
    images: [
      {
        url: `${siteUrl}/tyler-og.jpg`,
        width: 1200,
        height: 630,
        alt: 'Tyler Treadwell – UI Engineer and Technical Web Consultant'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@tylertreads',
    site: '@tylertreads',
    title: siteTitle,
    description: siteDescription,
    images: [`${siteUrl}/tyler-og.jpg`]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {



  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={siteUrl} />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgJSONLD) }}
        />
      </head>
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
