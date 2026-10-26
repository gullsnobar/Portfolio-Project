'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { ArrowDownRight, ArrowUpRight, Download } from 'lucide-react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { personalInfo } from '@/lib/data'

gsap.registerPlugin(useGSAP)

const practices = [
  'Full-stack product development',
  'AI-powered web applications',
  'APIs, data, and integrations',
]

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const media = gsap.matchMedia()

      media.add('(prefers-reduced-motion: no-preference)', () => {
      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } })

      timeline
        .from('[data-gsap="hero-grid"]', { autoAlpha: 0, duration: 0.45 })
        .from('[data-gsap="hero-meta"]', { autoAlpha: 0, y: 14, duration: 0.45 }, '-=0.25')
        .from(
          '[data-gsap="hero-title"]',
          { autoAlpha: 0, clipPath: 'inset(0 0 100% 0)', y: 44, duration: 0.85 },
          '-=0.15'
        )
        .from(
          '[data-gsap="hero-highlight"]',
          { scaleX: 0, transformOrigin: 'left center', duration: 0.65, ease: 'power2.out' },
          '-=0.35'
        )
        .from('[data-gsap="hero-copy"]', { autoAlpha: 0, y: 20, duration: 0.5 }, '-=0.35')
        .from(
          '[data-gsap="hero-action"]',
          { autoAlpha: 0, y: 14, duration: 0.4, stagger: 0.08 },
          '-=0.3'
        )
        .from(
          '[data-gsap="hero-aside"]',
          { autoAlpha: 0, x: 20, duration: 0.45, stagger: 0.08 },
          '-=0.35'
        )
        .from(
          '[data-gsap="hero-fact"]',
          { autoAlpha: 0, y: 12, duration: 0.4, stagger: 0.07 },
          '-=0.25'
        )
      })

      return () => media.revert()
    },
    { scope: heroRef }
  )

  return (
    <section ref={heroRef} id="hero" className="relative overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-36">
      <div data-gsap="hero-grid" className="pointer-events-none absolute inset-0 paper-grid opacity-50" aria-hidden="true" />
      <div className="site-shell relative">
        <div className="grid border-t border-text-primary pt-4 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-8">
            <div data-gsap="hero-meta" className="mb-10 flex flex-wrap items-center justify-between gap-3 lg:pr-8">
              <p className="eyebrow text-text-primary">Gull Snobar · Software Engineer</p>
              <p className="eyebrow flex items-center gap-2 text-text-secondary">
                <span className="h-2 w-2 bg-[hsl(var(--signal))]" aria-hidden="true" />
                Open to relevant roles
              </p>
            </div>

            <h1 data-gsap="hero-title" className="display-title max-w-[10ch]">
              Building useful software,{' '}
              <span className="relative inline-block">
                end to end.
                <span data-gsap="hero-highlight" className="signal-mark absolute bottom-[0.05em] left-0 -z-10 h-[0.2em] w-full" aria-hidden="true" />
              </span>
            </h1>

            <p data-gsap="hero-copy" className="mt-8 max-w-2xl text-lg leading-relaxed text-text-secondary sm:text-xl">
              Associate Software Engineer with about a year of hands-on experience building full-stack applications, AI-enabled tools, and practical SaaS products.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link data-gsap="hero-action" href="/#projects" className="btn btn-primary px-5">
                Explore my work
                <ArrowDownRight className="h-4 w-4" />
              </Link>
              <Link data-gsap="hero-action" href="/#contact" className="btn btn-secondary px-5">
                Get in touch
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                data-gsap="hero-action"
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-text-secondary underline decoration-border transition-colors hover:text-text-primary"
              >
                Résumé <Download className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <aside className="mt-14 border-t border-border pt-5 lg:col-span-4 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-1">
            <p data-gsap="hero-aside" className="eyebrow text-text-secondary">Current practice</p>
            <ol data-gsap="hero-aside" className="mt-6">
              {practices.map((practice, index) => (
                <li key={practice} className="grid grid-cols-[2rem_1fr] gap-2 border-t border-border py-4 first:border-text-primary">
                  <span className="font-mono text-[0.65rem] text-text-secondary">0{index + 1}</span>
                  <span className="text-sm font-semibold leading-snug text-text-primary">{practice}</span>
                </li>
              ))}
            </ol>

            <div data-gsap="hero-aside" className="mt-10 grid grid-cols-2 gap-px border border-border bg-border">
              <div className="bg-background p-4">
                <p className="eyebrow text-text-secondary">Based in</p>
                <p className="mt-2 text-sm font-semibold">Lahore, Pakistan</p>
              </div>
              <div className="bg-background p-4">
                <p className="eyebrow text-text-secondary">Current</p>
                <p className="mt-2 text-sm font-semibold">Devyard</p>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-16 grid gap-px border-y border-border bg-border sm:grid-cols-3">
          {[
            ['Role', 'Associate Software Engineer'],
            ['Focus', 'Product engineering + AI'],
            ['Stack', 'React · TypeScript · Node.js'],
          ].map(([label, value]) => (
            <div data-gsap="hero-fact" key={label} className="flex items-center justify-between gap-4 bg-background px-4 py-4 sm:block sm:px-5">
              <p className="eyebrow text-text-secondary">{label}</p>
              <p className="mt-0 text-right text-sm font-medium text-text-primary sm:mt-2 sm:text-left">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
