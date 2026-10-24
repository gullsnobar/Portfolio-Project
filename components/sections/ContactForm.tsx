'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Loader2, Mail, Linkedin, Github, User, MessageSquare, ArrowUpRight } from 'lucide-react'
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
    'w-full pl-11 pr-4 py-3.5 bg-background border border-border text-text-primary text-sm',
    'placeholder:text-text-secondary/50',
    'focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent',
    'transition-all duration-300'
  )

  const textareaClass = cn(
    'w-full pl-11 pr-4 py-3.5 bg-background border border-border text-text-primary text-sm',
    'placeholder:text-text-secondary/50 resize-none',
    'focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent',
    'transition-all duration-300'
  )

  return (
    <section id="contact" className="section-spacing bg-surface">
      <div className="site-shell">
        
        <SectionHeader
          tag="05 Contact"
          title="Let's build something useful."
          subtitle="I'm open to junior, associate, and full-stack software engineering opportunities in Pakistan and with remote teams."
          className="mb-12"
        />

        <AnimatedSection className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          
          {/* Left Column: Contact Info — 2/5 width */}
          <div className="lg:col-span-2 flex flex-col space-y-8">
            
            <div className="space-y-4">
              {contactLinks.map(({ href, icon: Icon, label, value, external }) => (
                <Link
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-3.5 border-t border-border py-4 transition-colors hover:border-text-primary last:border-b"
                >
                  <div className="signal-mark flex h-10 w-10 shrink-0 items-center justify-center">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] text-text-secondary uppercase tracking-widest font-semibold mb-0.5">{label}</p>
                    <p className="text-sm text-text-primary font-medium truncate">{value}</p>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-text-secondary/40 group-hover:text-accent transition-colors shrink-0" />
                </Link>
              ))}
            </div>

            {/* Brief note */}
            <p className="text-text-secondary text-sm leading-relaxed">
              I&apos;m based in Lahore, Pakistan and open to both local and remote opportunities. A clear email is the fastest way to reach me.
            </p>
          </div>

          {/* Right Column: Form — 3/5 width */}
          <div className="lg:col-span-3">
            <div className="border-t border-text-primary pt-6 sm:pt-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="relative group">
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-text-secondary mb-2 uppercase tracking-wider">
                      Your Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary/50 group-focus-within:text-accent transition-colors" />
                      <input
                        id="contact-name"
                        type="text"
                        autoComplete="name"
                        placeholder="John Doe"
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'contact-name-error' : undefined}
                        className={cn(inputClass, errors.name && 'border-red-400/60 focus:ring-red-400/20')}
                        {...register('name')}
                      />
                    </div>
                    {errors.name && (
                      <p id="contact-name-error" className="mt-1.5 text-xs text-red-500 font-medium">{errors.name.message}</p>
                    )}
                  </div>
                  <div className="relative group">
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-text-secondary mb-2 uppercase tracking-wider">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary/50 group-focus-within:text-accent transition-colors" />
                      <input
                        id="contact-email"
                        type="email"
                        autoComplete="email"
                        placeholder="john@example.com"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'contact-email-error' : undefined}
                        className={cn(inputClass, errors.email && 'border-red-400/60 focus:ring-red-400/20')}
                        {...register('email')}
                      />
                    </div>
                    {errors.email && (
                      <p id="contact-email-error" className="mt-1.5 text-xs text-red-500 font-medium">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="relative group">
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-text-secondary mb-2 uppercase tracking-wider">
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-text-secondary/50 group-focus-within:text-accent transition-colors" />
                    <textarea
                      id="contact-message"
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'contact-message-error' : undefined}
                      className={cn(textareaClass, errors.message && 'border-red-400/60 focus:ring-red-400/20')}
                      {...register('message')}
                    />
                  </div>
                  {errors.message && (
                    <p id="contact-message-error" className="mt-1.5 text-xs text-red-500 font-medium">{errors.message.message}</p>
                  )}
                </div>

                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      role="status"
                      className="flex items-center gap-3 border border-accent/30 bg-accent/10 p-4 text-accent"
                    >
                      <CheckCircle className="w-5 h-5 shrink-0" />
                      <p className="text-sm font-semibold">Message sent! I&apos;ll get back to you soon.</p>
                    </motion.div>
                  ) : status === 'error' ? (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      role="alert"
                      className="flex items-center gap-3 border border-red-500/20 bg-red-500/10 p-4 text-red-500"
                    >
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <p className="text-sm font-medium">{errorMessage}</p>
                    </motion.div>
                  ) : (
                    <motion.button
                      key="submit"
                      type="submit"
                      disabled={status === 'loading'}
                      aria-busy={status === 'loading'}
                      className={cn(
                        'inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 sm:w-auto',
                        'bg-accent text-accent-foreground font-semibold text-sm',
                        'transition-all duration-300 hover:brightness-110 hover:shadow-[0_8px_30px_hsl(var(--accent)/0.25)] hover:-translate-y-0.5',
                        'disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none'
                      )}
                      whileTap={{ scale: 0.98 }}
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-4.5 h-4.5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4.5 h-4.5" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>

        </AnimatedSection>
      </div>
    </section>
  )
}
