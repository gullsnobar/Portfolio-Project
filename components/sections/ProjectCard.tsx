'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Star } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  index?: number
}

/** Extract initials from a project title */
function getInitials(title: string): string {
  return title
    .split(' ')
    .filter((w) => w.length > 2)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('')
}

/** Gradient sets for placeholder headers: subtle differentiated tints */
const GRADIENTS = [
  'from-accent/8 via-accent/3 to-transparent',
  'from-text-primary/10 via-text-primary/3 to-transparent',
  'from-accent/12 via-accent/4 to-transparent',
  'from-text-primary/6 via-text-primary/2 to-transparent',
  'from-accent/6 via-text-primary/3 to-transparent',
  'from-text-primary/8 via-accent/2 to-transparent',
]

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const gradient = GRADIENTS[index % GRADIENTS.length]

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="group h-full"
    >
      <div
        className={cn(
          'h-full flex flex-col rounded-2xl overflow-hidden relative',
          'bg-surface border border-border/60',
          'hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5',
          'transition-all duration-400 ease-out'
        )}
      >
        {/* ── Header: image or gradient placeholder ── */}
        <div className="relative h-48 overflow-hidden">
          {project.image_url ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image_url}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
            </>
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} bg-surface`}>
              {/* Subtle grid */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: 'linear-gradient(hsl(var(--text-primary) / 0.06) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--text-primary) / 0.06) 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />
              {/* Initials */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <span className="font-display text-5xl font-bold tracking-tight text-text-primary opacity-30">
                  {getInitials(project.title)}
                </span>
                <span className="text-xs text-text-secondary/40 font-mono tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </div>
          )}

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-accent text-accent-foreground shadow-md shadow-accent/20 uppercase tracking-wide">
                <Star className="w-2.5 h-2.5 fill-accent-foreground" />
                Featured
              </span>
            </div>
          )}

          {/* Company badge */}
          {project.company && (
            <div className="absolute top-3 right-3">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold bg-background/80 backdrop-blur-sm border border-border text-text-secondary">
                {project.company}
              </span>
            </div>
          )}
        </div>

        {/* ── Card Body ── */}
        <div className="flex-1 flex flex-col p-5">
          <h3 className="font-display font-semibold text-text-primary text-base mb-2 leading-snug">
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
                className="px-2.5 py-1 rounded-full bg-secondary border border-border text-text-secondary text-xs font-medium"
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
                  'bg-accent text-accent-foreground',
                  'transition-all duration-200 hover:brightness-110 hover:shadow-md hover:shadow-accent/20 hover:scale-[1.02]'
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
                  'inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border border-border bg-surface',
                  'text-text-secondary hover:text-text-primary hover:border-accent/40',
                  'transition-all duration-200'
                )}
              >
                <Github className="w-3.5 h-3.5" />
                Source
              </Link>
            )}
            {!project.live_url && !project.repo_url && (
              <span className="text-xs text-text-secondary/60 italic font-medium">
                Private project
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
