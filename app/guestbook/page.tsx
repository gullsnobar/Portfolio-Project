import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Guestbook } from '@/components/sections/Guestbook'

export const metadata: Metadata = {
  title: 'Guestbook',
  description: "Sign Gull Snobar's portfolio guestbook — leave a message, say hello, or drop feedback.",
}

export default function GuestbookPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <Guestbook />
      </main>
      <Footer />
    </>
  )
}
