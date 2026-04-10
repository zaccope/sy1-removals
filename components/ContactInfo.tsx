'use client'

import { Phone, EnvelopeSimple, MapPin, Clock } from '@phosphor-icons/react'

const items = [
  {
    icon: Phone,
    label: 'Call or Text',
    value: '07508 757024',
    href: 'tel:+447508757024',
    event: 'tel_link_click',
  },
  {
    icon: EnvelopeSimple,
    label: 'Email',
    value: 'Use the form opposite',
    href: null,
  },
  {
    icon: MapPin,
    label: 'Based In',
    value: 'Shrewsbury · Serving all of Shropshire',
    href: null,
  },
  {
    icon: Clock,
    label: 'Availability',
    value: 'Mon–Sat · 7am til late',
    href: null,
  },
]

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {items.map((item) => {
        const Icon = item.icon
        const content = (
          <div className="flex items-start gap-5">
            <div className="w-11 h-11 flex items-center justify-center rounded-sm border border-gold-700/40 bg-gold-900/20 flex-shrink-0">
              <Icon weight="duotone" className="w-5 h-5 text-gold-400" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.15em] text-gold-500 mb-1 font-medium">
                {item.label}
              </p>
              <p className="text-ink-100 font-medium">{item.value}</p>
            </div>
          </div>
        )

        if (item.href) {
          return (
            <a
              key={item.label}
              href={item.href}
              className="block group"
              onClick={() => {
                if (item.event && typeof window !== 'undefined' && typeof window.gtag === 'function') {
                  window.gtag('event', item.event, { event_category: 'contact' })
                }
              }}
            >
              <div className="transition-colors group-hover:[&_p]:text-gold-300">{content}</div>
            </a>
          )
        }

        return <div key={item.label}>{content}</div>
      })}
    </div>
  )
}
