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
  title: 'SY1 Removals | House & Garden Clearance in Shrewsbury, Shropshire',
  description:
    'Professional house clearance, garden clearance, and waste removal across Shrewsbury and Shropshire. Same-day uplifts, licensed carriers, fair fixed quotes. Call 07508 757024.',
  keywords: [
    'house clearance Shrewsbury',
    'garden clearance Shropshire',
    'waste removal Shrewsbury',
    'rubbish removal Shropshire',
    'fly tip removal Shrewsbury',
    'shed removal Shrewsbury',
    'end of tenancy clearance Shropshire',
    'probate clearance Shrewsbury',
    'SY1 clearance',
  ],
  openGraph: {
    title: 'SY1 Removals — Shrewsbury House & Garden Clearance',
    description:
      'Licensed, insured clearance team serving Shrewsbury and Shropshire. House clearances, garden strip-outs, fly-tip removals — broom-clean finish every time.',
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
  '@type': 'LocalBusiness',
  name: 'SY1 Removals',
  telephone: '+447508757024',
  description:
    'Professional house clearance, garden clearance, and waste removal services across Shrewsbury and Shropshire. Licensed waste carriers with fair fixed quotes and broom-clean finishes.',
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
