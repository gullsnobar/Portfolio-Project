import type { Metadata } from 'next'
import { About } from '@/components/sections/About'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Gull Snobar — a full-stack developer from Lahore, Pakistan building fast, scalable web applications with React, Next.js, Node.js and MongoDB.',
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      <About />
    </div>
  )
}
