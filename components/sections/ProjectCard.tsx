import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Github, LockKeyhole } from 'lucide-react'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  index?: number
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const imageIsLocal = project.image_url?.startsWith('/')

  return (
    <article className="group border-t border-border pt-4">
      <div className="flex items-center justify-between gap-4">
        <p className="eyebrow text-text-secondary">{String(index + 1).padStart(2, '0')} · {project.featured ? 'Featured' : 'Project'}</p>
        {project.company && <p className="font-mono text-[0.62rem] uppercase tracking-wider text-text-secondary">{project.company}</p>}
      </div>

      <div className="relative mt-4 aspect-[16/10] overflow-hidden bg-secondary">
        {project.image_url && imageIsLocal && (
          <Image
            src={project.image_url}
            alt={`${project.title} interface preview`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
          />
        )}
        {project.image_url && !imageIsLocal && (
          // Project images from the optional CMS may be hosted on arbitrary domains.
          // eslint-disable-next-line @next/next/no-img-element
          <img src={project.image_url} alt={`${project.title} interface preview`} className="h-full w-full object-cover" />
        )}
      </div>

      <div className="py-6">
        <h2 className="font-display text-2xl font-semibold leading-tight tracking-[-0.035em] sm:text-3xl">{project.title}</h2>
        <p className="mt-4 line-clamp-4 text-sm leading-relaxed text-text-secondary sm:text-base">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2" aria-label={`${project.title} technologies`}>
          {project.tech_stack.map((tech) => (
            <li key={tech} className="font-mono text-[0.63rem] uppercase tracking-wide text-text-secondary">{tech}</li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-5">
          {project.live_url && (
            <Link href={project.live_url} target="_blank" rel="noopener noreferrer" className="text-link">
              Live project <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          )}
          {project.repo_url && (
            <Link href={project.repo_url} target="_blank" rel="noopener noreferrer" className="text-link">
              Source code <Github className="h-3.5 w-3.5" />
            </Link>
          )}
          {!project.live_url && !project.repo_url && (
            <span className="inline-flex items-center gap-2 text-xs font-medium text-text-secondary">
              <LockKeyhole className="h-3.5 w-3.5" /> Private project
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
