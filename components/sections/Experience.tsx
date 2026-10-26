'use client'

import { AnimatedSection } from '@/components/shared/AnimatedText'
import { experience } from '@/lib/data'
import { ArrowDownRight } from 'lucide-react'

const roleTech: Record<string, string[]> = {
  devyard: ['React', 'TypeScript', 'AdonisJS', 'PostgreSQL', 'TanStack Virtual'],
  '1': ['React', 'Node.js', 'MongoDB', 'Express', 'Git'],
  '2': ['TypeScript', 'Node.js', 'Express', 'REST APIs', 'JWT'],
  '3': ['React', 'HTML', 'CSS', 'JavaScript'],
}

export function Experience() {
  return (
    <section id="experience" className="section-spacing">
      <div className="site-shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <AnimatedSection className="border-t border-text-primary pt-5 lg:sticky lg:top-28">
              <p className="eyebrow text-text-secondary">02 Experience</p>
              <h2 className="section-title mt-6 max-w-[8ch]">Learning by shipping.</h2>
              <p className="mt-6 max-w-sm leading-relaxed text-text-secondary">
                About a year across product engineering, internships, and a hands-on full-stack fellowship.
              </p>
              <a href="#skills" className="text-link mt-8">
                Explore technical range <ArrowDownRight className="h-4 w-4" />
              </a>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-8">
            {experience.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 0.06}>
                <article className="group grid gap-5 border-t border-border py-8 sm:grid-cols-[5.25rem_1fr] sm:gap-7 sm:py-10 first:border-text-primary">
                  <div>
                    <p className="font-mono text-xs text-text-secondary">{String(index + 1).padStart(2, '0')}</p>
                    {item.current && (
                      <span className="mt-3 inline-flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-wider text-accent">
                        <span className="h-2 w-2 bg-[hsl(var(--signal))]" /> Current
                      </span>
                    )}
                  </div>

                  <div>
                    <div className="grid gap-3 md:grid-cols-[1fr_auto] md:items-start md:gap-8">
                      <div>
                        <h3 className="font-display text-2xl font-semibold leading-tight tracking-[-0.03em] sm:text-3xl">
                          {item.role}
                        </h3>
                        <p className="mt-2 font-semibold text-text-secondary">{item.company}</p>
                      </div>
                      <div className="md:text-right">
                        <p className="font-mono text-[0.66rem] uppercase tracking-wider text-text-secondary">{item.period}</p>
                        <p className="mt-1 text-xs text-text-secondary">
                          {[item.type, item.location].filter(Boolean).join(' · ')}
                        </p>
                      </div>
                    </div>

                    {item.description.length > 0 && (
                      <ul className="mt-6 max-w-2xl space-y-3">
                        {item.description.map((point) => (
                          <li key={point} className="grid grid-cols-[0.5rem_1fr] gap-4 text-sm leading-relaxed text-text-secondary sm:text-base">
                            <span className="mt-[0.58em] h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}

                    {roleTech[item.id] && (
                      <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2" aria-label={`Technologies used at ${item.company}`}>
                        {roleTech[item.id].map((tech) => (
                          <span key={tech} className="font-mono text-[0.66rem] uppercase tracking-wide text-text-secondary">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
