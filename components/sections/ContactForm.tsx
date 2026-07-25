'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Loader2, Mail, Linkedin, Github, Clock, User, MessageSquare } from 'lucide-react'
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
    primary: true,
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
    'focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500',
    'transition-all duration-300'
  )

  const textareaClass = cn(
    'w-full pl-11 pr-4 py-3.5 rounded-xl bg-background border border-border text-text-primary text-sm',
    'placeholder:text-text-secondary/50 resize-none',
    'focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500',
    'transition-all duration-300'
  )

  return (
    <section id="contact" className="pt-4 sm:pt-8 pb-24 sm:pb-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <SectionHeader
          tag="Contact Me"
          title="Let's build something."
          subtitle="Have a project in mind or want to connect? Send me a message."
          className="mb-12"
        />

        <AnimatedSection className="card p-8 sm:p-12 lg:p-16 rounded-3xl shadow-sm border border-border">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Left Column: Contact Info */}
            <div className="flex flex-col h-full space-y-10">
              <div>
                <span className="inline-block text-emerald-500 font-bold uppercase tracking-widest text-xs mb-3">
                  Let&apos;s Connect
                </span>
                <h2 className="font-display text-4xl sm:text-5xl font-bold text-text-primary mb-4 leading-tight">
                  Get in touch
                </h2>
                <p className="text-text-secondary text-base leading-relaxed max-w-md">
                  I&apos;m open to frontend, full-stack, and innovative web development opportunities.
                  Whether it&apos;s a full-time role, freelance project, or just a conversation, reach out.
                </p>
              </div>

              <div className="space-y-4 flex-grow">
                {contactLinks.map(({ href, icon: Icon, label, value, external, primary }) => (
                  <Link
                    key={label}
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className={cn(
                      "flex items-center gap-4 p-5 rounded-2xl group transition-all duration-300 border",
                      primary 
                        ? "border-emerald-500/50 bg-emerald-500/5 shadow-sm" 
                        : "border-border bg-secondary hover:border-emerald-500/50 hover:bg-emerald-500/5 hover:-translate-y-1 hover:shadow-md"
                    )}
                  >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 bg-emerald-500/10 text-emerald-500">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-text-secondary uppercase tracking-widest font-semibold mb-0.5">{label}</p>
                      <p className={cn(
                        "text-sm transition-colors",
                        primary ? "text-text-primary font-bold" : "text-text-primary font-medium group-hover:text-emerald-600"
                      )}>
                        {value}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Response time badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-emerald-500/10 text-emerald-600 self-start">
                <Clock className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">Typically responds within 24 hours</span>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="flex flex-col justify-center">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="relative group">
                    <label htmlFor="contact-name" className="block text-xs font-bold text-text-secondary mb-2 uppercase tracking-wider">
                      Your Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary/50 group-focus-within:text-emerald-500 transition-colors" />
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
                    <label htmlFor="contact-email" className="block text-xs font-bold text-text-secondary mb-2 uppercase tracking-wider">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary/50 group-focus-within:text-emerald-500 transition-colors" />
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
                  <label htmlFor="contact-message" className="block text-xs font-bold text-text-secondary mb-2 uppercase tracking-wider">
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-text-secondary/50 group-focus-within:text-emerald-500 transition-colors" />
                    <textarea
                      id="contact-message"
                      rows={6}
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
                      className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600"
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
                        'w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl',
                        'bg-emerald-500 text-white font-bold text-sm uppercase tracking-wider',
                        'transition-all duration-300 hover:bg-emerald-600 hover:shadow-[0_8px_30px_rgb(16,185,129,0.3)] hover:-translate-y-0.5',
                        'disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none'
                      )}
                      whileTap={{ scale: 0.98 }}
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
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
