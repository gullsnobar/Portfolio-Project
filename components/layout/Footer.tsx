import Link from 'next/link'
import { Mail, Linkedin, Github, FileText, Heart } from 'lucide-react'
import { personalInfo } from '@/lib/data'

export function Footer() {
  const year = new Date().getFullYear()

  const links = [
    { href: `mailto:${personalInfo.email}`, label: 'Email', icon: Mail },
    { href: personalInfo.linkedin, label: 'LinkedIn', icon: Linkedin, external: true },
    { href: personalInfo.github, label: 'GitHub', icon: Github, external: true },
    { href: personalInfo.resume, label: 'Resume', icon: FileText, external: true },
  ]

  return (
    <footer className="border-t border-border/50 py-12 mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="font-display font-semibold text-text-primary">
              Gull<span className="text-accent">.</span>Snobar
            </p>
            <p className="text-sm text-text-secondary mt-1">Full-Stack Developer — Lahore, Pakistan</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {links.map(({ href, label, icon: Icon, external }) => (
              <Link
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="w-10 h-10 rounded-full border border-border bg-surface flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent hover:bg-accent/10 transition-all duration-200 hover:scale-110"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-text-secondary flex items-center gap-1.5">
            © {year} Gull Snobar. Built with
            <Heart className="w-3 h-3 text-accent fill-accent" />
          </p>
        </div>
      </div>
    </footer>
  )
}
