import Link from 'next/link'
import { ArrowDownRight, ArrowUpRight, Download } from 'lucide-react'
import { personalInfo } from '@/lib/data'

const practices = [
  'Full-stack product development',
  'AI-powered web applications',
  'APIs, data, and integrations',
]

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-36">
      <div className="pointer-events-none absolute inset-0 paper-grid opacity-50" aria-hidden="true" />
      <div className="site-shell relative">
        <div className="grid border-t border-text-primary pt-4 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-8">
            <div className="mb-10 flex flex-wrap items-center justify-between gap-3 lg:pr-8">
              <p className="eyebrow text-text-primary">Gull Snobar / Software Engineer</p>
              <p className="eyebrow flex items-center gap-2 text-text-secondary">
                <span className="h-2 w-2 bg-[hsl(var(--signal))]" aria-hidden="true" />
                Open to relevant roles
              </p>
            </div>

            <h1 className="display-title max-w-[10ch]">
              Building useful software,{' '}
              <span className="relative inline-block">
                end to end.
                <span className="signal-mark absolute bottom-[0.05em] left-0 -z-10 h-[0.2em] w-full" aria-hidden="true" />
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-text-secondary sm:text-xl">
              Associate Software Engineer with about a year of hands-on experience building full-stack applications, AI-enabled tools, and practical SaaS products.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="/#projects" className="btn btn-primary px-5">
                Explore my work
                <ArrowDownRight className="h-4 w-4" />
              </Link>
              <Link href="/#contact" className="btn btn-secondary px-5">
                Get in touch
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
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
            <p className="eyebrow text-text-secondary">Current practice</p>
            <ol className="mt-6">
              {practices.map((practice, index) => (
                <li key={practice} className="grid grid-cols-[2rem_1fr] gap-2 border-t border-border py-4 first:border-text-primary">
                  <span className="font-mono text-[0.65rem] text-text-secondary">0{index + 1}</span>
                  <span className="text-sm font-semibold leading-snug text-text-primary">{practice}</span>
                </li>
              ))}
            </ol>

            <div className="mt-10 grid grid-cols-2 gap-px border border-border bg-border">
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
            <div key={label} className="flex items-center justify-between gap-4 bg-background px-4 py-4 sm:block sm:px-5">
              <p className="eyebrow text-text-secondary">{label}</p>
              <p className="mt-0 text-right text-sm font-medium text-text-primary sm:mt-2 sm:text-left">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
