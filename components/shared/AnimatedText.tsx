'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { cn } from '@/lib/utils'

gsap.registerPlugin(useGSAP, ScrollTrigger)

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
  const offsets = {
    up: { y: 22, x: 0 },
    down: { y: -22, x: 0 },
    left: { y: 0, x: 22 },
    right: { y: 0, x: -22 },
    none: { y: 0, x: 0 },
  }
  const offset = offsets[direction]

  useGSAP(
    () => {
      const media = gsap.matchMedia()

      media.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from(ref.current, {
          autoAlpha: 0,
          ...offset,
          duration: 0.65,
          delay,
          ease: 'power3.out',
          clearProps: 'transform,opacity,visibility',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 88%',
            once: true,
          },
        })
      })

      return () => media.revert()
    },
    { scope: ref, dependencies: [delay, direction] }
  )

  return (
    <div
      ref={ref}
      data-gsap-reveal
      className={className}
    >
      {children}
    </div>
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
