import type { Metadata } from 'next'
import { About } from '@/components/sections/About'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Gull Snobar, full-stack software engineer in Lahore. Builds production web apps end-to-end with React, TypeScript, AdonisJS, PostgreSQL, and Docker. Shipped AI SaaS platforms and enterprise quote systems.',
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      <About />
    </div>
  )
}
