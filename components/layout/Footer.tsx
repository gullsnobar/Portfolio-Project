'use client'

import Link from 'next/link'
import { ArrowUp, ArrowUpRight } from 'lucide-react'
import { personalInfo } from '@/lib/data'

const navigation = [
  { href: '/#projects', label: 'Work' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#skills', label: 'Expertise' },
  { href: '/#about', label: 'About' },
  { href: '/guestbook', label: 'Guestbook' },
]

const links = [
  { href: personalInfo.github, label: 'GitHub' },
  { href: personalInfo.linkedin, label: 'LinkedIn' },
  { href: personalInfo.resume, label: 'Résumé' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#11130f] text-[#f3f1e8]">
      <div className="site-shell pb-7 pt-16 sm:pt-24">
        <div className="grid gap-10 border-t border-white/35 pt-5 md:grid-cols-12 md:gap-8">
          <p className="eyebrow text-white/55 md:col-span-3">A final note</p>
          <div className="md:col-span-9">
            <h2 className="max-w-[11ch] font-display text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.92] tracking-[-0.06em] text-[#f3f1e8]">
              Have something interesting to build?
            </h2>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
              I&apos;m open to thoughtful software engineering roles, product work, and professional conversations with teams building useful things.
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="signal-mark mt-8 inline-flex max-w-full items-center gap-3 px-5 py-4 text-sm font-bold transition-transform hover:-translate-y-1 sm:text-base"
            >
              <span className="truncate">{personalInfo.email}</span>
              <ArrowUpRight className="h-4 w-4 shrink-0" />
            </a>
          </div>
        </div>

        <div className="mt-20 grid gap-10 border-t border-white/20 pt-7 sm:mt-28 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="signal-mark flex h-9 w-9 items-center justify-center font-display text-xs font-bold">GS</span>
              <div>
                <p className="font-display font-semibold text-[#f3f1e8]">Gull Snobar</p>
                <p className="text-xs text-white/50">Associate Software Engineer</p>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
              Full-stack product development, AI-powered applications, APIs, databases, and integrations.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-5">
            <div>
              <p className="eyebrow text-white/40">Navigate</p>
              <ul className="mt-4 space-y-2.5">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="inline-flex min-h-11 items-center text-sm text-white/65 transition-colors hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow text-white/40">Elsewhere</p>
              <ul className="mt-4 space-y-2.5">
                {links.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-1.5 text-sm text-white/65 transition-colors hover:text-white"
                    >
                      {item.label} <ArrowUpRight className="h-3 w-3" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-2 md:text-right">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex h-11 w-11 items-center justify-center border border-white/30 text-white/70 transition-colors hover:border-white hover:text-white"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/20 pt-5 font-mono text-[0.62rem] uppercase tracking-wider text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Gull Snobar</p>
          <p>Designed &amp; built in Lahore, Pakistan</p>
        </div>
      </div>
    </footer>
  )
}
