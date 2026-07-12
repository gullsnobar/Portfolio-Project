'use client'

import { SectionHeader, AnimatedSection } from '@/components/shared/AnimatedText'
import { experience } from '@/lib/data'
import { cn } from '@/lib/utils'
import { MapPin, Briefcase, Calendar } from 'lucide-react'

export function Experience() {
  return (
    <section id="experience" className="pt-24 sm:pt-32 pb-12 sm:pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          tag="Experience"
          title="Where I've worked."
          subtitle="A timeline of roles that shaped my technical skills and professional approach."
        />

        <div className="relative">
          {/* Vertical guide line */}
          <div className="absolute left-[1.35rem] sm:left-[1.6rem] top-2 bottom-2 w-px bg-gradient-to-b from-border via-border to-transparent" />

          <div className="space-y-6">
            {experience.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 0.08}>
                <div className="relative flex gap-5 sm:gap-8">

                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0 w-11 sm:w-12 flex items-start justify-center pt-[1.1rem]">
                    <div
                      className={cn(
                        'w-3 h-3 rounded-full border-2 transition-all duration-300',
                        item.current
                          ? 'bg-text-primary border-text-primary timeline-dot-active'
                          : 'bg-surface border-border hover:border-text-primary'
                      )}
                    />
                  </div>

                  {/* Card */}
                  <div
                    className={cn(
                      'flex-1 card p-5 sm:p-6 rounded-2xl transition-all duration-300 mb-1',
                      item.current && 'border-text-primary/20 bg-secondary/50'
                    )}
                  >
                    {/* Header row */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap mb-0.5">
                          <h3 className="font-display font-semibold text-text-primary text-base leading-tight">
                            {item.role}
                          </h3>
                          {item.current && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary border border-border text-text-secondary text-[10px] font-semibold uppercase tracking-wide">
                              <span className="w-1.5 h-1.5 rounded-full bg-text-primary animate-pulse" />
                              Now
                            </span>
                          )}
                        </div>
                        <p className="text-text-primary font-medium text-sm">{item.company}</p>
                      </div>

                      {/* Meta pills — always horizontal row */}
                      <div className="flex flex-wrap gap-1.5 text-[11px] text-text-secondary shrink-0">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary border border-border">
                          <Briefcase className="w-2.5 h-2.5" />
                          {item.type}
                        </span>
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary border border-border">
                          <Calendar className="w-2.5 h-2.5" />
                          {item.period}
                        </span>
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary border border-border">
                          <MapPin className="w-2.5 h-2.5" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    {/* Bullet points */}
                    <ul className="space-y-2">
                      {item.description.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-text-secondary text-sm leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-text-secondary/60 mt-[0.45rem] shrink-0" />
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
