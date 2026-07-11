import Link from 'next/link'
import { Mail, Linkedin, Github, FileText, Heart, ArrowRight, MapPin, ExternalLink } from 'lucide-react'
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
  {
    href: personalInfo.github,
    label: 'GitHub',
    icon: Github,
    color: 'hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white',
  },
  {
    href: personalInfo.linkedin,
    label: 'LinkedIn',
    icon: Linkedin,
    color: 'hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400',
    external: true,
  },
  {
    href: `mailto:${personalInfo.email}`,
    label: 'Email',
    icon: Mail,
    color: 'hover:bg-violet-50 dark:hover:bg-violet-900/30 hover:text-violet-600 dark:hover:text-violet-400',
  },
  {
    href: personalInfo.resume,
    label: 'Resume',
    icon: FileText,
    color: 'hover:bg-emerald-50 dark:hover:bg-emerald-900/30 hover:text-emerald-600 dark:hover:text-emerald-400',
    external: true,
  },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-8">
      {/* ── "Let's Work Together" CTA ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-3xl p-10 sm:p-16 text-center"
          style={{
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)',
          }}
        >
          <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-white/5 blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-white/5 blur-3xl translate-x-1/2 translate-y-1/2" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-white/5 blur-3xl rounded-full" />

          <div className="relative z-10">
            <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-3">
              Ready to collaborate?
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Let&apos;s Work Together
            </h2>
            <p className="text-white/75 max-w-xl mx-auto text-base sm:text-lg mb-8 leading-relaxed">
              I&apos;m open to full-time roles, freelance projects, and exciting collaborations.
              Let&apos;s build something great.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-indigo-600 font-semibold text-sm hover:bg-white/95 hover:scale-[1.03] transition-all duration-200 shadow-lg shadow-black/20"
              >
                <Mail className="w-4 h-4" />
                Send me an email
              </Link>
              <Link
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/15 border border-white/30 text-white font-semibold text-sm hover:bg-white/25 hover:scale-[1.03] transition-all duration-200 backdrop-blur-sm"
              >
                Connect on LinkedIn
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main footer body ── */}
      <div className="border-t border-border mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-8">

          {/* 4-column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

            {/* Col 1 — Brand */}
            <div className="lg:col-span-1 space-y-5">
              <div className="flex items-center gap-2.5">
                <span className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center text-white text-sm font-bold shadow-md shadow-accent/30">
                  G
                </span>
                <div>
                  <p className="font-display font-bold text-text-primary leading-none">
                    Gull<span className="text-accent">.</span>Snobar
                  </p>
                  <p className="text-[11px] text-text-secondary mt-0.5">Full-Stack Developer</p>
                </div>
              </div>

              <p className="text-text-secondary text-sm leading-relaxed">
                Building fast, reliable, and scalable web applications — from server to client.
                Based in Lahore, Pakistan.
              </p>

              {/* Location + availability */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs text-text-secondary">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  Lahore, Punjab, Pakistan
                </div>
                <div className="flex items-center gap-1.5 text-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                    Available for opportunities
                  </span>
                </div>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-2 pt-1">
                {socials.map(({ href, label, icon: Icon, color, external }) => (
                  <Link
                    key={label}
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    aria-label={label}
                    className={`w-9 h-9 rounded-xl border border-border bg-surface flex items-center justify-center text-text-secondary transition-all duration-200 hover:scale-110 hover:border-transparent hover:shadow-md ${color}`}
                  >
                    <Icon className="w-4 h-4" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Col 2 — Quick Links */}
            <div>
              <h4 className="font-display font-semibold text-text-primary text-sm mb-5 flex items-center gap-2">
                <span className="w-1 h-4 rounded-full bg-accent" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="group inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors duration-200"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Tech Stack */}
            <div>
              <h4 className="font-display font-semibold text-text-primary text-sm mb-5 flex items-center gap-2">
                <span className="w-1 h-4 rounded-full bg-accent" />
                Tech Stack
              </h4>
              <ul className="space-y-3">
                {techStack.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent transition-colors duration-200"
                    >
                      {label}
                      <ExternalLink className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 — Get in Touch */}
            <div>
              <h4 className="font-display font-semibold text-text-primary text-sm mb-5 flex items-center gap-2">
                <span className="w-1 h-4 rounded-full bg-accent" />
                Get in Touch
              </h4>
              <div className="space-y-4">
                <Link
                  href={`mailto:${personalInfo.email}`}
                  className="group flex items-start gap-3 text-sm text-text-secondary hover:text-accent transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-accent/60 group-hover:text-accent transition-colors" />
                  <span className="break-all">{personalInfo.email}</span>
                </Link>
                <Link
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-sm text-text-secondary hover:text-accent transition-colors duration-200"
                >
                  <Linkedin className="w-4 h-4 shrink-0 text-accent/60 group-hover:text-accent transition-colors" />
                  <span>linkedin.com/in/gullsanobar</span>
                </Link>
                <Link
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-sm text-text-secondary hover:text-accent transition-colors duration-200"
                >
                  <Github className="w-4 h-4 shrink-0 text-accent/60 group-hover:text-accent transition-colors" />
                  <span>github.com/gullsnobar</span>
                </Link>
                <Link
                  href={personalInfo.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white mt-1 hover:opacity-90 hover:scale-[1.03] transition-all duration-200 shadow-md shadow-accent/20"
                  style={{ background: 'linear-gradient(135deg, hsl(var(--accent)) 0%, #8b5cf6 100%)' }}
                >
                  <FileText className="w-3.5 h-3.5" />
                  Download Resume
                </Link>
              </div>
            </div>
          </div>

          {/* ── Bottom bar ── */}
          <div className="section-divider mb-6" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-secondary/70">
            <p className="flex items-center gap-1.5">
              © {year} Gull Snobar. All rights reserved. Built with
              <Heart className="w-3 h-3 text-accent fill-accent" />
              using Next.js &amp; Tailwind CSS.
            </p>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                All systems operational
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
