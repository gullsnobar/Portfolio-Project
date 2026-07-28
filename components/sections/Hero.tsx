'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react'
import { personalInfo } from '@/lib/data'

const ROTATING_TITLES = [
  'Full-Stack Developer',
  'React & Next.js Engineer',
  'Node.js Backend Dev',
  'MERN Stack Builder',
]

const stats = [
  { value: '1+', label: 'Year of Experience' },
  { value: '10+', label: 'Projects Shipped' },
  { value: '15+', label: 'Technologies' },
  { value: '3', label: 'Roles & Internships' },
]

const socialLinks = [
  { href: personalInfo.github, icon: Github, label: 'GitHub' },
  { href: personalInfo.linkedin, icon: Linkedin, label: 'LinkedIn', external: true },
  { href: `mailto:${personalInfo.email}`, icon: Mail, label: 'Email' },
]

const techRow = [
  'React',
  'Next.js',
  'Node.js',
  'MongoDB',
  'TypeScript',
  'Express',
]

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [cursor, setCursor] = useState(true)

  useEffect(() => {
    const t = setInterval(() => setTitleIndex((p) => (p + 1) % ROTATING_TITLES.length), 2800)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const t = setInterval(() => setCursor((p) => !p), 530)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="hero-glow" />
      <div className="grid-bg absolute inset-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left column ── */}
          <div>
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-7 tracking-wide"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Available for opportunities · Lahore, Pakistan
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-4"
            >
              <span className="text-text-primary">Gull </span>
              <span className="gradient-text-emerald">Snobar</span>
            </motion.h1>

            {/* Rotating subtitle + cursor */}
            <div className="h-10 mb-6 overflow-hidden flex items-center">
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
                  <span
                    className="ml-0.5 text-emerald-500 transition-opacity duration-75"
                    style={{ opacity: cursor ? 1 : 0 }}
                  >|</span>
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-text-secondary leading-relaxed mb-8 max-w-lg text-base sm:text-[1.05rem]"
            >
              Full-Stack MERN Developer who turns ideas into{' '}
              <span className="text-text-primary font-medium">real, shipped products</span>. I plan the architecture first, then build it clean with a focus on performance, scalability, and great user experience.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 mb-8"
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
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border border-border bg-surface text-text-primary hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all duration-200 hover:scale-[1.03]"
              >
                <Download className="w-4 h-4" />
                Download CV
              </Link>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex items-center gap-2.5"
            >
              {socialLinks.map(({ href, icon: Icon, label, external }) => (
                <Link
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl border border-border bg-surface flex items-center justify-center text-text-secondary hover:border-emerald-500/40 hover:text-emerald-500 hover:bg-emerald-500/5 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
              <span className="text-border mx-1 select-none">·</span>
              <span className="text-xs text-text-secondary/70">Let's connect</span>
            </motion.div>
          </div>

          {/* ── Right column ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="hidden lg:flex flex-col gap-4"
          >
            {/* Stats 2×2 */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  className="card card-emerald p-6 rounded-2xl relative overflow-hidden cursor-default"
                >
                  {/* subtle corner tint */}
                  <div className="absolute top-0 right-0 w-16 h-16 rounded-bl-3xl bg-gradient-to-bl from-emerald-500/10 to-transparent pointer-events-none" />
                  <p className="font-display text-4xl font-bold gradient-text-emerald mb-1">
                    {stat.value}
                  </p>
                  <p className="text-text-secondary text-xs leading-snug">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Availability status card */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.62 }}
              className="card card-emerald p-4 rounded-2xl flex items-center gap-3"
            >
              <div className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-text-primary">Open to full-time roles</p>
                <p className="text-xs text-text-secondary truncate">Ready to join · Lahore or Remote</p>
              </div>
              <span className="shrink-0 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                Now
              </span>
            </motion.div>

            {/* Tech pill strip */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="flex flex-wrap gap-2"
            >
              {techRow.map((label, i) => (
                <motion.span
                  key={label}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + i * 0.06 }}
                  className="inline-flex items-center px-3 py-1.5 rounded-full border border-border bg-secondary text-text-secondary text-xs font-medium"
                >
                  {label}
                </motion.span>
              ))}
            </motion.div>
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
            <div key={stat.label} className="card card-emerald p-4 rounded-2xl text-center">
              <p className="font-display text-2xl font-bold gradient-text-emerald">{stat.value}</p>
              <p className="text-text-secondary text-xs mt-1 leading-snug">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1 text-text-secondary/40"
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
