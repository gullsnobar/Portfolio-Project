'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'
import { personalInfo } from '@/lib/data'

const navLinks = [
  { href: '/#about', label: 'About' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#projects', label: 'Projects' },
  { href: '/guestbook', label: 'Guestbook' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
        <Link href="/" className="flex items-center group gap-1.5">
          <span className="w-7 h-7 rounded-lg bg-text-primary flex items-center justify-center text-background text-xs font-bold">
            G
          </span>
          <span className="font-display font-semibold text-sm text-text-primary group-hover:text-text-secondary transition-colors">
            Gull<span className="text-text-secondary">.</span>dev
          </span>
        </Link>

        {/* Desktop Nav — pill links */}
        <div className="hidden md:flex items-center gap-1 p-1 rounded-full bg-surface border border-border">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 text-text-secondary hover:text-text-primary hover:bg-background"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href={`mailto:${personalInfo.email}`}
            className={cn(
              'hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold',
              'bg-text-primary text-background transition-all duration-200 hover:opacity-85 hover:scale-[1.04] hover:shadow-lg'
            )}
          >
            Hire Me ✦
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl border border-border bg-surface hover:border-text-primary transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
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
                    className="block px-4 py-3 rounded-xl text-sm text-text-secondary hover:text-text-primary hover:bg-surface transition-all"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href={`mailto:${personalInfo.email}`}
                className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-text-primary text-background font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Hire Me ✦
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
