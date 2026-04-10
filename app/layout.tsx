import type { Metadata } from 'next'
import { Playfair_Display, Outfit } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Analytics from '@/components/Analytics'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SY1 Removals | Shrewsbury Removals & Moving Company',
  description:
    'Professional house removals, office moves, and man-and-van services across Shrewsbury and Shropshire. Fully insured, careful handling, fair fixed quotes. Call 07508 757024.',
  keywords: [
    'removals Shrewsbury',
    'house removals Shropshire',
    'man and van Shrewsbury',
    'office removals Shrewsbury',
    'moving company Shrewsbury',
    'furniture removals SY1',
    'local removals Shrewsbury',
    'house clearance Shropshire',
  ],
  openGraph: {
    title: 'SY1 Removals — Shrewsbury Removals & Moving Company',
    description:
      'Careful, fully-insured removals across Shrewsbury and Shropshire. House moves, office moves, and man-and-van jobs handled properly.',
    type: 'website',
    locale: 'en_GB',
  },
  robots: {
    index: false,
    follow: false,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MovingCompany',
  name: 'SY1 Removals',
  telephone: '+447508757024',
  description:
    'Professional removals and moving company serving Shrewsbury and Shropshire. House moves, office relocations, and man-and-van services.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Shrewsbury',
    addressRegion: 'Shropshire',
    addressCountry: 'GB',
  },
  areaServed: [
    { '@type': 'City', name: 'Shrewsbury' },
    { '@type': 'AdministrativeArea', name: 'Shropshire' },
  ],
  foundingDate: '2024',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-ink-950 text-ink-100 antialiased">
        <Analytics />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
