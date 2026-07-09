'use client'

import { useState } from 'react'
import { SectionHeader, AnimatedSection } from '@/components/shared/AnimatedText'
import { skillGroups } from '@/lib/data'
import { cn } from '@/lib/utils'

// Skill icons map (using simple text badges with accent colors)
const categoryColors: Record<string, string> = {
  Frontend: 'from-blue-500/20 to-indigo-500/20 border-blue-500/30',
  Backend: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30',
  'Tools & DevOps': 'from-orange-500/20 to-amber-500/20 border-orange-500/30',
  Exploring: 'from-purple-500/20 to-pink-500/20 border-purple-500/30',
}

const categoryDots: Record<string, string> = {
  Frontend: 'bg-blue-500',
  Backend: 'bg-emerald-500',
  'Tools & DevOps': 'bg-orange-500',
  Exploring: 'bg-purple-500',
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const categories = skillGroups.map((g) => g.category)

  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          tag="Skills"
          title="Tools of the trade."
          subtitle="Technologies I work with daily, and a few I'm actively exploring."
        />

        {/* Category filter tabs */}
        <AnimatedSection delay={0.1} className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveCategory(null)}
            className={cn(
              'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
              activeCategory === null
                ? 'bg-accent text-white shadow-lg shadow-accent/25'
                : 'bg-surface border border-border text-text-secondary hover:border-accent hover:text-accent'
            )}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                activeCategory === cat
                  ? 'bg-accent text-white shadow-lg shadow-accent/25'
                  : 'bg-surface border border-border text-text-secondary hover:border-accent hover:text-accent'
              )}
            >
              {cat}
            </button>
          ))}
        </AnimatedSection>

        {/* Skill groups */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups
            .filter((g) => activeCategory === null || g.category === activeCategory)
            .map((group, groupIndex) => (
              <AnimatedSection key={group.category} delay={0.1 + groupIndex * 0.08}>
                <div
                  className={cn(
                    'h-full p-6 rounded-2xl border bg-gradient-to-br',
                    categoryColors[group.category] || 'from-surface to-surface border-border'
                  )}
                >
                  {/* Category header */}
                  <div className="flex items-center gap-2 mb-5">
                    <span
                      className={cn(
                        'w-2.5 h-2.5 rounded-full',
                        categoryDots[group.category] || 'bg-accent'
                      )}
                    />
                    <h3 className="font-display font-semibold text-text-primary text-sm">
                      {group.category}
                    </h3>
                  </div>

                  {/* Skills list */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="inline-flex items-center px-3 py-1.5 rounded-lg bg-background/60 border border-border/60 text-text-primary text-xs font-medium hover:border-accent/50 hover:text-accent transition-all duration-200 cursor-default"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
        </div>

        {/* Bottom accent bar */}
        <AnimatedSection delay={0.4} className="mt-16">
          <div className="p-6 rounded-2xl bg-accent/5 border border-accent/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-display font-semibold text-text-primary">Always learning.</p>
              <p className="text-text-secondary text-sm mt-1">
                Currently exploring AI integration, performance optimization, and modern web patterns.
              </p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-sm font-medium">In Progress</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
