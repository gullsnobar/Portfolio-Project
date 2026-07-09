'use client'

import { AnimatedSection, SectionHeader } from '@/components/shared/AnimatedText'
import { personalInfo, education, certifications, languages } from '@/lib/data'
import { MapPin, Mail, Linkedin, GraduationCap, Award, Globe } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const stats = [
  { label: 'Years of Experience', value: '1+' },
  { label: 'Technologies', value: '15+' },
  { label: 'Projects Shipped', value: '10+' },
  { label: 'Open to Roles', value: '∞' },
]

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
          <AnimatedSection className="lg:col-span-3 space-y-6" delay={0.1}>
            <div className="space-y-4">
              {personalInfo.bio.split('. ').reduce((acc: string[][], sentence, i, arr) => {
                const groupIndex = Math.floor(i / 2)
                if (!acc[groupIndex]) acc[groupIndex] = []
                acc[groupIndex].push(sentence + (i < arr.length - 1 ? '.' : ''))
                return acc
              }, []).map((group, i) => (
                <p
                  key={i}
                  className="text-text-secondary leading-relaxed text-base sm:text-lg"
                >
                  {group.join(' ')}
                </p>
              ))}
            </div>

            {/* Open to */}
            <div className="inline-flex items-start gap-3 p-4 rounded-xl bg-accent/5 border border-accent/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0 animate-pulse" />
              <div>
                <p className="text-xs font-medium text-accent uppercase tracking-widest mb-1">Open to</p>
                <p className="text-text-primary text-sm">{personalInfo.openTo}</p>
              </div>
            </div>

            {/* Contact links */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-surface text-text-secondary hover:text-accent hover:border-accent text-sm transition-all duration-200"
              >
                <Mail className="w-3.5 h-3.5" />
                {personalInfo.email}
              </Link>
              <Link
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-surface text-text-secondary hover:text-accent hover:border-accent text-sm transition-all duration-200"
              >
                <Linkedin className="w-3.5 h-3.5" />
                LinkedIn
              </Link>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-surface text-text-secondary text-sm">
                <MapPin className="w-3.5 h-3.5" />
                {personalInfo.location}
              </span>
            </div>
          </AnimatedSection>

          {/* Sidebar cards */}
          <AnimatedSection className="lg:col-span-2 space-y-4" delay={0.25}>
            {/* Education */}
            <div className="p-5 rounded-2xl bg-surface border border-border">
              <div className="flex items-center gap-2 mb-4">
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
            <div className="p-5 rounded-2xl bg-surface border border-border">
              <div className="flex items-center gap-2 mb-4">
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
            <div className="p-5 rounded-2xl bg-surface border border-border">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Globe className="w-4 h-4 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-text-primary text-sm">Languages</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between">
                    <span className="text-text-primary text-sm font-medium">{lang.name}</span>
                    <span className="text-xs text-text-secondary px-2 py-0.5 rounded-full bg-border/50">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Stats row */}
        <AnimatedSection className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4" delay={0.3}>
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group p-6 rounded-2xl bg-surface border border-border hover:border-accent/50 transition-all duration-300 text-center hover:bg-accent/5"
            >
              <p className="font-display text-3xl font-bold gradient-text mb-1">{stat.value}</p>
              <p className="text-text-secondary text-xs">{stat.label}</p>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  )
}
