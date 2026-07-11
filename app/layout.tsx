import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Gull Snobar — Full-Stack Developer',
    template: '%s | Gull Snobar',
  },
  description:
    'Full-Stack Developer specialising in React, Next.js, Node.js & MongoDB. Building fast, scalable web applications from server to client. Based in Lahore, Pakistan.',
  keywords: [
    'Gull Snobar',
    'Full-Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'MERN Stack',
    'Lahore Pakistan',
    'Web Developer Portfolio',
  ],
  authors: [{ name: 'Gull Snobar', url: 'https://linkedin.com/in/gullsanobar' }],
  creator: 'Gull Snobar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Gull Snobar — Full-Stack Developer',
    description:
      'Full-Stack Developer specialising in React, Next.js, Node.js & MongoDB. Based in Lahore, Pakistan.',
    siteName: 'Gull Snobar Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gull Snobar — Full-Stack Developer',
    description:
      'Full-Stack Developer specialising in React, Next.js, Node.js & MongoDB. Based in Lahore, Pakistan.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
