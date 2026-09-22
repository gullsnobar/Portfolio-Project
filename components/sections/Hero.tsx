'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { personalInfo } from '@/lib/data'

const ROTATING_TITLES = [
  'Full-Stack Developer',
  'React and Next.js Engineer',
  'Node.js Backend Developer',
  'AI-Powered Systems Builder',
]

const socialLinks = [
  { href: personalInfo.github, label: 'GitHub', external: true },
  { href: personalInfo.linkedin, label: 'LinkedIn', external: true },
  { href: `mailto:${personalInfo.email}`, label: 'Email' },
]

const stats = [
  { value: '10+', label: 'Projects Shipped' },
  { value: '3',   label: 'Roles and Internships' },
  { value: '15+', label: 'Core Technologies' },
]

const techBadges = [
  { label: 'React',      color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-900' },
  { label: 'Next.js',    color: 'bg-text-primary/5 text-text-primary border-border' },
  { label: 'TypeScript', color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-900' },
  { label: 'Node.js',    color: 'bg-green-500/10 text-green-700 dark:text-green-400 border-green-200 dark:border-green-900' },
  { label: 'PostgreSQL', color: 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-200 dark:border-indigo-900' },
  { label: 'Docker',     color: 'bg-sky-500/10 text-sky-700 dark:text-sky-400 border-sky-200 dark:border-sky-900' },
  { label: 'OpenAI',     color: 'bg-accent/10 text-accent border-accent/20' },
  { label: 'AdonisJS',   color: 'bg-text-primary/5 text-text-primary border-border' },
]

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setTitleIndex((p) => (p + 1) % ROTATING_TITLES.length)
    }, 2800)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Ambient background glow & grid */}
      <div className="absolute inset-0 grid-bg opacity-100" />
      <div className="hero-glow" />

      {/* Decorative ambient color orbs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-accent/3 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">

          {/* ── Left column ── */}
          <div>
            {/* Live availability pill */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/25 bg-accent/8 text-text-primary text-xs font-medium mb-6 tracking-wide"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              Available for opportunities · Lahore, Pakistan
            </motion.div>

            {/* Name headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="font-display font-bold leading-[1.05] tracking-tight mb-4"
              style={{ fontSize: 'clamp(2.75rem, 5.5vw, 4.8rem)' }}
            >
              <span className="text-text-primary">Hi, I&apos;m </span>
              <span
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--accent)) 0%, hsl(172, 80%, 65%) 50%, hsl(200, 70%, 55%) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Gull Snobar
              </span>
            </motion.h1>

            {/* Dynamic rotating subtitle - smooth animation, no cursor slashes */}
            <div className="h-10 mb-5 overflow-hidden flex items-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={titleIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="text-lg sm:text-2xl font-medium text-text-secondary tracking-tight"
                >
                  {ROTATING_TITLES[titleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* High-impact bio */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="text-text-secondary leading-relaxed mb-8 max-w-[540px] text-base sm:text-[1.05rem]"
            >
              Full-Stack engineer specializing in modern web applications and AI-driven products. Experienced in building scalable architectures, clean APIs, and responsive interfaces with production-grade engineering.
            </motion.p>

            {/* Typography-driven CTA buttons - no icons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="flex flex-wrap items-center gap-3.5 mb-9"
            >
              <Link
                href="/#projects"
                className="px-6 py-3 rounded-xl font-semibold text-sm bg-text-primary text-background hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg transition-all duration-200"
              >
                View My Work
              </Link>
              <a
                href={personalInfo.resume}
                download="Gull_Snobar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl font-semibold text-sm border border-border bg-surface text-text-primary hover:border-accent/40 hover:bg-accent/5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                Download CV
              </a>
            </motion.div>

            {/* Connect links - clean text chips, no icons, no slashes */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex items-center flex-wrap gap-2"
            >
              <span className="text-xs uppercase tracking-wider font-semibold text-text-secondary/70 mr-1.5">
                Connect
              </span>
              {socialLinks.map(({ href, label, external }) => (
                <Link
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="px-3 py-1.5 rounded-lg border border-border bg-surface text-xs font-medium text-text-secondary hover:text-text-primary hover:border-accent/40 hover:bg-accent/5 hover:-translate-y-0.5 transition-all duration-200"
                >
                  {label}
                </Link>
              ))}
            </motion.div>
          </div>

          {/* ── Right column (Refined Engineer Workspace Card) ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="hidden lg:flex flex-col gap-4"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border bg-surface/90 backdrop-blur-md p-6 shadow-xl">
              {/* Subtle top accent gradient */}
              <div
                className="absolute inset-x-0 top-0 h-0.5"
                style={{
                  background: 'linear-gradient(90deg, hsl(var(--accent)), hsl(172, 80%, 65%), hsl(200, 70%, 55%), transparent)',
                }}
              />

              {/* Window-style header with control dots and status */}
              <div className="flex items-center justify-between pb-4 border-b border-border/70 mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  <span className="ml-2 text-xs font-mono text-text-secondary/70">engineer.profile</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-[11px] font-medium text-accent">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  Active
                </div>
              </div>

              {/* Developer identity with monogram */}
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 flex items-center justify-center font-display font-bold text-accent text-base shadow-sm">
                  GS
                </div>
                <div>
                  <h2 className="text-base font-bold text-text-primary leading-tight">Gull Snobar</h2>
                  <p className="text-xs text-text-secondary font-medium">Full-Stack and AI Developer</p>
                  <p className="text-[11px] text-text-secondary/70">Lahore, Pakistan · Open to Remote</p>
                </div>
              </div>

              {/* Key metrics grid */}
              <div className="grid grid-cols-3 gap-2.5 mb-5">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl bg-background/80 border border-border/80 p-3 text-center transition-all hover:border-accent/30"
                  >
                    <p
                      className="font-bold text-xl leading-tight mb-1"
                      style={{
                        background: 'linear-gradient(135deg, hsl(var(--accent)), hsl(200, 70%, 55%))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {s.value}
                    </p>
                    <p className="text-text-secondary text-[10px] font-medium leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Focus and architecture summary */}
              <div className="rounded-xl bg-background/50 border border-border/60 p-3.5 mb-5 text-xs space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-text-secondary/70 font-medium">Core Stack:</span>
                  <span className="text-text-primary font-semibold text-right">React, Next.js, Node.js, PostgreSQL</span>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <span className="text-text-secondary/70 font-medium">Specialization:</span>
                  <span className="text-text-primary font-semibold text-right">Scalable SaaS and AI Systems</span>
                </div>
              </div>

              {/* Technologies tags */}
              <div>
                <p className="text-[11px] uppercase tracking-wider font-semibold text-text-secondary/60 mb-2.5">
                  Core Technologies
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {techBadges.map(({ label, color }) => (
                    <span
                      key={label}
                      className={`inline-flex items-center px-2.5 py-1 rounded-md border text-[11px] font-medium transition-colors ${color}`}
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>


          </motion.div>
        </div>

        {/* ── Mobile stats strip (Clean cards, no icons or slashes) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="lg:hidden mt-12 grid grid-cols-3 gap-3"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="card p-4 rounded-xl text-center">
              <p
                className="font-bold text-2xl mb-1"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--accent)), hsl(200, 70%, 55%))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {stat.value}
              </p>
              <p className="text-text-secondary text-xs leading-snug">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
