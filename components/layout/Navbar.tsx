'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'
import { personalInfo } from '@/lib/data'

const navLinks = [
  { href: '/#about',      label: 'About',      section: 'about'      },
  { href: '/#skills',     label: 'Skills',     section: 'skills'     },
  { href: '/#experience', label: 'Experience', section: 'experience' },
  { href: '/#projects',   label: 'Projects',   section: 'projects'   },
  { href: '/#contact',    label: 'Contact',    section: 'contact'    },
  { href: '/guestbook',   label: 'Guestbook',  section: 'guestbook'  },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* Active-section detection via IntersectionObserver */
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.section).filter((s) => s !== 'guestbook')
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-40% 0px -50% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'py-2.5 backdrop-blur-xl bg-background/90 border-b border-border shadow-sm shadow-black/5'
          : 'py-4 bg-transparent'
      )}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center group gap-2">
          <Image
            src="/Gull.png"
            alt="Gull Snobar logo"
            width={32}
            height={32}
            className="w-8 h-8 rounded-lg object-cover shadow-sm transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <span className="font-display font-semibold text-sm text-text-primary group-hover:text-text-secondary transition-colors">
            Gull<span className="text-accent">.</span>dev
          </span>
        </Link>

        {/* Desktop nav: pill container */}
        <div className="hidden md:flex items-center gap-0.5 p-1 rounded-full bg-surface border border-border">
          {navLinks.map((link) => {
            const isActive = activeSection === link.section
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200',
                  isActive
                    ? 'text-text-primary bg-background shadow-sm'
                    : 'text-text-secondary hover:text-text-primary hover:bg-background/60'
                )}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            )
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href={`mailto:${personalInfo.email}`}
            className={cn(
              'hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold',
              'bg-text-primary text-background shadow-md shadow-text-primary/20',
              'hover:opacity-85 hover:shadow-text-primary/30 hover:scale-[1.04] transition-all duration-200'
            )}
          >
            Hire Me
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl border border-border bg-surface hover:border-text-primary/40 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t border-border bg-background/98 backdrop-blur-xl"
          >
            <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'block px-4 py-3 rounded-xl text-sm transition-all',
                      activeSection === link.section
                        ? 'text-text-primary bg-accent/5 font-medium'
                        : 'text-text-secondary hover:text-text-primary hover:bg-surface'
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="h-px bg-border my-2" />
              <Link
                href={`mailto:${personalInfo.email}`}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-text-primary text-background font-semibold text-sm hover:opacity-85 transition-opacity shadow-md shadow-text-primary/20"
              >
                Hire Me
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
