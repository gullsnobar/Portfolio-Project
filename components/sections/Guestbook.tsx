'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Loader2, MessageSquare, User } from 'lucide-react'
import { guestbookSchema, type GuestbookInput } from '@/lib/validations'
import { formatDate } from '@/lib/utils'
import type { GuestbookEntry } from '@/types'
import { cn } from '@/lib/utils'

export function Guestbook() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<GuestbookInput>({
    resolver: zodResolver(guestbookSchema),
  })

  useEffect(() => {
    fetchEntries()
  }, [])

  async function fetchEntries() {
    try {
      const res = await fetch('/api/guestbook')
      const data = await res.json()
      setEntries(data.entries || [])
    } catch {
      setEntries([])
    } finally {
      setLoading(false)
    }
  }

  const onSubmit = async (data: GuestbookInput) => {
    setSubmitting(true)
    try {
      const res = await fetch('/api/guestbook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Failed to post')
      setSubmitted(true)
      reset()
      fetchEntries()
    } catch {
      // silently fail — user can retry
    } finally {
      setSubmitting(false)
    }
  }

  const inputClass = cn(
    'w-full px-4 py-3 rounded-xl bg-background border border-border text-text-primary text-sm',
    'placeholder:text-text-secondary/50',
    'focus:outline-none focus:ring-2 focus:ring-text-primary/20 focus:border-text-primary',
    'transition-all duration-200'
  )

  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border text-text-secondary text-xs font-medium tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-text-primary animate-pulse" />
            Guestbook
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Leave a mark.
          </h1>
          <p className="text-text-secondary leading-relaxed">
            Sign the guestbook, say hello, drop feedback, or just leave your name.
          </p>
        </div>

        {/* Form */}
        {!submitted ? (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="p-6 rounded-2xl bg-surface border border-border space-y-4 mb-12"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="gb-name" className="block text-xs font-medium text-text-secondary mb-2">
                  Your Name
                </label>
                <input
                  id="gb-name"
                  type="text"
                  placeholder="Jane Doe"
                  className={cn(inputClass, errors.name && 'border-red-500/50')}
                  {...register('name')}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div className="sm:col-span-1" />
            </div>

            <div>
              <label htmlFor="gb-message" className="block text-xs font-medium text-text-secondary mb-2">
                Message
              </label>
              <textarea
                id="gb-message"
                rows={3}
                placeholder="Great portfolio! Keep building..."
                className={cn(inputClass, 'resize-none', errors.message && 'border-red-500/50')}
                {...register('message')}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className={cn(
                'inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium',
                'bg-text-primary text-background hover:opacity-85',
                'transition-all duration-200 hover:shadow-lg',
                'disabled:opacity-60 disabled:cursor-not-allowed'
              )}
            >
              {submitting ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Signing...</>
              ) : (
                <><Send className="w-4 h-4" /> Sign Guestbook</>
              )}
            </button>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-6 rounded-2xl bg-secondary border border-border text-center mb-12"
          >
            <p className="text-text-primary font-medium">Thanks for signing! 🎉</p>
          </motion.div>
        )}

        {/* Entries */}
        <div className="space-y-4">
          {loading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="w-6 h-6 text-text-secondary animate-spin" />
            </div>
          ) : entries.length === 0 ? (
            <div className="text-center py-16">
              <MessageSquare className="w-10 h-10 text-text-secondary/30 mx-auto mb-3" />
              <p className="text-text-secondary text-sm">No entries yet. Be the first to sign!</p>
            </div>
          ) : (
            <AnimatePresence>
              {entries.map((entry, i) => (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex gap-4 p-5 rounded-xl bg-surface border border-border hover:border-text-primary/25 transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-full bg-secondary border border-border flex items-center justify-center shrink-0">
                    <User className="w-4 h-4 text-text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <p className="font-medium text-text-primary text-sm truncate">{entry.name}</p>
                      <span className="text-xs text-text-secondary shrink-0">
                        {formatDate(entry.created_at)}
                      </span>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed">{entry.message}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>
      </div>
    </section>
  )
}
