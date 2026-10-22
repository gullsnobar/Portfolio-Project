'use client'

import { AnimatedSection, SectionHeader } from '@/components/shared/AnimatedText'
import { certifications, education, personalInfo } from '@/lib/data'
import { ArrowUpRight } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="section-spacing">
      <div className="site-shell">
        <SectionHeader
          tag="04 / About"
          title="Curious about the whole product."
          subtitle="I work across frontend and backend development, with a growing focus on AI-enabled applications and well-structured product systems."
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <AnimatedSection className="lg:col-span-7">
            <p className="font-display text-2xl font-medium leading-[1.25] tracking-[-0.03em] text-text-primary sm:text-4xl">
              I&apos;m Gull, an Associate Software Engineer based in Lahore. I enjoy taking a feature from data model and API through to the details people actually interact with.
            </p>
            <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-text-secondary">
              <p>
                At Devyard, I contribute to OmniCat and a quote management system. That work has strengthened how I think about real product constraints: maintaining workflows, handling data carefully, debugging across the stack, and shipping changes other people can build on.
              </p>
              <p>
                I&apos;m looking for junior, associate, or full-stack software engineering opportunities where I can contribute to useful products and keep growing with a strong engineering team.
              </p>
            </div>
            <a href={`mailto:${personalInfo.email}`} className="text-link mt-8">
              Start a conversation <ArrowUpRight className="h-4 w-4" />
            </a>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-5" delay={0.08}>
            <div className="border-t border-text-primary">
              {[
                ['Based in', 'Lahore, Punjab, Pakistan'],
                ['Current role', 'Associate Software Engineer'],
                ['Focus', 'Full-stack products and AI integrations'],
                ['Education', 'BS Computer Science'],
              ].map(([label, value]) => (
                <div key={label} className="grid grid-cols-[7rem_1fr] gap-4 border-b border-border py-4">
                  <p className="eyebrow text-text-secondary">{label}</p>
                  <p className="text-sm font-semibold leading-snug">{value}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        <div className="mt-20 grid gap-10 border-t border-text-primary pt-5 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="eyebrow text-text-secondary">Education & learning</p>
          </div>
          <div className="grid gap-10 md:col-span-9 md:grid-cols-2">
            <div>
              <h3 className="font-display text-xl font-semibold">Education</h3>
              <div className="mt-5">
                {education.map((item) => (
                  <div key={`${item.institution}-${item.degree}`} className="border-t border-border py-4">
                    <p className="font-semibold">{item.degree}</p>
                    <p className="mt-1 text-sm text-text-secondary">{item.institution}</p>
                    <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-wider text-text-secondary">
                      {item.period}{item.detail ? ` · ${item.detail}` : ''}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold">Additional learning</h3>
              <ul className="mt-5 border-t border-border">
                {certifications.map((certification) => (
                  <li key={certification} className="border-b border-border py-3 text-sm text-text-secondary">
                    {certification}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
