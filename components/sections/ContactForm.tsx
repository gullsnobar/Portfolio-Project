'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Loader2, Mail, Linkedin, Github, Zap } from 'lucide-react'
import { contactSchema, type ContactInput } from '@/lib/validations'
import { SectionHeader, AnimatedSection } from '@/components/shared/AnimatedText'
import { personalInfo } from '@/lib/data'
import { cn } from '@/lib/utils'
import Link from 'next/link'

type Status = 'idle' | 'loading' | 'success' | 'error'

const contactLinks = [
  {
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
    label: 'Email',
    value: personalInfo.email,
  },
  {
    href: personalInfo.linkedin,
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/gullsanobar',
    external: true,
  },
  {
    href: personalInfo.github,
    icon: Github,
    label: 'GitHub',
    value: 'github.com/gullsnobar',
    external: true,
  },
]

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
    'w-full px-4 py-3 rounded-xl bg-background border border-border text-text-primary text-sm',
    'placeholder:text-text-secondary/50',
    'focus:outline-none focus:ring-2 focus:ring-text-primary/20 focus:border-text-primary',
    'transition-all duration-200'
  )

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Available chip */}
        <AnimatedSection className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary text-text-secondary text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-text-primary animate-pulse" />
            Available for new projects &amp; roles
          </div>
        </AnimatedSection>

        <SectionHeader
          tag="Contact"
          title="Let's build something."
          subtitle="Have a project in mind or want to connect? Send me a message — I typically reply within 24 hours."
          className="mb-12"
        />

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <AnimatedSection className="lg:col-span-2 space-y-5" delay={0.1}>
            <div>
              <h3 className="font-display font-semibold text-text-primary mb-2">Get in touch</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                I&apos;m open to frontend, full-stack, and innovative web development opportunities.
                Whether it&apos;s a full-time role, freelance project, or just a conversation — reach out.
              </p>
            </div>

            <div className="space-y-3">
              {contactLinks.map(({ href, icon: Icon, label, value, external }) => (
                <Link
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 p-4 rounded-2xl card group hover:-translate-y-0.5"
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 bg-secondary border border-border text-text-primary group-hover:bg-text-primary group-hover:text-background transition-all duration-200">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-text-secondary uppercase tracking-widest font-medium">{label}</p>
                    <p className="text-text-primary text-sm font-medium group-hover:text-text-secondary transition-colors">
                      {value}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Response time note */}
            <div className="flex items-center gap-2 text-xs text-text-secondary">
              <Zap className="w-3.5 h-3.5 text-text-primary" />
              Typically responds within 24 hours
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection className="lg:col-span-3" delay={0.2}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card p-6 sm:p-8 rounded-2xl space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-medium text-text-secondary mb-2 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="John Doe"
                    className={cn(inputClass, errors.name && 'border-red-400/60 focus:ring-red-400/30')}
                    {...register('name')}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-medium text-text-secondary mb-2 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="john@example.com"
                    className={cn(inputClass, errors.email && 'border-red-400/60 focus:ring-red-400/30')}
                    {...register('email')}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-medium text-text-secondary mb-2 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={6}
                  placeholder="Tell me about your project or opportunity..."
                  className={cn(inputClass, 'resize-none', errors.message && 'border-red-400/60 focus:ring-red-400/30')}
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
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-secondary border border-border text-text-primary"
                  >
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <p className="text-sm font-medium">Message sent! I&apos;ll get back to you soon.</p>
                  </motion.div>
                ) : status === 'error' ? (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500"
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
                      'bg-text-primary text-background font-semibold text-sm',
                      'transition-all duration-200 hover:opacity-85 hover:shadow-lg hover:scale-[1.01]',
                      'disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100'
                    )}
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
