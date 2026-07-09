'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Plus, Edit2, Trash2, ExternalLink, Github, LogOut, Code2, Loader2 } from 'lucide-react'
import type { Project } from '@/types'
import { cn } from '@/lib/utils'

export default function AdminDashboard() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [deleting, setDeleting] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    fetchProjects()
  }, [])

  async function fetchProjects() {
    try {
      const res = await fetch('/api/projects')
      const data = await res.json()
      setProjects(data.projects || [])
    } finally {
      setLoading(false)
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Delete this project? This cannot be undone.')) return
    setDeleting(id)
    try {
      await fetch(`/api/projects/${id}`, { method: 'DELETE' })
      setProjects((prev) => prev.filter((p) => p.id !== id))
    } finally {
      setDeleting(null)
    }
  }

  async function handleLogout() {
    await fetch('/api/admin/auth', { method: 'DELETE' })
    router.push('/admin/login')
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-surface px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent/20 border border-accent/30 flex items-center justify-center">
              <Code2 className="w-4 h-4 text-accent" />
            </div>
            <div>
              <h1 className="font-display font-semibold text-text-primary text-sm">Admin Dashboard</h1>
              <p className="text-text-secondary text-xs">Gull Snobar Portfolio</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border text-text-secondary hover:text-text-primary text-xs transition-colors"
            >
              <ExternalLink className="w-3 h-3" />
              View Site
            </Link>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border text-text-secondary hover:text-red-500 hover:border-red-500/50 text-xs transition-colors"
            >
              <LogOut className="w-3 h-3" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Projects section */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-display font-semibold text-text-primary text-xl">Projects</h2>
            <p className="text-text-secondary text-sm mt-0.5">{projects.length} total</p>
          </div>
          <Link
            href="/admin/projects/new"
            className={cn(
              'inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium',
              'bg-accent text-white hover:bg-accent/90',
              'transition-all duration-200 hover:shadow-lg hover:shadow-accent/25'
            )}
          >
            <Plus className="w-4 h-4" />
            Add Project
          </Link>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-24">
            <Loader2 className="w-6 h-6 text-accent animate-spin" />
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-24 rounded-2xl border border-dashed border-border">
            <p className="text-text-secondary text-sm mb-4">No projects yet.</p>
            <Link
              href="/admin/projects/new"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Add your first project
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-border hover:border-accent/30 transition-all duration-200"
              >
                {/* Featured badge */}
                <div className="shrink-0">
                  <span
                    className={cn(
                      'px-2 py-0.5 rounded-full text-xs font-medium',
                      project.featured
                        ? 'bg-accent/10 text-accent border border-accent/20'
                        : 'bg-border/50 text-text-secondary border border-border'
                    )}
                  >
                    {project.featured ? 'Featured' : 'Normal'}
                  </span>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-text-primary text-sm truncate">{project.title}</p>
                  <p className="text-text-secondary text-xs truncate mt-0.5">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.tech_stack.slice(0, 4).map((t) => (
                      <span key={t} className="px-1.5 py-0.5 rounded bg-accent/10 text-accent text-xs">
                        {t}
                      </span>
                    ))}
                    {project.tech_stack.length > 4 && (
                      <span className="text-text-secondary text-xs">+{project.tech_stack.length - 4}</span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 shrink-0">
                  {project.live_url && (
                    <Link
                      href={project.live_url}
                      target="_blank"
                      className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  )}
                  {project.repo_url && (
                    <Link
                      href={project.repo_url}
                      target="_blank"
                      className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </Link>
                  )}
                  <Link
                    href={`/admin/projects/${project.id}/edit`}
                    className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-colors"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </Link>
                  <button
                    onClick={() => handleDelete(project.id)}
                    disabled={deleting === project.id}
                    className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-text-secondary hover:text-red-500 hover:border-red-500/50 transition-colors disabled:opacity-50"
                  >
                    {deleting === project.id ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <Trash2 className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
