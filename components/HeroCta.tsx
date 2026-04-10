'use client'

import { ArrowRight, Phone } from '@phosphor-icons/react'

export default function HeroCta() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <a
        href="#contact"
        className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold-sheen text-ink-950 font-semibold tracking-wide rounded-sm hover:brightness-110 active:scale-[0.98] transition-all"
        onClick={() => {
          if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
            window.gtag('event', 'cta_click', { event_category: 'hero', event_label: 'get_quote' })
          }
        }}
      >
        Get a Free Quote
        <ArrowRight weight="bold" className="w-4 h-4" />
      </a>
      <a
        href="tel:+447508757024"
        className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-gold-600/40 text-gold-200 font-medium tracking-wide rounded-sm hover:bg-gold-500/5 hover:border-gold-500/60 active:scale-[0.98] transition-all"
        onClick={() => {
          if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
            window.gtag('event', 'tel_link_click', { event_category: 'hero' })
          }
        }}
      >
        <Phone weight="fill" className="w-4 h-4" />
        07508 757024
      </a>
    </div>
  )
}
