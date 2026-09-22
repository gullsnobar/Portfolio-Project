'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, Linkedin, Github, FileText, Heart, MapPin, ArrowUp } from 'lucide-react'
import { personalInfo } from '@/lib/data'

const quickLinks = [
  { href: '/#about',      label: 'About'      },
  { href: '/#skills',     label: 'Skills'     },
  { href: '/#experience', label: 'Experience' },
  { href: '/#projects',   label: 'Projects'   },
  { href: '/#contact',    label: 'Contact'    },
  { href: '/guestbook',   label: 'Guestbook'  },
]

const socials = [
  { href: personalInfo.github,              label: 'GitHub',   icon: Github   },
  { href: personalInfo.linkedin,            label: 'LinkedIn', icon: Linkedin, external: true },
  { href: `mailto:${personalInfo.email}`,   label: 'Email',    icon: Mail     },
  { href: personalInfo.resume,              label: 'Resume',   icon: FileText, external: true },
]

export function Footer() {
  const year = new Date().getFullYear()

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="w-full border-t border-border bg-surface/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-8">

        {/* 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-14">

          {/* Col 1: Brand */}
          <div className="flex flex-col space-y-5">
            <div className="flex items-center gap-2.5">
              <Image
                src="/Gull.png"
                alt="Gull Snobar logo"
                width={36}
                height={36}
                className="w-9 h-9 rounded-xl object-cover shadow-sm"
              />
              <div>
                <p className="font-display font-bold text-text-primary text-base leading-none">
                  Gull<span className="text-accent">.</span>Snobar
                </p>
                <p className="text-xs text-text-secondary mt-1">Full-Stack Developer</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-text-secondary max-w-xs">
              Building robust, scalable web applications and AI-powered platforms. Turning complex problems into clean digital solutions.
            </p>
            <div className="space-y-2.5">
              <div className="inline-flex items-center gap-2 text-sm text-text-secondary">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                Lahore, Pakistan
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                <span className="font-medium text-text-primary text-sm">Available for opportunities</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-text-primary mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3.5">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-accent transition-all duration-300"
                  >
                    <span className="w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-3" />
                    <span className="group-hover:translate-x-0.5 transition-transform duration-300">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Connect */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-text-primary mb-6">
              Connect
            </h4>
            <p className="text-sm leading-relaxed text-text-secondary mb-5">
              Feel free to reach out for collaborations, roles, or just to say hi.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {socials.map(({ href, label, icon: Icon, external }) => (
                <Link
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="group w-10 h-10 rounded-xl border border-border bg-background flex items-center justify-center text-text-secondary transition-all duration-300 hover:scale-105 hover:border-accent/40 hover:text-accent hover:bg-accent/5"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-border pt-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="flex items-center gap-1.5 text-text-secondary">
            © {year} Gull Snobar. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-text-secondary">
              Built with
              <Heart className="w-3 h-3 text-accent fill-accent" />
              Next.js &amp; Tailwind
            </span>
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-1.5 text-text-secondary hover:text-accent transition-colors duration-300 font-medium uppercase tracking-wider"
            >
              Back to Top
              <ArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}
