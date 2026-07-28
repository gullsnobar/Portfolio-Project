'use client'

import Link from 'next/link'
import { Mail, Linkedin, Github, FileText, Heart, ArrowRight, MapPin, ExternalLink, ArrowUp } from 'lucide-react'
import { personalInfo } from '@/lib/data'

const quickLinks = [
  { href: '/#about',      label: 'About Me'   },
  { href: '/#skills',     label: 'Skills'     },
  { href: '/#experience', label: 'Experience' },
  { href: '/#projects',   label: 'Projects'   },
  { href: '/#contact',    label: 'Contact'    },
  { href: '/guestbook',   label: 'Guestbook'  },
]

const techStack = [
  { label: 'Next.js',    href: 'https://nextjs.org'       },
  { label: 'React',      href: 'https://react.dev'        },
  { label: 'Node.js',    href: 'https://nodejs.org'       },
  { label: 'TypeScript', href: 'https://typescriptlang.org' },
  { label: 'MongoDB',    href: 'https://mongodb.com'      },
  { label: 'Tailwind',   href: 'https://tailwindcss.com'  },
]

const socials = [
  { href: personalInfo.github,              label: 'GitHub',   icon: Github   },
  { href: personalInfo.linkedin,            label: 'LinkedIn', icon: Linkedin, external: true },
  { href: `mailto:${personalInfo.email}`,   label: 'Email',    icon: Mail     },
  { href: personalInfo.resume,              label: 'Resume',   icon: FileText, external: true },
]

const ctaMetrics = [
  { value: '10+', label: 'Projects' },
  { value: '3',   label: 'Roles'    },
  { value: '1yr', label: 'XP'       },
  { value: '∞',   label: 'Drive'    },
]

export function Footer() {
  const year = new Date().getFullYear()

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="w-full">

      {/* ── CTA Section ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-0">

        {/* Metrics strip */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-8 pt-2">
          {ctaMetrics.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-0.5">
              <span className="font-display text-2xl font-bold gradient-text-emerald">{value}</span>
              <span className="text-xs text-text-secondary uppercase tracking-widest">{label}</span>
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div className="relative overflow-hidden rounded-3xl p-10 sm:p-16 text-center"
             style={{
               background: 'linear-gradient(135deg, #0d1f17 0%, #0a1a10 40%, #091209 100%)',
             }}
        >
          {/* Emerald glow blobs */}
          <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-emerald-400/10 blur-3xl translate-y-1/2 pointer-events-none" />

          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none rounded-3xl"
            style={{
              backgroundImage: 'linear-gradient(rgba(52,211,153,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.15) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />

          <div className="relative z-10">
            <p className="text-emerald-400/80 text-xs font-semibold uppercase tracking-[0.25em] mb-3">
              Ready to collaborate?
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Let's Work Together
            </h2>
            <p className="text-white/60 max-w-xl mx-auto text-base sm:text-lg mb-8 leading-relaxed">
              I'm open to full-time roles, freelance projects, and exciting
              collaborations. Let's build something great.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-500 text-white font-semibold text-sm hover:bg-emerald-400 hover:scale-[1.03] transition-all duration-300 shadow-lg shadow-emerald-500/30"
              >
                <Mail className="w-4 h-4" />
                Send me an email
              </Link>
              <Link
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/20 hover:scale-[1.03] transition-all duration-300 backdrop-blur-sm"
              >
                Connect on LinkedIn
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main footer body ── */}
      <div className="bg-white dark:bg-[#0a0a0a] text-gray-600 dark:text-white/70 border-t border-gray-200 dark:border-white/10 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-8">

          {/* 4-column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

            {/* Col 1 — Brand */}
            <div className="lg:col-span-1 flex flex-col space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white text-base font-bold shadow-md shadow-emerald-500/25">
                  G
                </span>
                <div>
                  <p className="font-display font-bold text-gray-900 dark:text-white text-lg leading-none">
                    Gull<span className="text-emerald-500">.</span>Snobar
                  </p>
                  <p className="text-xs text-gray-500 dark:text-white/60 mt-1">Full-Stack Developer</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-500 dark:text-white/60">
                Crafting robust, scalable, and high-performance web applications. Turning complex problems into elegant digital solutions.
              </p>
              <div className="space-y-3 pt-1">
                <div className="inline-flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-emerald-500" />
                  Lahore, Pakistan
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  <span className="font-medium text-gray-800 dark:text-white/90">Available for opportunities</span>
                </div>
              </div>
            </div>

            {/* Col 2 — Quick Links */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-900 dark:text-white/90 mb-6">
                Quick Links
              </h4>
              <ul className="space-y-4">
                {quickLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="group inline-flex items-center gap-2 text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300"
                    >
                      <span className="w-0 h-[1px] bg-emerald-500 transition-all duration-300 group-hover:w-4" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Tech Stack */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-900 dark:text-white/90 mb-6">
                Tech Stack
              </h4>
              <ul className="space-y-4">
                {techStack.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{label}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 — Get in Touch */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-900 dark:text-white/90 mb-6">
                Get in Touch
              </h4>
              <div className="space-y-5">
                <p className="text-sm leading-relaxed text-gray-500 dark:text-white/60">
                  Feel free to reach out for collaborations, freelance projects, or just to say hi!
                </p>
                <div className="flex flex-wrap gap-3">
                  {socials.map(({ href, label, icon: Icon, external }) => (
                    <Link
                      key={label}
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      aria-label={label}
                      className="group w-10 h-10 rounded-full border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-500 dark:text-white/60 transition-all duration-300 hover:scale-110 hover:border-emerald-500 hover:text-emerald-500 hover:bg-emerald-500/10 hover:shadow-[0_0_14px_rgba(16,185,129,0.25)]"
                    >
                      <Icon className="w-4 h-4" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* ── Bottom bar ── */}
          <div className="border-t border-gray-200 dark:border-white/10 pt-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 text-xs">
            <p className="flex items-center gap-1.5 text-gray-500 dark:text-white/60">
              © {year} Gull Snobar. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 text-gray-500 dark:text-white/60">
                Built with
                <Heart className="w-3 h-3 text-emerald-500 fill-emerald-500" />
                Next.js &amp; Tailwind
              </span>
              <button
                onClick={scrollToTop}
                className="group flex items-center gap-1.5 text-gray-600 dark:text-white/70 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300 font-medium uppercase tracking-wider"
              >
                Back to Top
                <ArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
