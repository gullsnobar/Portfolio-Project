'use client'

import { AnimatedSection, SectionHeader } from '@/components/shared/AnimatedText'
import { personalInfo, education, certifications } from '@/lib/data'
import { GraduationCap, Award, CheckCircle2, Zap, Layers, Brain } from 'lucide-react'
import { cn } from '@/lib/utils'

const strengths = [
  {
    icon: Layers,
    label: 'End-to-end ownership',
    desc: 'I build features from database schema to pixel-perfect UI. No handoffs, no gaps.',
  },
  {
    icon: Zap,
    label: 'Production mindset',
    desc: 'I ship software that runs in real environments: Docker, caching, migrations, monitoring.',
  },
  {
    icon: Brain,
    label: 'AI as a tool, not a buzzword',
    desc: 'Built AI SaaS with 11 tools. Integrated OpenAI, RAG pipelines, and secure key handling.',
    highlight: true,
  },
]

export function About() {
  return (
    <section id="about" className="pt-16 sm:pt-24 pb-16 sm:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          tag="About Me"
          title="I build software that ships."
          subtitle="Full-stack engineer who turns requirements into deployed products."
        />

        <div className="space-y-10">

          {/* ── Bio ── */}
          <AnimatedSection className="max-w-3xl space-y-4" delay={0.1}>
            <p className="text-text-secondary leading-relaxed text-base sm:text-[1.05rem]">
              I&apos;m{' '}
              <span className="text-text-primary font-semibold">Gull Snobar</span>, a full-stack software engineer based in Lahore. I build production web applications end-to-end, from database design to frontend polish. I don&apos;t just write features; I own them.
            </p>
            <p className="text-text-secondary leading-relaxed text-base sm:text-[1.05rem]">
              At{' '}
              <span className="text-text-primary font-medium">Devyard</span>, I built{' '}
              <span className="text-text-primary font-medium">OmniCat</span>, an AI SaaS platform with 11 content and image tools, and a{' '}
              <span className="text-text-primary font-medium">Quote Management System</span>{' '}
              handling 3,000+ corridors with strong performance metrics. Before that, I shipped a multivendor e-commerce marketplace with real-time chat and Stripe payments, and an AI-powered healthcare app as my final-year project.
            </p>
            <p className="text-text-secondary leading-relaxed text-base sm:text-[1.05rem]">
              My stack is{' '}
              <span className="text-text-primary font-medium">React, TypeScript, AdonisJS, Node.js, PostgreSQL, and Docker</span>. I care about clean architecture, fast load times, and code that other engineers can actually read.
            </p>
            <p className="text-text-secondary leading-relaxed text-base sm:text-[1.05rem]">
              Currently open to{' '}
              <span className="text-text-primary font-medium">full-time roles</span>{' '}
              where I can build real products, ship fast, and grow alongside a strong team.
            </p>
          </AnimatedSection>

          {/* ── What I bring (3-column) ── */}
          <AnimatedSection className="grid sm:grid-cols-3 gap-4" delay={0.15}>
            {strengths.map(({ icon: Icon, label, desc, highlight }) => (
              <div
                key={label}
                className={cn(
                  'card card-accent p-5 rounded-2xl flex items-start gap-4 group',
                  highlight && 'border-accent/20 bg-accent/[0.02]'
                )}
              >
                <div className={cn(
                  'w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300',
                  highlight
                    ? 'bg-accent/10 border border-accent/20 group-hover:bg-accent/15'
                    : 'bg-text-primary/10 border border-text-primary/20 group-hover:bg-text-primary/15'
                )}>
                  <Icon className={cn('w-5 h-5', highlight ? 'text-accent' : 'text-text-primary')} />
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
                    {/* Left border accent */}
                    <div className="w-0.5 rounded-full bg-accent/40 shrink-0 self-stretch" />
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
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
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
