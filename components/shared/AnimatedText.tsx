'use client'

import { motion, useInView } from 'framer-motion'
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
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const directionMap = {
    up: { y: 32, x: 0 },
    down: { y: -32, x: 0 },
    left: { y: 0, x: 32 },
    right: { y: 0, x: -32 },
    none: { y: 0, x: 0 },
  }

  const initial = { opacity: 0, ...directionMap[direction] }
  const animate = isInView ? { opacity: 1, y: 0, x: 0 } : initial

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
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
    <AnimatedSection className={cn('mb-14', className)}>
      {tag && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-secondary text-text-secondary text-[11px] font-semibold tracking-widest uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-text-primary" />
          {tag}
        </div>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-text-primary leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-text-secondary text-base sm:text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  )
}
