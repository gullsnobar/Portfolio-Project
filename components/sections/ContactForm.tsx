'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { contactSchema, type ContactInput } from '@/lib/validations'
import { SectionHeader, AnimatedSection } from '@/components/shared/AnimatedText'
import { personalInfo } from '@/lib/data'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Mail, Linkedin, Github } from 'lucide-react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactInput) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Failed to send message')
      setStatus('success')
      reset()
    } catch (err: unknown) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong')
    }
  }

  const inputClass = cn(
    'w-full px-4 py-3 rounded-xl bg-surface border text-text-primary text-sm',
    'placeholder:text-text-secondary/50',
    'focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent',
    'transition-all duration-200'
  )

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          tag="Contact"
          title="Let's build something."
          subtitle="Have a project in mind or want to connect? Send me a message — I typically reply within 24 hours."
        />

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <AnimatedSection className="lg:col-span-2 space-y-6" delay={0.1}>
            <div>
              <h3 className="font-display font-semibold text-text-primary mb-2">
                Get in touch
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                I&apos;m open to frontend, full-stack, and innovative web development opportunities. 
                Whether it&apos;s a full-time role, freelance project, or just a conversation — reach out.
              </p>
            </div>

            <div className="space-y-3">
              <Link
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 p-4 rounded-xl bg-surface border border-border hover:border-accent/50 hover:bg-accent/5 transition-all duration-200 group"
              >
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary">Email</p>
                  <p className="text-text-primary text-sm font-medium">{personalInfo.email}</p>
                </div>
              </Link>

              <Link
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-surface border border-border hover:border-accent/50 hover:bg-accent/5 transition-all duration-200 group"
              >
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Linkedin className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary">LinkedIn</p>
                  <p className="text-text-primary text-sm font-medium">linkedin.com/in/gullsanobar</p>
                </div>
              </Link>

              <Link
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-surface border border-border hover:border-accent/50 hover:bg-accent/5 transition-all duration-200 group"
              >
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Github className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary">GitHub</p>
                  <p className="text-text-primary text-sm font-medium">github.com/gullsnobar</p>
                </div>
              </Link>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection className="lg:col-span-3" delay={0.2}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="p-6 sm:p-8 rounded-2xl bg-surface border border-border space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-medium text-text-secondary mb-2">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="John Doe"
                    className={cn(inputClass, errors.name && 'border-red-500/50 focus:ring-red-500/30')}
                    {...register('name')}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-medium text-text-secondary mb-2">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="john@example.com"
                    className={cn(inputClass, errors.email && 'border-red-500/50 focus:ring-red-500/30')}
                    {...register('email')}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-medium text-text-secondary mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={6}
                  placeholder="Tell me about your project or opportunity..."
                  className={cn(inputClass, 'resize-none', errors.message && 'border-red-500/50 focus:ring-red-500/30')}
                  {...register('message')}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.message.message}</p>
                )}
              </div>

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500"
                  >
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <p className="text-sm font-medium">Message sent! I&apos;ll get back to you soon.</p>
                  </motion.div>
                ) : status === 'error' ? (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500"
                  >
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <p className="text-sm">{errorMessage}</p>
                  </motion.div>
                ) : (
                  <motion.button
                    key="submit"
                    type="submit"
                    disabled={status === 'loading'}
                    className={cn(
                      'w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl',
                      'bg-accent text-white font-medium text-sm',
                      'hover:bg-accent/90 transition-all duration-200',
                      'hover:shadow-lg hover:shadow-accent/25',
                      'disabled:opacity-60 disabled:cursor-not-allowed'
                    )}
                    whileHover={{ scale: status === 'loading' ? 1 : 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                )}
              </AnimatePresence>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
