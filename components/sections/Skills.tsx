'use client'

import { SectionHeader, AnimatedSection } from '@/components/shared/AnimatedText'

// ── Skill data — grayscale badges ────────────────────────────────────────────
const skillGroups = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js',    icon: '⚛' },
      { name: 'Next.js',     icon: 'N' },
      { name: 'JavaScript',  icon: 'JS' },
      { name: 'TypeScript',  icon: 'TS' },
      { name: 'HTML5',       icon: '⌗' },
      { name: 'CSS3',        icon: '✦' },
      { name: 'Tailwind',    icon: '~' },
      { name: 'Material UI', icon: 'M' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js',     icon: '⬡' },
      { name: 'Express.js',  icon: 'Ex' },
      { name: 'MongoDB',     icon: '🍃' },
      { name: 'REST APIs',   icon: '⇌' },
    ],
  },
  {
    category: 'Tools & DevOps',
    skills: [
      { name: 'Git',         icon: '⌥' },
      { name: 'GitHub',      icon: 'GH' },
      { name: 'Docker',      icon: '🐳' },
      { name: 'VS Code',     icon: '{ }' },
      { name: 'Postman',     icon: 'PM' },
    ],
  },
  {
    category: 'Exploring',
    skills: [
      { name: 'AI / LLMs',   icon: '🤖' },
      { name: 'Supabase',    icon: 'SB' },
      { name: 'Web Perf',    icon: '⚡' },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          tag="Skills"
          title="Tools of the trade."
          subtitle="Technologies I work with daily, and a few I'm actively exploring."
        />

        <div className="space-y-10">
          {skillGroups.map((group, gi) => (
            <AnimatedSection key={group.category} delay={gi * 0.08}>
              {/* Category label */}
              <div className="flex items-center gap-2 mb-5">
                <span className="w-2 h-2 rounded-full bg-text-primary" />
                <h3 className="text-xs font-semibold uppercase tracking-widest text-text-secondary">
                  {group.category}
                </h3>
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* Skill badges grid */}
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="skill-badge group"
                  >
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold bg-secondary border border-border text-text-primary">
                      {skill.icon}
                    </div>
                    {/* Label */}
                    <span className="text-xs text-text-secondary group-hover:text-text-primary font-medium transition-colors text-center leading-tight max-w-[5rem]">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom "always learning" bar */}
        <AnimatedSection delay={0.4} className="mt-14">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl border border-dashed border-border bg-surface">
            <div>
              <p className="font-display font-semibold text-text-primary">Always learning.</p>
              <p className="text-text-secondary text-sm mt-0.5">
                Currently exploring AI integration, performance optimisation, and modern web patterns.
              </p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border shrink-0">
              <span className="w-2 h-2 rounded-full bg-text-primary animate-pulse" />
              <span className="text-text-primary text-sm font-medium">In Progress</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
