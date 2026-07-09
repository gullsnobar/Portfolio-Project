import type { Metadata } from 'next'
import { ProjectCard } from '@/components/sections/ProjectCard'
import { SectionHeader } from '@/components/shared/AnimatedText'
import { supabase } from '@/lib/supabase'
import { featuredProjects } from '@/lib/data'
import type { Project } from '@/types'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'A full collection of projects built by Gull Snobar — full-stack web applications, APIs, and more.',
}

export const revalidate = 60 // ISR: revalidate every 60 seconds

async function getProjects(): Promise<Project[]> {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false })

    if (error || !data || data.length === 0) {
      return featuredProjects as Project[]
    }
    return data as Project[]
  } catch {
    return featuredProjects as Project[]
  }
}

export default async function ProjectsPage() {
  const projects = await getProjects()
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <div className="pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          tag="Projects"
          title="Everything I've built."
          subtitle="From backend APIs to full-stack applications — a complete view of my work."
        />

        {featured.length > 0 && (
          <>
            <h2 className="font-display font-semibold text-text-secondary text-sm uppercase tracking-widest mb-6">
              Featured
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {featured.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </>
        )}

        {rest.length > 0 && (
          <>
            <h2 className="font-display font-semibold text-text-secondary text-sm uppercase tracking-widest mb-6">
              All Projects
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
