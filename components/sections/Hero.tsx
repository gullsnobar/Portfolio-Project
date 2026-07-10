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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020510]"
    >
      {/* Background: diagonal blue/cyan streaks */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Main diagonal streak — bright cyan/blue */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, #000510 0%, #020b2e 25%, #0a2a6e 38%, #1565c0 45%, #00b4d8 50%, #1565c0 55%, #0a2a6e 62%, #020b2e 75%, #000510 100%)',
          }}
        />
        {/* Secondary narrower streak overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, transparent 0%, transparent 30%, rgba(0,200,255,0.18) 42%, rgba(0,220,255,0.45) 50%, rgba(0,200,255,0.18) 58%, transparent 70%, transparent 100%)',
          }}
        />
        {/* Dark vignette edges to keep text readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 30%, rgba(0,3,15,0.65) 100%)',
          }}
        />
        {/* Bottom fade to blend with next section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(0,3,15,0.85))',
          }}
        />
        {/* Subtle noise/shimmer overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
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
          className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold text-white leading-none tracking-tight mb-6"
        >
          <span className="text-white">Gull </span>
          <span style={{ background: 'linear-gradient(90deg, #00d4ff 0%, #7b9fff 50%, #ffffff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Snobar</span>
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
              className="font-display text-xl sm:text-2xl lg:text-3xl font-medium text-white/70"
            >
              <span className="text-cyan-400">&gt;</span>{' '}
              <span className="text-white">{ROTATING_TITLES[titleIndex]}</span>
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto text-white/60 text-base sm:text-lg leading-relaxed mb-10"
        >
          Building fast, reliable, and scalable web applications from{' '}
          <span className="text-white font-medium">server to client</span>. Based in{' '}
          <span className="text-white font-medium">Lahore, Pakistan</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          {/* View My Work — glowing cyan button */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)',
              boxShadow: '0 0 30px rgba(14,165,233,0.5), 0 4px 20px rgba(14,165,233,0.3)',
            }}
          >
            <Terminal className="w-4 h-4" />
            View My Work
          </Link>

          {/* Download Resume — white glass outlined button */}
          <Link
            href={personalInfo.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:scale-105"
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1.5px solid rgba(255,255,255,0.35)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
            }}
          >
            <Download className="w-4 h-4" />
            Download Resume
          </Link>
        </motion.div>



        {/* Scroll indicator — bottom center */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-white/40"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>

        {/* Social links — left vertical strip */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="hidden lg:flex absolute left-6 bottom-0 top-0 flex-col items-center justify-end pb-10 gap-5"
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
              className="group flex items-center justify-center w-10 h-10 rounded-xl text-white/50 hover:text-white transition-all duration-200 hover:scale-110"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.15)',
                backdropFilter: 'blur(8px)',
              }}
              title={label}
            >
              <Icon className="w-4 h-4" />
            </Link>
          ))}
          {/* Decorative vertical line */}
          <div className="w-px h-16 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
