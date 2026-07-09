import type { Metadata } from 'next'
import { ContactForm } from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Gull Snobar — available for frontend, full-stack, and innovative web development opportunities.',
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactForm />
    </div>
  )
}
