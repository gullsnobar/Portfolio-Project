'use client'

import { AnimatedSection, SectionHeader } from '@/components/shared/AnimatedText'
import { personalInfo, education, certifications } from '@/lib/data'
import { GraduationCap, Award } from 'lucide-react'
import { cn } from '@/lib/utils'

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          tag="About Me"
          title="Passion meets precision."
          subtitle="From frontend interfaces to backend APIs, I build the full picture."
        />

        <div className="space-y-12">
          {/* Bio */}
          <AnimatedSection className="max-w-3xl space-y-5" delay={0.1}>
            <div className="space-y-4">
              {personalInfo.bio.split('. ').reduce((acc: string[][], sentence, i, arr) => {
                const groupIndex = Math.floor(i / 2)
                if (!acc[groupIndex]) acc[groupIndex] = []
                acc[groupIndex].push(sentence + (i < arr.length - 1 ? '.' : ''))
                return acc
              }, []).map((group, i) => (
                <p
                  key={i}
                  className="text-text-secondary leading-relaxed text-base sm:text-[1.05rem]"
                >
                  {group.join(' ')}
                </p>
              ))}
            </div>
          </AnimatedSection>

          {/* Education & Certifications horizontally */}
          <AnimatedSection className="grid md:grid-cols-2 gap-6" delay={0.2}>
            {/* Education */}
            <div className="card p-6 rounded-2xl flex flex-col h-full">
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-text-primary" />
                </div>
                <h3 className="font-display font-semibold text-text-primary text-base">Education</h3>
              </div>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <div key={i} className={cn('', i > 0 && 'pt-4 border-t border-border')}>
                    <p className="text-text-primary font-medium">{edu.institution}</p>
                    <p className="text-text-secondary text-sm mt-1">{edu.degree}</p>
                    <p className="text-text-secondary/70 text-sm mt-0.5">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="card p-6 rounded-2xl flex flex-col h-full">
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center">
                  <Award className="w-5 h-5 text-text-primary" />
                </div>
                <h3 className="font-display font-semibold text-text-primary text-base">Certifications</h3>
              </div>
              <ul className="space-y-3">
                {certifications.map((cert, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-secondary text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-text-primary shrink-0 mt-1.5" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
