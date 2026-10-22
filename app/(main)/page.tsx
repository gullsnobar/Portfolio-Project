import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { SelectedWork } from '@/components/sections/SelectedWork'
import { Experience } from '@/components/sections/Experience'
import { Skills } from '@/components/sections/Skills'
import { About } from '@/components/sections/About'
import { ContactForm } from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Gull Snobar — Associate Software Engineer',
  description:
    'Associate Software Engineer building full-stack applications, AI-powered tools, SaaS products, APIs, and integrations. Based in Lahore, Pakistan.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Experience />
      <Skills />
      <About />
      <ContactForm />
    </>
  )
}
