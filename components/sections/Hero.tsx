'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowDown, Download, Github, Linkedin, Mail, Terminal } from 'lucide-react'
import { personalInfo } from '@/lib/data'
import { cn } from '@/lib/utils'

const ROTATING_TITLES = [
  'Full-Stack Developer',
  'React & Next.js Engineer',
  'Node.js Backend Dev',
  'MERN Stack Builder',
  'API Architect',
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background: gradient orbs */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[100px] animate-float"
          style={{ animationDelay: '3s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, hsl(239 84% 67% / 0.04) 0%, transparent 70%)',
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              'linear-gradient(hsl(var(--text-primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--text-primary)) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center pt-24 sm:pt-28">


        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold text-text-primary leading-none tracking-tight mb-6"
        >
          Gull{' '}
          <span className="gradient-text">Snobar</span>
        </motion.h1>

        {/* Rotating title */}
        <div className="h-12 sm:h-14 mb-6 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={titleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="font-display text-xl sm:text-2xl lg:text-3xl font-medium text-text-secondary"
            >
              <span className="text-accent">&gt;</span>{' '}
              <span className="text-text-primary">{ROTATING_TITLES[titleIndex]}</span>
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto text-text-secondary text-base sm:text-lg leading-relaxed mb-10"
        >
          Building fast, reliable, and scalable web applications from{' '}
          <span className="text-text-primary font-medium">server to client</span>. Based in{' '}
          <span className="text-text-primary font-medium">Lahore, Pakistan</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link
            href="/#projects"
            className={cn(
              'inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-medium text-sm',
              'bg-accent text-white hover:bg-accent/90',
              'transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-accent/30',
              'shadow-lg shadow-accent/20'
            )}
          >
            <Terminal className="w-4 h-4" />
            View My Work
          </Link>
          <Link
            href={personalInfo.resume}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-medium text-sm',
              'border border-border bg-surface text-text-primary',
              'hover:border-accent hover:bg-accent/5',
              'transition-all duration-200 hover:scale-105'
            )}
          >
            <Download className="w-4 h-4" />
            Download Resume
          </Link>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { href: personalInfo.linkedin, icon: Linkedin, label: 'LinkedIn' },
            { href: personalInfo.github, icon: Github, label: 'GitHub' },
            { href: `mailto:${personalInfo.email}`, icon: Mail, label: 'Email' },
          ].map(({ href, icon: Icon, label }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="w-10 h-10 rounded-full border border-border bg-surface flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent hover:bg-accent/10 transition-all duration-200 hover:scale-110"
            >
              <Icon className="w-4 h-4" />
            </Link>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-text-secondary"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
