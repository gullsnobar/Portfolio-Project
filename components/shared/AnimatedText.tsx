'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = 'up',
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-48px' })
  const reduceMotion = useReducedMotion()
  const offsets = {
    up: { y: 22, x: 0 },
    down: { y: -22, x: 0 },
    left: { y: 0, x: 22 },
    right: { y: 0, x: -22 },
    none: { y: 0, x: 0 },
  }
  const offset = reduceMotion ? offsets.none : offsets[direction]
  const initial = { opacity: reduceMotion ? 1 : 0, ...offset }

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView || reduceMotion ? { opacity: 1, y: 0, x: 0 } : initial}
      transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface SectionHeaderProps {
  tag?: string
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeader({ tag, title, subtitle, className }: SectionHeaderProps) {
  return (
    <AnimatedSection className={cn('mb-12 grid gap-5 border-t border-border pt-5 md:grid-cols-12 md:gap-8', className)}>
      <div className="md:col-span-3">
        {tag && <p className="eyebrow text-text-secondary">{tag}</p>}
      </div>
      <div className="md:col-span-9">
        <h2 className="section-title max-w-[13ch]">{title}</h2>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </AnimatedSection>
  )
}
