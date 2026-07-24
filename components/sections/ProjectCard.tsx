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

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
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
          'hover:border-text-primary/25 hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-white/5',
          'transition-all duration-300'
        )}
      >
        {/* ── Image / Placeholder Header ── */}
        <div className="relative h-44 overflow-hidden">
          {project.image_url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.image_url}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-secondary">
              {/* Large icon */}
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md bg-text-primary">
                <Code2 className="w-7 h-7 text-background" />
              </div>
              {/* Subtle index indicator */}
              <span className="text-xs text-text-secondary font-mono opacity-40">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
          )}

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            {project.featured && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-text-primary text-background">
                <Star className="w-2.5 h-2.5 fill-background" />
                Featured
              </span>
            )}
            {project.company && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-600/10 text-emerald-600 border border-emerald-600/20 backdrop-blur-md">
                🏢 Company Project
              </span>
            )}
          </div>
        </div>

        {/* ── Card Body ── */}
        <div className="flex-1 flex flex-col p-5">
          <h3 className="font-display font-semibold text-text-primary text-base mb-2 group-hover:text-text-secondary transition-colors duration-200">
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
                className="px-3 py-1 rounded-full bg-secondary border border-border text-text-secondary text-xs font-medium"
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
                  'flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold',
                  'bg-text-primary text-background',
                  'transition-all duration-200 hover:opacity-85 hover:shadow-lg hover:scale-[1.02]'
                )}
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
                  'inline-flex items-center gap-1.5 text-sm font-semibold',
                  'text-emerald-600 hover:text-emerald-500 dark:text-emerald-500 dark:hover:text-emerald-400',
                  'transition-all duration-200'
                )}
              >
                Visit Code <span aria-hidden="true">&rarr;</span>
              </Link>
            )}
            {!project.live_url && !project.repo_url && (
              <span className="text-xs text-text-secondary/60 italic font-medium">
                {project.company ? `Company Project (${project.company})` : 'Private project'}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
