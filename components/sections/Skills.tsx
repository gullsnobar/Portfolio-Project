'use client'

import { AnimatedSection } from '@/components/shared/AnimatedText'
import { skillGroups } from '@/lib/data'

const descriptions: Record<string, string> = {
  Frontend: 'Interfaces, component systems, responsive products, motion, and interactive 3D.',
  'Backend & APIs': 'Application services and APIs across TypeScript and Python ecosystems.',
  'Data & Services': 'Relational and document databases, caching, and backend platforms.',
  'Testing & Quality': 'End-to-end testing for reliable user flows and product behavior.',
  'AI Engineering': 'LLM integrations, transformer concepts, retrieval, and practical AI features.',
  'Tools & DevOps': 'Everyday workflow for versioning, debugging, containers, and delivery.',
  'Currently Learning': 'Expanding into architecture, cloud infrastructure, and automated delivery.',
}

export function Skills() {
  return (
    <section id="skills" className="section-spacing bg-[#151710] text-[#f3f1e8] dark:bg-[#eff09f] dark:text-[#14160f]">
      <div className="site-shell">
        <AnimatedSection className="grid gap-6 border-t border-current/50 pt-5 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-3">
            <p className="eyebrow opacity-60">03 Expertise</p>
          </div>
          <div className="md:col-span-9">
            <h2 className="section-title max-w-[12ch] !text-current">A practical full-stack toolkit.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed opacity-70">
              My working toolkit across interfaces, backend systems, data, testing, and AI—followed by the areas I&apos;m actively learning.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid border-t border-current/30 lg:grid-cols-2">
          {skillGroups.map((group, index) => (
            <AnimatedSection
              key={group.category}
              delay={index * 0.05}
              className={`border-b border-current/30 py-8 lg:py-10 ${
                group.status === 'learning'
                  ? 'lg:col-span-2'
                  : index % 2 === 0
                    ? 'lg:pr-10'
                    : 'lg:border-l lg:pl-10'
              }`}
            >
              <div className="grid grid-cols-[2.25rem_1fr] gap-4">
                <span className="font-mono text-xs opacity-50">0{index + 1}</span>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="!text-current font-display text-2xl font-semibold tracking-tight">{group.category}</h3>
                    {group.status === 'learning' && (
                      <span className="border border-current/35 px-2 py-1 font-mono text-[0.6rem] uppercase tracking-wider opacity-70">
                        In progress
                      </span>
                    )}
                  </div>
                  <p className="mt-2 max-w-md text-sm leading-relaxed opacity-60">
                    {descriptions[group.category]}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
                    {group.skills.map((skill) => (
                      <li key={skill.name} className="inline-flex items-center gap-2 text-sm font-medium">
                        <span aria-hidden="true" className="h-1 w-1 bg-current opacity-45" /> {skill.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
