'use client'

import { AnimatedSection, SectionHeader } from '@/components/shared/AnimatedText'
import { personalInfo, education, certifications, languages } from '@/lib/data'
import { MapPin, Mail, Linkedin, GraduationCap, Award, Globe } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          tag="About Me"
          title="Passion meets precision."
          subtitle="From frontend interfaces to backend APIs — I build the full picture."
        />

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Bio */}
          <AnimatedSection className="lg:col-span-3 space-y-5" delay={0.1}>
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

            {/* Open to badge */}
            <div className="inline-flex items-start gap-3 p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0 animate-pulse" />
              <div>
                <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-1">
                  Open to
                </p>
                <p className="text-text-primary text-sm">{personalInfo.openTo}</p>
              </div>
            </div>

            {/* Contact chips */}
            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-surface text-text-secondary hover:text-accent hover:border-accent/40 text-sm transition-all duration-200 hover:scale-[1.02]"
              >
                <Mail className="w-3.5 h-3.5" />
                {personalInfo.email}
              </Link>
              <Link
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-surface text-text-secondary hover:text-accent hover:border-accent/40 text-sm transition-all duration-200 hover:scale-[1.02]"
              >
                <Linkedin className="w-3.5 h-3.5" />
                LinkedIn
              </Link>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-surface text-text-secondary text-sm">
                <MapPin className="w-3.5 h-3.5" />
                {personalInfo.location}
              </span>
            </div>
          </AnimatedSection>

          {/* Sidebar cards */}
          <AnimatedSection className="lg:col-span-2 space-y-4" delay={0.2}>
            {/* Education */}
            <div className="card p-5 rounded-2xl">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-text-primary text-sm">Education</h3>
              </div>
              <div className="space-y-3">
                {education.map((edu, i) => (
                  <div key={i} className={cn('', i > 0 && 'pt-3 border-t border-border')}>
                    <p className="text-text-primary font-medium text-sm">{edu.institution}</p>
                    <p className="text-text-secondary text-xs mt-0.5">{edu.degree}</p>
                    <p className="text-accent/80 text-xs mt-0.5">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="card p-5 rounded-2xl">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Award className="w-4 h-4 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-text-primary text-sm">Certifications</h3>
              </div>
              <ul className="space-y-2">
                {certifications.map((cert, i) => (
                  <li key={i} className="flex items-center gap-2 text-text-secondary text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages */}
            <div className="card p-5 rounded-2xl">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Globe className="w-4 h-4 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-text-primary text-sm">Languages</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between">
                    <span className="text-text-primary text-sm font-medium">{lang.name}</span>
                    <span className="text-xs text-text-secondary px-2 py-0.5 rounded-full bg-border/60">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
