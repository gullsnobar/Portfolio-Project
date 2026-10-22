import Link from 'next/link'
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react'
import { personalInfo } from '@/lib/data'

const socialLinks = [
  { href: personalInfo.github, label: 'GitHub', icon: Github, external: true },
  { href: personalInfo.linkedin, label: 'LinkedIn', icon: Linkedin, external: true },
  { href: `mailto:${personalInfo.email}`, label: 'Email', icon: Mail, external: false },
]

const techStack = ['React', 'Next.js', 'TypeScript', 'Node.js', 'AdonisJS', 'PostgreSQL', 'Docker']

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-28 sm:px-6 sm:pb-24 sm:pt-36 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">

        {/* Text column */}
        <div>
          <span className="badge badge-accent mb-6">Associate Software Engineer</span>

          <h1 className="mb-5 max-w-[14ch]">
            Hi, I&apos;m{' '}
            <span className="gradient-text whitespace-nowrap">Gull Snobar</span>
          </h1>

          <p className="mb-8 max-w-xl text-lg text-text-secondary sm:text-xl">
            Full-stack engineer building web apps and AI integrations.
          </p>

          <div className="mb-10 flex flex-wrap gap-3">
            <Link href="/#projects" className="btn btn-primary px-6 py-3">
              View My Work
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={personalInfo.resume}
              download="Gull_Snobar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary px-6 py-3"
            >
              Download CV
              <Download className="h-4 w-4" />
            </a>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {socialLinks.map(({ href, label, icon: Icon, external }) => (
              <li key={label}>
                <Link
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-accent"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Profile card */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            className="absolute -inset-6 rounded-[2rem] bg-accent-gradient opacity-20 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 font-heading text-lg font-bold text-accent">
                GS
              </div>
              <div>
                <p className="font-heading text-lg font-semibold text-text-primary">Gull Snobar</p>
                <p className="text-sm text-text-secondary">Associate Software Engineer</p>
                <p className="text-sm text-text-secondary">Lahore, Pakistan</p>
              </div>
            </div>

            <dl className="mt-6 space-y-4 border-t border-border pt-6 text-sm">
              <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-6">
                <dt className="label">Focus</dt>
                <dd className="text-text-primary sm:text-right">Full-stack web apps and AI integrations</dd>
              </div>
            </dl>

            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
              {techStack.map((tech) => (
                <li key={tech} className="badge">{tech}</li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}
