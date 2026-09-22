'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Loader2, Mail, Linkedin, Github, Clock, User, MessageSquare, ArrowUpRight } from 'lucide-react'
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
    'w-full pl-11 pr-4 py-3.5 rounded-xl bg-background border border-border text-text-primary text-sm',
    'placeholder:text-text-secondary/50',
    'focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent',
    'transition-all duration-300'
  )

  const textareaClass = cn(
    'w-full pl-11 pr-4 py-3.5 rounded-xl bg-background border border-border text-text-primary text-sm',
    'placeholder:text-text-secondary/50 resize-none',
    'focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent',
    'transition-all duration-300'
  )

  return (
    <section id="contact" className="pt-8 sm:pt-16 pb-24 sm:pb-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <SectionHeader
          tag="Contact"
          title="Let's start a conversation."
          subtitle="Interested in working together? I'm open to full-time roles, freelance projects, and meaningful collaborations."
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
                  className="group flex items-center gap-3.5 p-4 rounded-xl border border-border bg-surface hover:border-accent/40 hover:bg-accent/[0.03] transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-accent/10 text-accent group-hover:bg-accent/15 transition-colors">
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

            {/* Response time */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-accent/8 border border-accent/15 text-accent self-start">
              <Clock className="w-3.5 h-3.5" />
              <span className="text-xs font-semibold">Typically responds within 24 hours</span>
            </div>

            {/* Brief note */}
            <p className="text-text-secondary text-sm leading-relaxed">
              I&apos;m currently based in Lahore, Pakistan and open to both local and remote opportunities. Feel free to reach out — even if it&apos;s just to say hello.
            </p>
          </div>

          {/* Right Column: Form — 3/5 width */}
          <div className="lg:col-span-3">
            <div className="card p-6 sm:p-8 rounded-2xl">
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
                        placeholder="John Doe"
                        className={cn(inputClass, errors.name && 'border-red-400/60 focus:ring-red-400/20')}
                        {...register('name')}
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.name.message}</p>
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
                        placeholder="john@example.com"
                        className={cn(inputClass, errors.email && 'border-red-400/60 focus:ring-red-400/20')}
                        {...register('email')}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.email.message}</p>
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
                      className={cn(textareaClass, errors.message && 'border-red-400/60 focus:ring-red-400/20')}
                      {...register('message')}
                    />
                  </div>
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.message.message}</p>
                  )}
                </div>

                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="flex items-center gap-3 p-4 rounded-xl bg-accent/10 border border-accent/20 text-accent"
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
                      className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500"
                    >
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <p className="text-sm font-medium">{errorMessage}</p>
                    </motion.div>
                  ) : (
                    <motion.button
                      key="submit"
                      type="submit"
                      disabled={status === 'loading'}
                      className={cn(
                        'w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl',
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
