import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TaskAdventurer - Transform Chores into Epic Adventures!',
  description: 'Transform chores into epic adventures! TaskAdventurer makes task management fun for families with gamified rewards, leveling up adventurers, and engaging challenges that motivate children to complete their responsibilities.',
  keywords: 'task management, chores, family, children, gamification, rewards, parenting, responsibility, adventurer, level up, coins, motivation, family app, kids tasks, parent control, educational, fun learning, habit building, child development, family organization',
  authors: [{ name: 'TaskAdventurer Team' }],
  creator: 'TaskAdventurer',
  publisher: 'TaskAdventurer',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://taskadventurer.com'),
  openGraph: {
    title: 'TaskAdventurer - Transform Chores into Epic Adventures!',
    description: 'Transform chores into epic adventures! TaskAdventurer makes task management fun for families with gamified rewards, leveling up adventurers, and engaging challenges that motivate children to complete their responsibilities.',
    url: 'https://taskadventurer.com',
    siteName: 'TaskAdventurer',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TaskAdventurer - Transform Chores into Epic Adventures!',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TaskAdventurer - Transform Chores into Epic Adventures!',
    description: 'Transform chores into epic adventures! TaskAdventurer makes task management fun for families with gamified rewards, leveling up adventurers, and engaging challenges that motivate children to complete their responsibilities.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 