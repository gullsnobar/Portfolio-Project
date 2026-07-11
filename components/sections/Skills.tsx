'use client'

import { SectionHeader, AnimatedSection } from '@/components/shared/AnimatedText'

// ── Skill data with colored icon badges ──────────────────────────────────────
const skillGroups = [
  {
    category: 'Frontend',
    color: 'from-blue-500/10 to-indigo-500/10 border-blue-400/20',
    dot: 'bg-blue-500',
    dotLabel: 'text-blue-600 dark:text-blue-400',
    skills: [
      { name: 'React.js',    icon: '⚛', color: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300' },
      { name: 'Next.js',     icon: 'N', color: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200' },
      { name: 'JavaScript',  icon: 'JS', color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300' },
      { name: 'TypeScript',  icon: 'TS', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300' },
      { name: 'HTML5',       icon: '⌗', color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300' },
      { name: 'CSS3',        icon: '✦', color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300' },
      { name: 'Tailwind',    icon: '~', color: 'bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300' },
      { name: 'Material UI', icon: 'M', color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300' },
    ],
  },
  {
    category: 'Backend',
    color: 'from-emerald-500/10 to-teal-500/10 border-emerald-400/20',
    dot: 'bg-emerald-500',
    dotLabel: 'text-emerald-600 dark:text-emerald-400',
    skills: [
      { name: 'Node.js',     icon: '⬡', color: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300' },
      { name: 'Express.js',  icon: 'Ex', color: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300' },
      { name: 'MongoDB',     icon: '🍃', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300' },
      { name: 'REST APIs',   icon: '⇌', color: 'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300' },
    ],
  },
  {
    category: 'Tools & DevOps',
    color: 'from-orange-500/10 to-amber-500/10 border-orange-400/20',
    dot: 'bg-orange-500',
    dotLabel: 'text-orange-600 dark:text-orange-400',
    skills: [
      { name: 'Git',         icon: '⌥', color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300' },
      { name: 'GitHub',      icon: 'GH', color: 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200' },
      { name: 'Docker',      icon: '🐳', color: 'bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300' },
      { name: 'VS Code',     icon: '{ }', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300' },
      { name: 'Postman',     icon: 'PM', color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300' },
    ],
  },
  {
    category: 'Exploring',
    color: 'from-purple-500/10 to-pink-500/10 border-purple-400/20',
    dot: 'bg-purple-500',
    dotLabel: 'text-purple-600 dark:text-purple-400',
    skills: [
      { name: 'AI / LLMs',   icon: '🤖', color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300' },
      { name: 'Supabase',    icon: 'SB', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300' },
      { name: 'Web Perf',    icon: '⚡', color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300' },
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
                <span className={`w-2 h-2 rounded-full ${group.dot}`} />
                <h3 className={`text-xs font-semibold uppercase tracking-widest ${group.dotLabel}`}>
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
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold ${skill.color}`}>
                      {skill.icon}
                    </div>
                    {/* Label */}
                    <span className="text-xs text-text-secondary group-hover:text-accent font-medium transition-colors text-center leading-tight max-w-[5rem]">
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
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl border border-dashed border-accent/30 bg-accent/5">
            <div>
              <p className="font-display font-semibold text-text-primary">Always learning.</p>
              <p className="text-text-secondary text-sm mt-0.5">
                Currently exploring AI integration, performance optimisation, and modern web patterns.
              </p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/25 shrink-0">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-sm font-medium">In Progress</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
