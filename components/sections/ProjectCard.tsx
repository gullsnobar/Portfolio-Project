'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Code2, Star } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  index?: number
}

// Gradient fallbacks when no image is available
const gradients = [
  { from: '#6366f1', to: '#8b5cf6' },
  { from: '#0ea5e9', to: '#6366f1' },
  { from: '#10b981', to: '#0ea5e9' },
  { from: '#f59e0b', to: '#ef4444' },
  { from: '#8b5cf6', to: '#ec4899' },
  { from: '#06b6d4', to: '#6366f1' },
]

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const grad = gradients[index % gradients.length]

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="group h-full"
    >
      <div
        className={cn(
          'h-full flex flex-col rounded-2xl overflow-hidden',
          'bg-surface border border-border',
          'hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10',
          'transition-all duration-300'
        )}
      >
        {/* ── Image / Gradient Header ── */}
        <div className="relative h-44 overflow-hidden">
          {project.image_url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.image_url}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-3"
              style={{ background: `linear-gradient(135deg, ${grad.from}22 0%, ${grad.to}22 100%)` }}
            >
              {/* Large icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
                style={{ background: `linear-gradient(135deg, ${grad.from}, ${grad.to})` }}
              >
                <Code2 className="w-7 h-7 text-white" />
              </div>
              {/* Decorative floating circles */}
              <div
                className="absolute top-3 right-4 w-20 h-20 rounded-full opacity-20 blur-xl"
                style={{ background: grad.from }}
              />
              <div
                className="absolute bottom-3 left-4 w-16 h-16 rounded-full opacity-15 blur-xl"
                style={{ background: grad.to }}
              />
            </div>
          )}

          {/* Featured badge */}
          {project.featured && (
            <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold text-white"
              style={{ background: `linear-gradient(135deg, ${grad.from}, ${grad.to})` }}
            >
              <Star className="w-2.5 h-2.5 fill-white" />
              Featured
            </span>
          )}
        </div>

        {/* ── Card Body ── */}
        <div className="flex-1 flex flex-col p-5">
          <h3 className="font-display font-semibold text-text-primary text-base mb-2 group-hover:text-accent transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-4">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tech_stack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md bg-secondary border border-border text-text-secondary text-[11px] font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action links */}
          <div className="flex items-center gap-2.5 mt-auto">
            {project.live_url && (
              <Link
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white',
                  'transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:scale-[1.02]'
                )}
                style={{ background: `linear-gradient(135deg, ${grad.from}, ${grad.to})` }}
              >
                <ExternalLink className="w-3 h-3" />
                Live Demo
              </Link>
            )}
            {project.repo_url && (
              <Link
                href={project.repo_url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium',
                  'border border-border bg-surface text-text-secondary',
                  'hover:border-accent/40 hover:text-accent',
                  'transition-all duration-200'
                )}
              >
                <Github className="w-3 h-3" />
                Source
              </Link>
            )}
            {!project.live_url && !project.repo_url && (
              <span className="text-xs text-text-secondary/60 italic">Private project</span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
