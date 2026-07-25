'use client'

import Link from 'next/link'
import { Mail, Linkedin, Github, FileText, Heart, ArrowRight, MapPin, ExternalLink, ArrowUp } from 'lucide-react'
import { personalInfo } from '@/lib/data'

const quickLinks = [
  { href: '/#about', label: 'About Me' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#contact', label: 'Contact' },
  { href: '/guestbook', label: 'Guestbook' },
]

const techStack = [
  { label: 'Next.js', href: 'https://nextjs.org' },
  { label: 'React', href: 'https://react.dev' },
  { label: 'Node.js', href: 'https://nodejs.org' },
  { label: 'TypeScript', href: 'https://typescriptlang.org' },
  { label: 'MongoDB', href: 'https://mongodb.com' },
  { label: 'Tailwind CSS', href: 'https://tailwindcss.com' },
]

const socials = [
  { href: personalInfo.github, label: 'GitHub', icon: Github },
  { href: personalInfo.linkedin, label: 'LinkedIn', icon: Linkedin, external: true },
  { href: `mailto:${personalInfo.email}`, label: 'Email', icon: Mail },
  { href: personalInfo.resume, label: 'Resume', icon: FileText, external: true },
]

export function Footer() {
  const year = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="w-full">
      {/* ── "Let's Work Together" CTA ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-12">
        <div className="relative overflow-hidden rounded-3xl p-10 sm:p-16 text-center bg-text-primary">
          {/* Decorative blobs */}
          <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-white/5 blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-white/5 blur-3xl translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10">
            <p className="text-background/60 text-xs font-semibold uppercase tracking-widest mb-3">
              Ready to collaborate?
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-background mb-4 leading-tight">
              Let&apos;s Work Together
            </h2>
            <p className="text-background/70 max-w-xl mx-auto text-base sm:text-lg mb-8 leading-relaxed">
              I&apos;m open to full-time roles, freelance projects, and exciting collaborations.
              Let&apos;s build something great.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-background text-text-primary font-semibold text-sm hover:bg-emerald-500 hover:text-white hover:scale-[1.03] transition-all duration-300 shadow-lg shadow-black/20"
              >
                <Mail className="w-4 h-4" />
                Send me an email
              </Link>
              <Link
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 border border-white/25 text-background font-semibold text-sm hover:bg-white/20 hover:scale-[1.03] transition-all duration-300 backdrop-blur-sm"
              >
                Connect on LinkedIn
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main footer body ── */}
      <div className="bg-[#0a0a0a] text-white/70 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-8">
          
          {/* 4-column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            
            {/* Col 1 — Brand & Tagline */}
            <div className="lg:col-span-1 flex flex-col space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white text-base font-bold shadow-md shadow-emerald-500/20">
                  G
                </span>
                <div>
                  <p className="font-display font-bold text-white text-lg leading-none">
                    Gull<span className="text-emerald-500">.</span>Snobar
                  </p>
                  <p className="text-xs text-white/60 mt-1">Full-Stack Developer</p>
                </div>
              </div>
              
              <p className="text-sm leading-relaxed text-white/60">
                Crafting robust, scalable, and high-performance web applications. I transform complex problems into elegant digital solutions with a focus on seamless user experiences.
              </p>
              
              {/* Location + availability */}
              <div className="space-y-3 pt-2">
                <div className="inline-flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-emerald-500" />
                  Lahore, Pakistan
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="font-medium text-white/90">
                    Available for opportunities
                  </span>
                </div>
              </div>
            </div>

            {/* Col 2 — Quick Links */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/90 mb-6">
                Quick Links
              </h4>
              <ul className="space-y-4">
                {quickLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="group inline-flex items-center gap-2 text-sm font-medium hover:text-emerald-500 transition-all duration-300"
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
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/90 mb-6">
                Tech Stack
              </h4>
              <ul className="space-y-4">
                {techStack.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-sm font-medium hover:text-emerald-500 transition-all duration-300"
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
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/90 mb-6">
                Get in Touch
              </h4>
              <div className="space-y-6">
                <p className="text-sm leading-relaxed text-white/60">
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
                      className="group w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/60 transition-all duration-300 hover:scale-110 hover:border-emerald-500 hover:text-emerald-500 hover:bg-emerald-500/10 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                    >
                      <Icon className="w-4 h-4" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* ── Bottom bar ── */}
          <div className="border-t border-white/10 pt-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 text-xs">
            <p className="flex items-center gap-1.5 opacity-80">
              © {year} Gull Snobar. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 opacity-80">
                Built with
                <Heart className="w-3 h-3 text-emerald-500 fill-emerald-500" />
                Next.js &amp; Tailwind
              </span>
              <button 
                onClick={scrollToTop}
                className="group flex items-center gap-1.5 text-white/80 hover:text-emerald-500 transition-colors duration-300 font-medium uppercase tracking-wider"
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
