'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Code2 } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  index?: number
}

// Generate a deterministic gradient per project
const gradients = [
  'from-indigo-500/20 via-purple-500/10 to-blue-500/20',
  'from-emerald-500/20 via-teal-500/10 to-cyan-500/20',
  'from-orange-500/20 via-amber-500/10 to-yellow-500/20',
  'from-pink-500/20 via-rose-500/10 to-red-500/20',
  'from-violet-500/20 via-purple-500/10 to-indigo-500/20',
  'from-sky-500/20 via-blue-500/10 to-indigo-500/20',
]

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const gradient = gradients[index % gradients.length]

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group h-full"
    >
      <div
        className={cn(
          'h-full flex flex-col rounded-2xl border border-border bg-surface overflow-hidden',
          'hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5',
          'transition-all duration-300'
        )}
      >
        {/* Card image / gradient header */}
        <div className={cn('relative h-40 bg-gradient-to-br', gradient, 'overflow-hidden')}>
          {project.image_url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.image_url}
              alt={project.title}
              className="w-full h-full object-cover opacity-90"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <Code2 className="w-12 h-12 text-accent/30" />
              {/* Decorative circles */}
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-accent/5" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-white/5" />
            </div>
          )}
          {project.featured && (
            <span className="absolute top-3 right-3 px-2 py-1 rounded-md bg-accent/90 text-white text-xs font-medium">
              Featured
            </span>
          )}
        </div>

        {/* Card body */}
        <div className="flex-1 flex flex-col p-5">
          <h3 className="font-display font-semibold text-text-primary text-base mb-2 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-4">
            {project.description}
          </p>

          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tech_stack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-accent/10 border border-accent/20 text-accent text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action links */}
          <div className="flex items-center gap-3 mt-auto">
            {project.live_url && (
              <Link
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium',
                  'bg-accent text-white hover:bg-accent/90',
                  'transition-all duration-200 hover:shadow-lg hover:shadow-accent/25'
                )}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Live Demo
              </Link>
            )}
            {project.repo_url && (
              <Link
                href={project.repo_url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium',
                  'border border-border bg-surface text-text-secondary',
                  'hover:border-accent hover:text-accent',
                  'transition-all duration-200'
                )}
              >
                <Github className="w-3.5 h-3.5" />
                Source
              </Link>
            )}
            {!project.live_url && !project.repo_url && (
              <span className="text-xs text-text-secondary italic">Private project</span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
