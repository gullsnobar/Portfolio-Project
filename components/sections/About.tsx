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
          title="From idea to deployed product."
          subtitle="Full-Stack MERN Developer building real, scalable applications with clean architecture and AI-powered workflows."
        />

        <div className="space-y-12">
          {/* Bio */}
          <AnimatedSection className="max-w-3xl space-y-5" delay={0.1}>
            <div className="space-y-4">
              <p className="text-text-secondary leading-relaxed text-base sm:text-[1.05rem]">
                I'm Gull Snobar, a Computer Science graduate from University of Education, Lahore, specializing in full-stack development with React.js, Next.js, Node.js, Express.js, and MongoDB. I don't just write code, I architect systems, integrate third-party APIs, and ship products that work in production.
              </p>

              <p className="text-text-secondary leading-relaxed text-base sm:text-[1.05rem]">
                In the past year, I completed a software engineering internship, a 6-month MERN fellowship, built an AI-powered mobile health app as my Final Year Project, and independently shipped a multivendor e-commerce platform with real-time chat and payment integration. I also use Claude, Cursor, and GitHub Copilot daily, not as a shortcut, but as a force multiplier that lets me ship faster without sacrificing quality.
              </p>

              <p className="text-text-secondary leading-relaxed text-base sm:text-[1.05rem]">
                Currently focused on full-stack web and mobile development, system design, and building AI-integrated applications. Open to full-time roles and serious opportunities in Lahore.
              </p>
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
