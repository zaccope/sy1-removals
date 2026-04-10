'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight } from '@phosphor-icons/react'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      moveDate: (form.elements.namedItem('moveDate') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error('Failed')

      setStatus('sent')
      form.reset()

      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'form_submit', { event_category: 'contact' })
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClasses =
    'w-full px-4 py-3.5 bg-ink-950/60 border border-ink-600 rounded-sm text-ink-50 placeholder:text-ink-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30 transition-colors'

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-[11px] uppercase tracking-[0.15em] text-gold-500 mb-2 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className={inputClasses}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-[11px] uppercase tracking-[0.15em] text-gold-500 mb-2 font-medium">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className={inputClasses}
            placeholder="07xxx xxxxxx"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-[11px] uppercase tracking-[0.15em] text-gold-500 mb-2 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={inputClasses}
            placeholder="you@email.com"
          />
        </div>
        <div>
          <label htmlFor="moveDate" className="block text-[11px] uppercase tracking-[0.15em] text-gold-500 mb-2 font-medium">
            Preferred Move Date
          </label>
          <input
            type="date"
            id="moveDate"
            name="moveDate"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-[11px] uppercase tracking-[0.15em] text-gold-500 mb-2 font-medium">
          Tell us about your move
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className={`${inputClasses} resize-none`}
          placeholder="Collection and delivery addresses, rough size of move, any large or fragile items..."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full inline-flex items-center justify-center gap-3 py-4 bg-gold-sheen text-ink-950 font-semibold tracking-wide rounded-sm hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Sending...' : 'Request Your Quote'}
        {status !== 'sending' && <ArrowRight weight="bold" className="w-4 h-4" />}
      </button>

      {status === 'sent' && (
        <p className="text-gold-300 text-sm text-center pt-2">
          Thank you. We&rsquo;ll be in touch within a few hours to confirm your quote.
        </p>
      )}
      {status === 'error' && (
        <p className="text-red-400 text-sm text-center pt-2">
          Something went wrong. Please call us directly on 07508 757024.
        </p>
      )}
    </form>
  )
}
