'use client'

import { AnimatedSection } from '@/components/shared/AnimatedText'
import { skillGroups } from '@/lib/data'

const descriptions: Record<string, string> = {
  Frontend: 'Interfaces, component systems, and responsive product experiences.',
  Backend: 'APIs, application services, authentication, and data modeling.',
  'Tools & DevOps': 'Everyday workflow for versioning, debugging, containers, and delivery.',
  'AI & Data': 'LLM integrations, retrieval workflows, and practical AI product features.',
}

export function Skills() {
  return (
    <section id="skills" className="section-spacing bg-[#151710] text-[#f3f1e8] dark:bg-[#eff09f] dark:text-[#14160f]">
      <div className="site-shell">
        <div className="grid gap-6 border-t border-current/50 pt-5 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-3">
            <p className="eyebrow opacity-60">03 / Expertise</p>
          </div>
          <div className="md:col-span-9">
            <h2 className="section-title max-w-[12ch] !text-current">A practical full-stack toolkit.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed opacity-70">
              The technologies I use across interface work, application logic, databases, AI integrations, and deployment.
            </p>
          </div>
        </div>

        <div className="mt-16 grid border-t border-current/30 lg:grid-cols-2">
          {skillGroups.map((group, index) => (
            <AnimatedSection
              key={group.category}
              delay={index * 0.05}
              className={`border-b border-current/30 py-8 lg:py-10 ${index % 2 === 0 ? 'lg:pr-10' : 'lg:border-l lg:pl-10'}`}
            >
              <div className="grid grid-cols-[2.25rem_1fr] gap-4">
                <span className="font-mono text-xs opacity-50">0{index + 1}</span>
                <div>
                  <h3 className="!text-current font-display text-2xl font-semibold tracking-tight">{group.category}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed opacity-60">
                    {descriptions[group.category]}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
                    {group.skills.map((skill) => (
                      <li key={skill.name} className="border-b border-current/35 pb-0.5 text-sm font-medium">
                        {skill.name}
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
