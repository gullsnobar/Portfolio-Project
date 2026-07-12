'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles, MapPin } from 'lucide-react'
import { personalInfo } from '@/lib/data'

const ROTATING_TITLES = [
  'Full-Stack Developer',
  'React & Next.js Engineer',
  'Node.js Backend Dev',
  'MERN Stack Builder',
]

const stats = [
  { value: '1+', label: 'Year of\nExperience' },
  { value: '10+', label: 'Projects\nShipped' },
  { value: '15+', label: 'Technologies\nMastered' },
  { value: '2', label: 'Roles &\nInternships' },
]

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % ROTATING_TITLES.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Soft ambient glow */}
      <div className="hero-glow" />
      <div className="grid-bg absolute inset-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left column ── */}
          <div>
            {/* Greeting badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary text-text-secondary text-sm font-medium mb-6"
            >
              Available for new opportunities
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-text-primary leading-[1.05] tracking-tight mb-4"
            >
              Gull{' '}
              <span className="gradient-text">Snobar</span>
            </motion.h1>

            {/* Rotating subtitle */}
            <div className="h-10 mb-5 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={titleIndex}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="text-lg sm:text-xl font-semibold text-text-secondary"
                >
                  {ROTATING_TITLES[titleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-text-secondary leading-relaxed mb-2 max-w-lg text-base sm:text-[1.05rem]"
            >
              Building fast, reliable, and scalable web applications from server to client.
              Passionate about clean code, great UX, and shipping products that matter.
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="inline-flex items-center gap-1.5 text-sm text-text-secondary mb-8"
            >
              <MapPin className="w-3.5 h-3.5 text-text-primary" />
              Lahore, Pakistan
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3"
            >
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-text-primary text-background transition-all duration-200 hover:opacity-85 hover:scale-[1.03] hover:shadow-lg"
              >
                View My Work
              </Link>
              <Link
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border border-border bg-surface text-text-primary hover:border-text-primary hover:bg-secondary transition-all duration-200 hover:scale-[1.03]"
              >
                <Download className="w-4 h-4" />
                Download CV
              </Link>
            </motion.div>

            {/* Social icons removed as requested */}
          </div>

          {/* ── Right column — Stats card ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Stats grid */}
              <div className="relative grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
                    className="card p-6 rounded-2xl group hover:-translate-y-1"
                  >
                    <p className="font-display text-4xl font-bold text-text-primary mb-1">
                      {stat.value}
                    </p>
                    <p className="text-text-secondary text-xs leading-snug whitespace-pre-line">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}

                {/* "Open to work" card removed as requested */}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Mobile stats strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="lg:hidden mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="card p-4 rounded-2xl text-center">
              <p className="font-display text-2xl font-bold text-text-primary">{stat.value}</p>
              <p className="text-text-secondary text-xs mt-1 leading-snug whitespace-pre-line">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1 text-text-secondary/50"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
