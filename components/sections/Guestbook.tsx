'use client'

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Check, Loader2, MessageSquare, Send } from 'lucide-react'
import { guestbookSchema, type GuestbookInput } from '@/lib/validations'
import { formatDate } from '@/lib/utils'
import type { GuestbookEntry } from '@/types'
import { cn } from '@/lib/utils'

export function Guestbook() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

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
      const response = await fetch('/api/guestbook')
      if (!response.ok) throw new Error('Unable to load guestbook entries')
      const data = await response.json()
      setEntries(data.entries || [])
    } catch {
      setEntries([])
    } finally {
      setLoading(false)
    }
  }

  const onSubmit = async (data: GuestbookInput) => {
    setSubmitting(true)
    setSubmitError('')

    try {
      const response = await fetch('/api/guestbook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error('Your note could not be posted. Please try again.')

      setSubmitted(true)
      reset()
      await fetchEntries()
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Your note could not be posted. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const inputClass = cn(
    'w-full border border-border bg-background px-4 py-3.5 text-sm text-text-primary',
    'placeholder:text-text-secondary/55',
    'focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25',
    'transition-colors duration-200'
  )

  return (
    <section className="pb-24 pt-32 sm:pb-32 sm:pt-40">
      <div className="site-shell">
        <div className="grid gap-6 border-t border-text-primary pt-5 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-3">
            <p className="eyebrow text-text-secondary">Guestbook</p>
          </div>
          <div className="md:col-span-9">
            <h1 className="section-title max-w-[11ch]">Leave a note behind.</h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              Say hello, share a thought, or leave a little encouragement. Short and genuine is perfect.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 sm:mt-20 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow text-text-secondary">Add your message</p>
            <h2 className="mt-3 max-w-[12ch] font-display text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">
              Sign the guestbook.
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-text-secondary">
              Your name and message will appear publicly after submission.
            </p>
          </div>

          <div className="lg:col-span-8">
            {!submitted ? (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 border-t border-text-primary pt-6 sm:pt-8">
                <div className="max-w-md">
                  <label htmlFor="gb-name" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-text-secondary">
                    Your name
                  </label>
                  <input
                    id="gb-name"
                    type="text"
                    autoComplete="name"
                    placeholder="Jane Doe"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'gb-name-error' : undefined}
                    className={cn(inputClass, errors.name && 'border-red-500/60')}
                    {...register('name')}
                  />
                  {errors.name && (
                    <p id="gb-name-error" className="mt-1.5 text-xs font-medium text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="gb-message" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-text-secondary">
                    Message
                  </label>
                  <textarea
                    id="gb-message"
                    rows={4}
                    placeholder="A quick hello or a thoughtful note..."
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'gb-message-error' : undefined}
                    className={cn(inputClass, 'resize-y', errors.message && 'border-red-500/60')}
                    {...register('message')}
                  />
                  {errors.message && (
                    <p id="gb-message-error" className="mt-1.5 text-xs font-medium text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {submitError && (
                  <p role="alert" className="border-l-2 border-red-500 pl-3 text-sm text-red-500">
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="signal-mark inline-flex min-h-11 items-center justify-center gap-2 px-5 text-sm font-bold transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Posting note...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> Sign guestbook
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="border-t border-text-primary pt-6 sm:pt-8" aria-live="polite">
                <div className="flex items-start gap-4 border-l-2 border-accent pl-4">
                  <span className="signal-mark flex h-9 w-9 shrink-0 items-center justify-center">
                    <Check className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-display text-xl font-semibold">Thanks for leaving a note.</p>
                    <p className="mt-1 text-sm text-text-secondary">Your message has been added to the guestbook.</p>
                    <button type="button" onClick={() => setSubmitted(false)} className="text-link mt-3">
                      Sign again
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-20 grid gap-8 border-t border-text-primary pt-5 sm:mt-28 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-3">
            <p className="eyebrow text-text-secondary">Recent notes</p>
          </div>
          <div className="md:col-span-9">
            {loading ? (
              <div className="flex min-h-24 items-center gap-3 border-b border-border py-6 text-sm text-text-secondary" aria-live="polite">
                <Loader2 className="h-4 w-4 animate-spin" /> Loading messages...
              </div>
            ) : entries.length === 0 ? (
              <div className="flex min-h-28 items-center gap-4 border-b border-border py-6">
                <MessageSquare className="h-5 w-5 text-text-secondary" />
                <p className="text-sm text-text-secondary">No notes yet. You can be the first.</p>
              </div>
            ) : (
              <div>
                {entries.map((entry) => (
                  <article key={entry.id} className="grid gap-3 border-b border-border py-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-8">
                    <div className="min-w-0">
                      <p className="font-display font-semibold text-text-primary">{entry.name}</p>
                      <p className="mt-2 max-w-2xl break-words text-sm leading-relaxed text-text-secondary">{entry.message}</p>
                    </div>
                    <time className="font-mono text-[0.65rem] uppercase tracking-wider text-text-secondary">
                      {formatDate(entry.created_at)}
                    </time>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
