'use client'

import { AnimatedSection, SectionHeader } from '@/components/shared/AnimatedText'
import { personalInfo, education, certifications } from '@/lib/data'
import { GraduationCap, Award, CheckCircle2, Zap, Layers, Brain } from 'lucide-react'
import { cn } from '@/lib/utils'

const strengths = [
  {
    icon: Layers,
    label: 'System-first thinking',
    desc: 'Architecture before code, always. Plan the structure, then build it right.',
  },
  {
    icon: Zap,
    label: 'Full-stack ownership',
    desc: 'From DB schema to responsive UI, complete end-to-end delivery.',
  },
  {
    icon: Brain,
    label: 'AI-augmented workflow',
    desc: 'Claude & Cursor as daily tools to move faster with cleaner code.',
  },
]

export function About() {
  return (
    <section id="about" className="pt-16 sm:pt-24 pb-16 sm:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          tag="About Me"
          title="From idea to deployed product."
          subtitle="CS graduate and Full-Stack MERN developer building real, scalable applications."
        />

        <div className="space-y-10">

          {/* ── Bio ── */}
          <AnimatedSection className="max-w-3xl space-y-4" delay={0.1}>
            <p className="text-text-secondary leading-relaxed text-base sm:text-[1.05rem]">
              I'm{' '}
              <span className="text-text-primary font-semibold">Gull Snobar</span>, a Computer Science graduate from Lahore who builds complete web products from scratch. In my first year as a professional developer, I shipped a company-internal project management platform, built an AI-powered mobile health app for my FYP, and independently developed a full multivendor marketplace with real-time chat and payment integration.
            </p>
            <p className="text-text-secondary leading-relaxed text-base sm:text-[1.05rem]">
              I work with{' '}
              <span className="text-text-primary font-medium">React, Next.js, Node.js, Express, and MongoDB</span>. I don't just write code. I think about structure, plan the system first, then build it properly. I use Claude and Cursor as daily tools to move faster while keeping code clean and maintainable.
            </p>
            <p className="text-text-secondary leading-relaxed text-base sm:text-[1.05rem]">
              Currently open to{' '}
              <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                full-time roles in Lahore
              </span>{' '}
              where I can build real things, grow fast, and actually make a difference.
            </p>
          </AnimatedSection>

          {/* ── What I bring (3-column) ── */}
          <AnimatedSection className="grid sm:grid-cols-3 gap-4" delay={0.15}>
            {strengths.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="card card-emerald p-5 rounded-2xl flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/15 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <p className="font-semibold text-text-primary text-sm mb-1">{label}</p>
                  <p className="text-text-secondary text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </AnimatedSection>

          {/* ── Education & Certifications ── */}
          <AnimatedSection className="grid md:grid-cols-2 gap-6" delay={0.2}>

            {/* Education */}
            <div className="card p-6 rounded-2xl flex flex-col h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-secondary border border-border flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-text-primary" />
                </div>
                <h3 className="font-display font-semibold text-text-primary">Education</h3>
              </div>
              <div className="space-y-5">
                {education.map((edu, i) => (
                  <div
                    key={i}
                    className={cn('flex gap-3', i > 0 && 'pt-5 border-t border-border')}
                  >
                    {/* Emerald left border accent */}
                    <div className="w-0.5 rounded-full bg-emerald-500/40 shrink-0 self-stretch" />
                    <div>
                      <p className="text-text-primary font-medium text-sm">{edu.institution}</p>
                      <p className="text-text-secondary text-sm mt-0.5">{edu.degree}</p>
                      <p className="text-text-secondary/60 text-xs mt-1">{edu.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="card p-6 rounded-2xl flex flex-col h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-secondary border border-border flex items-center justify-center">
                  <Award className="w-4 h-4 text-text-primary" />
                </div>
                <h3 className="font-display font-semibold text-text-primary">Certifications</h3>
              </div>
              <ul className="space-y-4">
                {certifications.map((cert, i) => (
                  <li key={i} className="flex items-start gap-3 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-text-secondary text-sm">{cert}</span>
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
