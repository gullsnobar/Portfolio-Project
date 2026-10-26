'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

interface ProjectRevealProps {
  children: React.ReactNode
}

export function ProjectReveal({ children }: ProjectRevealProps) {
  const scope = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const media = gsap.matchMedia()

      media.add('(prefers-reduced-motion: no-preference)', () => {
        const visual = scope.current?.querySelector('[data-project-visual]')
        const image = scope.current?.querySelector('[data-project-image]')
        const copy = scope.current?.querySelector('[data-project-copy]')
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: scope.current,
            start: 'top 82%',
            once: true,
          },
          defaults: { ease: 'power3.out' },
        })

        if (visual) {
          timeline.from(visual, {
            autoAlpha: 0,
            clipPath: 'inset(8% 0 8% 0)',
            y: 24,
            duration: 0.75,
          })
        }
        if (image) timeline.from(image, { scale: 1.035, duration: 1 }, '<')
        if (copy) timeline.from(copy, { autoAlpha: 0, y: 18, duration: 0.6 }, '-=0.45')
      })

      return () => media.revert()
    },
    { scope }
  )

  return <div ref={scope} data-gsap-project>{children}</div>
}
