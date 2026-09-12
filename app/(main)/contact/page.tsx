import type { Metadata } from 'next'
import { ContactForm } from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Gull Snobar. Available for full-stack and AI engineering roles.',
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactForm />
    </div>
  )
}
