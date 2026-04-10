'use client'

import { useState, useEffect } from 'react'
import { List, X, Phone } from '@phosphor-icons/react'
import Wordmark from './Wordmark'

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || isOpen
          ? 'bg-ink-950/92 backdrop-blur-md border-b border-gold-800/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-18 md:h-20">
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
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center text-gold-400"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X weight="bold" className="w-6 h-6" /> : <List weight="bold" className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`md:hidden fixed inset-0 top-[72px] bg-ink-950 transition-all duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center gap-8 pt-20 px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-heading italic tracking-tight text-ink-100 hover:text-gold-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+447508757024"
            onClick={() => setIsOpen(false)}
            className="mt-4 inline-flex items-center gap-3 px-8 py-4 bg-gold-sheen text-ink-950 font-semibold rounded-sm text-lg tracking-wide"
          >
            <Phone weight="fill" className="w-5 h-5" />
            07508 757024
          </a>
        </div>
      </div>
    </header>
  )
}
