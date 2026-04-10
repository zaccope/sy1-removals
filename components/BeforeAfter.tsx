'use client'

import { useState } from 'react'

interface BeforeAfterProps {
  before: string
  after: string
  label: string
  aspect?: string
}

export default function BeforeAfter({ before, after, label, aspect = 'aspect-[4/5]' }: BeforeAfterProps) {
  const [showingAfter, setShowingAfter] = useState(false)

  return (
    <div
      className="group relative"
      onMouseEnter={() => setShowingAfter(true)}
      onMouseLeave={() => setShowingAfter(false)}
    >
      <div className={`relative ${aspect} overflow-hidden rounded-sm border border-gold-800/30 bg-ink-900`}>
        {/* Before */}
        <img
          src={before}
          alt={`${label} — before`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: showingAfter ? 0 : 1 }}
        />
        {/* After */}
        <img
          src={after}
          alt={`${label} — after`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: showingAfter ? 1 : 0 }}
        />

        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent pointer-events-none" />

        {/* State label */}
        <div className="absolute top-4 left-4 flex items-center gap-2 pointer-events-none">
          <span
            className={`px-3 py-1 text-[10px] tracking-[0.2em] uppercase font-semibold rounded-sm transition-all duration-500 ${
              showingAfter
                ? 'bg-gold-sheen text-ink-950'
                : 'bg-ink-950/80 backdrop-blur-sm text-gold-400 border border-gold-700/40'
            }`}
          >
            {showingAfter ? 'After' : 'Before'}
          </span>
        </div>

        {/* Label */}
        <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
          <p className="font-heading text-lg text-ink-50 leading-tight">{label}</p>
          <p className="text-[11px] tracking-[0.2em] uppercase text-gold-500 mt-1 opacity-80 hidden md:block">
            Hover to reveal
          </p>
        </div>

        {/* Mobile tap hint / toggle */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            setShowingAfter((v) => !v)
          }}
          className="md:hidden absolute inset-0 w-full h-full"
          aria-label="Toggle before and after"
        />
      </div>
    </div>
  )
}
