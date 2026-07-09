'use client'

import { SectionHeader, AnimatedSection } from '@/components/shared/AnimatedText'
import { experience } from '@/lib/data'
import { cn } from '@/lib/utils'
import { MapPin, Briefcase, Calendar } from 'lucide-react'

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          tag="Experience"
          title="Where I've worked."
          subtitle="A timeline of roles that shaped my technical skills and professional approach."
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-border to-transparent" />

          <div className="space-y-8">
            {experience.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 0.1}>
                <div className="relative flex gap-6 sm:gap-10">
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0 w-12 sm:w-16 flex items-start justify-center pt-1">
                    <div
                      className={cn(
                        'w-3 h-3 rounded-full border-2 transition-all duration-300',
                        item.current
                          ? 'bg-accent border-accent timeline-dot-active shadow-lg shadow-accent/40'
                          : 'bg-surface border-border hover:border-accent'
                      )}
                    />
                  </div>

                  {/* Card */}
                  <div
                    className={cn(
                      'flex-1 group p-6 rounded-2xl border transition-all duration-300',
                      'bg-surface hover:border-accent/40',
                      item.current
                        ? 'border-accent/30 bg-accent/5'
                        : 'border-border hover:bg-accent/5'
                    )}
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <h3 className="font-display font-semibold text-text-primary text-lg leading-tight">
                            {item.role}
                          </h3>
                          {item.current && (
                            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-accent font-medium text-sm">{item.company}</p>
                      </div>

                      <div className="flex flex-col gap-1 sm:items-end text-xs text-text-secondary shrink-0">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-border/50 border border-border">
                          <Briefcase className="w-3 h-3" />
                          {item.type}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-border/50 border border-border">
                          <Calendar className="w-3 h-3" />
                          {item.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-border/50 border border-border">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    {/* Description bullets */}
                    <ul className="space-y-2">
                      {item.description.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-text-secondary text-sm leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
