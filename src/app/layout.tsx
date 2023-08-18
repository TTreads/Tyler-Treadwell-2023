import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Tyler Treadwell',
  description: `Tyler Treadwell is an entrepreneur and ui engineer working with mostly software. Browse the site to see what he's up to`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  let time = new Date();
  let hrs = time.getHours();

  let themeMode;

  if (hrs < 12) {
    themeMode = "light"
  }
  if (hrs >= 12 && hrs <= 17) {

    themeMode = 'dark';
  }
  if (hrs >= 17 && hrs <= 24) {
    themeMode = 'dark';

  }

  return (
    <html lang="en">
      <body className={`${themeMode}`}>{children}</body>
    </html>
  )
}
