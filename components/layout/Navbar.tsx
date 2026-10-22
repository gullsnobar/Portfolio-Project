'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeToggle } from './ThemeToggle'
import { cn } from '@/lib/utils'
import { personalInfo } from '@/lib/data'

const navLinks = [
  { href: '/#about',      label: 'About',      section: 'about'      },
  { href: '/#skills',     label: 'Skills',     section: 'skills'     },
  { href: '/#experience', label: 'Experience', section: 'experience' },
  { href: '/#projects',   label: 'Projects',   section: 'projects'   },
  { href: '/#contact',    label: 'Contact',    section: 'contact'    },
  { href: '/guestbook',   label: 'Guestbook',  section: 'guestbook'  },
]

const pageSections = navLinks.map((link) => link.section).filter((s) => s !== 'guestbook')

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  /* Shadow after scrolling */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* Active section: the first nav item (in menu order) whose section is on screen */
  useEffect(() => {
    const visible = new Set<string>()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target.id)
          else visible.delete(entry.target.id)
        })
        setActiveSection(pageSections.find((id) => visible.has(id)) ?? '')
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    pageSections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  /* Close the mobile menu with Escape */
  useEffect(() => {
    if (!mobileOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [mobileOpen])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b border-border',
        'bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70',
        'transition-shadow duration-300',
        isScrolled && 'shadow-sm shadow-black/5'
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">

        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5" aria-label="Gull Snobar, home">
          <Image
            src="/Gull.png"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 rounded-lg object-cover"
            priority
          />
          <span className="font-heading text-base font-semibold text-text-primary">
            Gull<span className="text-accent">.</span>Snobar
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.section
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? 'location' : undefined}
                  className={cn(
                    'relative block px-3 py-2 text-sm font-medium transition-colors duration-200',
                    isActive ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-accent"
                      transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                    />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          <Link
            href={`mailto:${personalInfo.email}`}
            className="btn btn-primary hidden px-4 py-2 text-sm lg:inline-flex"
          >
            Hire Me
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface text-text-primary transition-colors hover:border-accent/50 lg:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.section
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    aria-current={isActive ? 'location' : undefined}
                    className={cn(
                      'rounded-lg px-3 py-3 text-base transition-colors',
                      isActive
                        ? 'bg-accent/10 font-semibold text-accent'
                        : 'text-text-secondary hover:bg-surface hover:text-text-primary'
                    )}
                  >
                    {link.label}
                  </Link>
                )
              })}

              <Link
                href={`mailto:${personalInfo.email}`}
                onClick={() => setMobileOpen(false)}
                className="btn btn-primary mt-3 w-full"
              >
                Hire Me
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
