import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Github, LockKeyhole } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/AnimatedText'
import { featuredProjects } from '@/lib/data'
import type { Project } from '@/types'

const projectDetails: Record<string, { label: string; highlights: string[] }> = {
  omnicat: {
    label: 'AI SaaS · Shopify workflows',
    highlights: [
      'AI content and image tools',
      'User, plan, and admin workflows',
      'Configurable AI providers',
    ],
  },
  'quote-management': {
    label: 'Full-stack workflow system',
    highlights: [
      'Draft and review workflows',
      'Validated, ownership-aware CRUD',
      'Virtualized handling for ~3,000 records',
    ],
  },
}

export function SelectedWork() {
  const projects = featuredProjects as Project[]
  const selected = projects.filter((project) => project.featured).slice(0, 2)
  const more = projects.filter((project) => !project.featured).slice(0, 2)

  return (
    <section id="projects" className="section-spacing bg-surface">
      <div className="site-shell">
        <div className="grid gap-6 border-t border-text-primary pt-5 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-3">
            <p className="eyebrow text-text-secondary">01 Selected work</p>
          </div>
          <div className="md:col-span-9">
            <h2 className="section-title max-w-[11ch]">Product work with real constraints.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-secondary">
              A closer look at the systems I contribute to professionally, followed by independent full-stack builds.
            </p>
          </div>
        </div>

        <div className="mt-16 space-y-24 lg:space-y-32">
          {selected.map((project, index) => {
            const details = projectDetails[project.id]
            return (
              <AnimatedSection key={project.id}>
                <article className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
                  <div className={index % 2 === 0 ? 'lg:col-span-7' : 'lg:col-span-7 lg:col-start-6'}>
                    <div className={index === 0 ? 'relative overflow-hidden bg-[#211b35] p-3 sm:p-6' : 'relative overflow-hidden bg-[#dff5c7] p-3 sm:p-6'}>
                      <span className="absolute left-4 top-4 z-10 bg-[#11130f] px-2 py-1 font-mono text-[0.6rem] text-[#f4f2e9]">
                        0{index + 1}
                      </span>
                      {project.image_url && (
                        <div className="relative aspect-[16/9] overflow-hidden bg-white shadow-2xl shadow-black/20">
                          <Image
                            src={project.image_url}
                            alt={`${project.title} product interface`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 58vw"
                            className="object-contain"
                            priority={index === 0}
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className={index % 2 === 0 ? 'lg:col-span-5 lg:pt-8' : 'lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:pt-8'}>
                    <p className="eyebrow text-accent">{details?.label ?? 'Product engineering'}</p>
                    <h3 className="mt-4 max-w-[13ch] font-display text-3xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-5xl">
                      {project.title}
                    </h3>
                    {project.company && (
                      <p className="mt-3 text-sm font-semibold text-text-secondary">Professional work at {project.company}</p>
                    )}
                    <p className="mt-6 text-base leading-relaxed text-text-secondary">{project.description}</p>

                    {details && (
                      <ul className="mt-7 border-t border-border">
                        {details.highlights.map((highlight) => (
                          <li key={highlight} className="grid grid-cols-[1rem_1fr] gap-3 border-b border-border py-3 text-sm font-medium">
                            <span className="font-mono text-[0.6rem] text-accent">+</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="mt-7 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
                      {project.tech_stack.map((tech) => (
                        <span key={tech} className="badge">{tech}</span>
                      ))}
                    </div>

                    <div className="mt-7">
                      {project.repo_url ? (
                        <Link href={project.repo_url} target="_blank" rel="noopener noreferrer" className="text-link">
                          View source <Github className="h-3.5 w-3.5" />
                        </Link>
                      ) : (
                        <p className="inline-flex items-center gap-2 text-xs font-medium text-text-secondary">
                          <LockKeyhole className="h-3.5 w-3.5" /> Private company project
                        </p>
                      )}
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            )
          })}
        </div>

        <AnimatedSection className="mt-24 border-t border-text-primary pt-5 lg:mt-32">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="eyebrow text-text-secondary">Independent builds</p>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">More product experiments</h3>
            </div>
            <Link href="/projects" className="text-link">
              View all projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid border-y border-border md:grid-cols-2">
            {more.map((project, index) => (
              <article key={project.id} className={index === 1 ? 'border-t border-border py-6 md:border-l md:border-t-0 md:pl-8' : 'py-6 md:pr-8'}>
                <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
                  {project.image_url && (
                    <Image
                      src={project.image_url}
                      alt={`${project.title} interface preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                    />
                  )}
                </div>
                <div className="mt-5 flex items-start justify-between gap-6">
                  <div>
                    <p className="eyebrow text-text-secondary">0{index + 3} / Independent</p>
                    <h4 className="mt-2 font-display text-xl font-semibold tracking-tight">{project.title}</h4>
                  </div>
                  {project.repo_url && (
                    <Link
                      href={project.repo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code`}
                      className="flex h-10 w-10 shrink-0 items-center justify-center border border-border transition-colors hover:border-text-primary"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
