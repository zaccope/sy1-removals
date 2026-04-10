'use client'

import { useState, useEffect } from 'react'
import { List, X, Phone } from '@phosphor-icons/react'
import Wordmark from './Wordmark'
import CrownMark from './CrownMark'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-ink-950/92 backdrop-blur-md border-b border-gold-800/20'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center" aria-label="SY1 Removals">
            <Wordmark size="sm" />
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] tracking-[0.15em] uppercase text-ink-200 hover:text-gold-400 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+447508757024"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold-sheen text-ink-950 text-[13px] font-semibold tracking-wide rounded-sm hover:brightness-110 active:scale-[0.97] transition-all"
              onClick={() => {
                if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
                  window.gtag('event', 'tel_link_click', { event_category: 'navbar' })
                }
              }}
            >
              <Phone weight="fill" className="w-4 h-4" />
              07508 757024
            </a>
          </div>

          {/* Mobile trigger */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden w-11 h-11 flex items-center justify-center text-gold-400 rounded-sm border border-gold-700/30 bg-ink-950/70 backdrop-blur-sm"
            aria-label="Open menu"
            aria-expanded={isOpen}
          >
            <List weight="bold" className="w-5 h-5" />
          </button>
        </nav>
      </header>

      {/* ───────────── Mobile Menu Overlay (sibling of header) ───────────── */}
      <div
        className={`md:hidden fixed inset-0 z-[60] bg-ink-950 transition-opacity duration-400 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        {/* Decorative gold atmospherics */}
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-gold-700/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gold-800/8 blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-noise opacity-[0.12] mix-blend-overlay pointer-events-none" />

        <div className="relative h-full flex flex-col">
          {/* Menu header bar */}
          <div className="flex items-center justify-between h-16 px-5 border-b border-gold-800/20 bg-ink-950">
            <Wordmark size="sm" />
            <button
              onClick={() => setIsOpen(false)}
              className="w-11 h-11 flex items-center justify-center text-gold-400 rounded-sm border border-gold-700/40 bg-ink-900"
              aria-label="Close menu"
            >
              <X weight="bold" className="w-5 h-5" />
            </button>
          </div>

          {/* Menu content */}
          <div className="flex-1 flex flex-col justify-center px-8 -mt-8">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center justify-between py-5 border-b border-gold-800/15 transition-all"
                  style={{
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? 'translateX(0)' : 'translateX(-16px)',
                    transition: `opacity 500ms ease ${i * 70 + 100}ms, transform 500ms cubic-bezier(0.16, 1, 0.3, 1) ${i * 70 + 100}ms`,
                  }}
                >
                  <span className="font-heading text-3xl text-ink-50 group-hover:text-gold-400 transition-colors">
                    {link.label}
                  </span>
                  <span className="font-body text-[11px] tracking-[0.25em] uppercase text-gold-600 group-hover:text-gold-400 transition-colors">
                    0{i + 1}
                  </span>
                </a>
              ))}
            </nav>

            {/* Large CTA */}
            <div
              className="mt-10"
              style={{
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateY(0)' : 'translateY(12px)',
                transition: `opacity 500ms ease 420ms, transform 500ms cubic-bezier(0.16, 1, 0.3, 1) 420ms`,
              }}
            >
              <a
                href="tel:+447508757024"
                onClick={() => {
                  setIsOpen(false)
                  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
                    window.gtag('event', 'tel_link_click', { event_category: 'mobile_menu' })
                  }
                }}
                className="flex items-center justify-center gap-3 w-full py-4 bg-gold-sheen text-ink-950 font-semibold rounded-sm tracking-wide active:scale-[0.98] transition-transform"
              >
                <Phone weight="fill" className="w-5 h-5" />
                Call 07508 757024
              </a>
              <p className="text-center text-[11px] tracking-[0.2em] uppercase text-gold-600 mt-4">
                Shrewsbury · Shropshire
              </p>
            </div>
          </div>

          {/* Bottom flourish */}
          <div
            className="flex items-center justify-center gap-3 pb-10 opacity-40"
            style={{
              opacity: isOpen ? 0.4 : 0,
              transition: 'opacity 700ms ease 600ms',
            }}
          >
            <CrownMark className="w-6 h-6" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold-600">
              Est. 2024
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
