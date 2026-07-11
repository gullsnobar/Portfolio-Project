import Link from 'next/link'
import { Mail, Linkedin, Github, FileText, Heart, ArrowRight } from 'lucide-react'
import { personalInfo } from '@/lib/data'

export function Footer() {
  const year = new Date().getFullYear()

  const socials = [
    { href: `mailto:${personalInfo.email}`, label: 'Email', icon: Mail },
    { href: personalInfo.linkedin, label: 'LinkedIn', icon: Linkedin, external: true },
    { href: personalInfo.github, label: 'GitHub', icon: Github, external: true },
    { href: personalInfo.resume, label: 'Resume', icon: FileText, external: true },
  ]

  const navLinks = [
    { href: '/#about', label: 'About' },
    { href: '/#skills', label: 'Skills' },
    { href: '/#experience', label: 'Experience' },
    { href: '/#projects', label: 'Projects' },
    { href: '/#contact', label: 'Contact' },
  ]

  return (
    <footer className="mt-8">
      {/* ── "Let's Work Together" CTA banner ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-0">
        <div
          className="relative overflow-hidden rounded-3xl p-10 sm:p-14 text-center"
          style={{
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)',
          }}
        >
          {/* Decorative blobs */}
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/5 blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-white/5 blur-3xl translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10">
            <p className="text-white/70 text-sm font-medium uppercase tracking-widest mb-3">
              Ready to collaborate?
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              Let&apos;s Work Together
            </h2>
            <p className="text-white/75 max-w-xl mx-auto text-base sm:text-lg mb-8 leading-relaxed">
              I&apos;m open to full-time roles, freelance projects, and exciting collaborations.
              Let&apos;s build something great.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-indigo-600 font-semibold text-sm hover:bg-white/95 hover:scale-[1.03] transition-all duration-200 shadow-lg"
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

      {/* ── Footer bar ── */}
      <div className="border-t border-border mt-16 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">

            {/* Brand */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                <span className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center text-white text-xs font-bold">
                  G
                </span>
                <p className="font-display font-semibold text-text-primary">
                  Gull<span className="text-accent">.</span>Snobar
                </p>
              </div>
              <p className="text-sm text-text-secondary">Full-Stack Developer — Lahore, Pakistan</p>
            </div>

            {/* Nav links */}
            <div className="hidden sm:flex items-center gap-5">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-xs text-text-secondary hover:text-accent transition-colors font-medium"
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2.5">
              {socials.map(({ href, label, icon: Icon, external }) => (
                <Link
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="w-9 h-9 rounded-xl border border-border bg-surface flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-all duration-200 hover:scale-110"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="section-divider my-6" />
          <p className="text-xs text-text-secondary/60 text-center flex items-center justify-center gap-1.5">
            © {year} Gull Snobar. Built with
            <Heart className="w-3 h-3 text-accent fill-accent" />
            using Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
