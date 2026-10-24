'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ThemeToggle } from './ThemeToggle'
import { cn } from '@/lib/utils'
import { personalInfo } from '@/lib/data'

const navLinks = [
  { href: '/#projects', label: 'Work', section: 'projects', number: '01' },
  { href: '/#experience', label: 'Experience', section: 'experience', number: '02' },
  { href: '/#skills', label: 'Expertise', section: 'skills', number: '03' },
  { href: '/#about', label: 'About', section: 'about', number: '04' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (current) setActiveSection(current.target.id)
      },
      { rootMargin: '-28% 0px -58% 0px', threshold: [0.05, 0.2, 0.5] }
    )

    navLinks.forEach(({ section }) => {
      const element = document.getElementById(section)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!mobileOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [mobileOpen])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200',
        isScrolled || mobileOpen
          ? 'border-border bg-background/95 backdrop-blur-md'
          : 'border-transparent bg-background/75 backdrop-blur-sm'
      )}
    >
      <nav className="site-shell flex h-[4.5rem] items-center justify-between gap-4" aria-label="Primary navigation">
        <Link href="/" className="flex min-h-11 items-center gap-3" aria-label="Gull Snobar, home">
          <span className="signal-mark flex h-8 w-8 items-center justify-center font-display text-xs font-bold">GS</span>
          <span className="font-display text-sm font-semibold tracking-[-0.02em] sm:text-base">Gull Snobar</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = activeSection === link.section
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? 'location' : undefined}
                  className={cn(
                    'group flex min-h-11 items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors',
                    active ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'
                  )}
                >
                  <span className={cn('font-mono text-[0.55rem]', active ? 'text-accent' : 'text-text-secondary/60')}>
                    {link.number}
                  </span>
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href={`mailto:${personalInfo.email}`} className="btn btn-primary !hidden min-h-10 px-4 lg:!inline-flex">
            Let&apos;s talk <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center border border-border bg-background text-text-primary lg:hidden"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={reduceMotion ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            className="min-h-[calc(100dvh-4.5rem)] border-t border-border bg-background lg:hidden"
          >
            <div className="site-shell flex min-h-[calc(100dvh-4.5rem)] flex-col py-8">
              <ul>
                {navLinks.map((link) => (
                  <li key={link.href} className="border-b border-border">
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-baseline justify-between py-5 font-display text-3xl font-medium tracking-tight"
                    >
                      {link.label}
                      <span className="font-mono text-xs text-text-secondary">{link.number}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-10">
                <p className="eyebrow text-text-secondary">Start a conversation</p>
                <Link
                  href={`mailto:${personalInfo.email}`}
                  onClick={() => setMobileOpen(false)}
                  className="mt-3 inline-flex min-h-11 items-center gap-2 break-all text-lg font-semibold underline decoration-border"
                >
                  {personalInfo.email} <ArrowUpRight className="h-4 w-4 shrink-0" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
