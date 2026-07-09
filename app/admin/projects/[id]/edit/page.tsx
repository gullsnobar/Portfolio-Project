'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Save, Loader2, X } from 'lucide-react'
import { cn, slugify } from '@/lib/utils'
import type { Project } from '@/types'

export default function EditProjectPage() {
  const router = useRouter()
  const params = useParams()
  const id = params.id as string

  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [techInput, setTechInput] = useState('')
  const [form, setForm] = useState({
    title: '',
    slug: '',
    description: '',
    tech_stack: [] as string[],
    image_url: '',
    live_url: '',
    repo_url: '',
    featured: false,
  })

  useEffect(() => {
    async function fetchProject() {
      try {
        const res = await fetch('/api/projects')
        const data = await res.json()
        const project = (data.projects as Project[]).find((p) => p.id === id)
        if (project) {
          setForm({
            title: project.title,
            slug: project.slug,
            description: project.description,
            tech_stack: project.tech_stack || [],
            image_url: project.image_url || '',
            live_url: project.live_url || '',
            repo_url: project.repo_url || '',
            featured: project.featured,
          })
        }
      } finally {
        setLoading(false)
      }
    }
    fetchProject()
  }, [id])

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
      ...(name === 'title' ? { slug: slugify(value) } : {}),
    }))
  }

  function addTech(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && techInput.trim()) {
      e.preventDefault()
      if (!form.tech_stack.includes(techInput.trim())) {
        setForm((prev) => ({ ...prev, tech_stack: [...prev.tech_stack, techInput.trim()] }))
      }
      setTechInput('')
    }
  }

  function removeTech(tech: string) {
    setForm((prev) => ({ ...prev, tech_stack: prev.tech_stack.filter((t) => t !== tech) }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setError('')
    try {
      const res = await fetch(`/api/projects/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to update')
      router.push('/admin')
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to update project')
    } finally {
      setSaving(false)
    }
  }

  const inputClass = cn(
    'w-full px-4 py-3 rounded-xl bg-background border border-border text-text-primary text-sm',
    'placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent',
    'transition-all duration-200'
  )

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-6 h-6 text-accent animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Link
            href="/admin"
            className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <h1 className="font-display font-bold text-text-primary text-xl">Edit Project</h1>
            <p className="text-text-secondary text-sm">{form.title}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-medium text-text-secondary mb-2">Title *</label>
              <input name="title" value={form.title} onChange={handleChange} required className={inputClass} />
            </div>
            <div>
              <label className="block text-xs font-medium text-text-secondary mb-2">Slug *</label>
              <input name="slug" value={form.slug} onChange={handleChange} required className={inputClass} />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-text-secondary mb-2">Description *</label>
            <textarea name="description" value={form.description} onChange={handleChange} required rows={4} className={cn(inputClass, 'resize-none')} />
          </div>

          <div>
            <label className="block text-xs font-medium text-text-secondary mb-2">Tech Stack (press Enter to add)</label>
            <input value={techInput} onChange={(e) => setTechInput(e.target.value)} onKeyDown={addTech} placeholder="Add technology..." className={inputClass} />
            {form.tech_stack.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {form.tech_stack.map((tech) => (
                  <span key={tech} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-accent/10 border border-accent/20 text-accent text-xs">
                    {tech}
                    <button type="button" onClick={() => removeTech(tech)}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-medium text-text-secondary mb-2">Live URL</label>
              <input name="live_url" value={form.live_url} onChange={handleChange} type="url" placeholder="https://..." className={inputClass} />
            </div>
            <div>
              <label className="block text-xs font-medium text-text-secondary mb-2">Repo URL</label>
              <input name="repo_url" value={form.repo_url} onChange={handleChange} type="url" placeholder="https://github.com/..." className={inputClass} />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-text-secondary mb-2">Image URL</label>
            <input name="image_url" value={form.image_url} onChange={handleChange} type="url" placeholder="https://..." className={inputClass} />
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-surface border border-border">
            <input id="edit-featured" name="featured" type="checkbox" checked={form.featured} onChange={handleChange} className="w-4 h-4 rounded" />
            <label htmlFor="edit-featured" className="text-text-primary text-sm cursor-pointer">Mark as featured project</label>
          </div>

          {error && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500 text-sm">{error}</div>
          )}

          <div className="flex gap-3 pt-2">
            <Link href="/admin" className="flex-1 inline-flex items-center justify-center px-4 py-3 rounded-xl border border-border text-text-secondary text-sm font-medium hover:text-text-primary transition-colors">
              Cancel
            </Link>
            <button
              type="submit"
              disabled={saving}
              className={cn('flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium bg-accent text-white hover:bg-accent/90 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed')}
            >
              {saving ? <><Loader2 className="w-4 h-4 animate-spin" /> Saving...</> : <><Save className="w-4 h-4" /> Save Changes</>}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
