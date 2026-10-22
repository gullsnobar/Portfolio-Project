import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { ProjectCard } from '@/components/sections/ProjectCard'
import { getSupabaseClient } from '@/lib/supabase'
import { featuredProjects } from '@/lib/data'
import type { Project } from '@/types'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Selected full-stack applications, AI-enabled products, APIs, and interface projects by Gull Snobar.',
}

export const revalidate = 60

async function getProjects(): Promise<Project[]> {
  try {
    const supabase = getSupabaseClient()
    if (!supabase) return featuredProjects as Project[]

    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false })

    if (error || !data || data.length === 0) return featuredProjects as Project[]
    return data as Project[]
  } catch {
    return featuredProjects as Project[]
  }
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <div className="pb-24 pt-32 sm:pb-32 sm:pt-40">
      <div className="site-shell">
        <div className="grid gap-6 border-t border-text-primary pt-5 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-3">
            <p className="eyebrow text-text-secondary">Project index</p>
          </div>
          <div className="md:col-span-9">
            <h1 className="section-title max-w-[10ch]">A growing body of work.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">
              Professional product contributions and independent builds across web applications, APIs, commerce, education, and mobile.
            </p>
            <Link href="/#projects" className="text-link mt-7">
              <ArrowLeft className="h-4 w-4" /> Back to selected work
            </Link>
          </div>
        </div>

        <div className="mt-20 grid gap-x-10 gap-y-16 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
