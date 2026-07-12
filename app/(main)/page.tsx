import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Experience } from '@/components/sections/Experience'
import { ProjectCard } from '@/components/sections/ProjectCard'
import { ContactForm } from '@/components/sections/ContactForm'
import { SectionHeader } from '@/components/shared/AnimatedText'
import { featuredProjects } from '@/lib/data'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Project } from '@/types'

export const metadata: Metadata = {
  title: 'Gull Snobar — Full-Stack Developer',
  description:
    'Full-Stack Developer specialising in React, Next.js, Node.js & MongoDB. Building fast, scalable web applications. Based in Lahore, Pakistan.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />

      {/* Projects preview */}
      <section id="projects" className="pt-12 sm:pt-16 pb-12 sm:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <SectionHeader
              tag="Projects"
              title="Things I've built."
              subtitle="A selection of projects from full-stack apps to APIs."
              className="mb-0"
            />
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 font-medium transition-colors shrink-0"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(featuredProjects as Project[]).map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  )
}
