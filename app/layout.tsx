import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Gull Snobar, Associate Software Engineer',
    template: '%s | Gull Snobar',
  },
  description:
    'Associate Software Engineer building full-stack applications, AI-powered tools, SaaS products, APIs, and integrations. Based in Lahore, Pakistan.',
  keywords: [
    'Gull Snobar',
    'Associate Software Engineer',
    'Full-Stack Software Engineer',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'MERN Stack',
    'AI Developer',
    'AI SaaS',
    'Prompt Engineering',
    'TypeScript Developer',
    'Lahore Pakistan',
    'Web Developer Portfolio',
  ],
  authors: [{ name: 'Gull Snobar', url: 'https://linkedin.com/in/gullsanobar' }],
  creator: 'Gull Snobar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Gull Snobar, Associate Software Engineer',
    description:
      'Associate Software Engineer building full-stack applications, AI-powered tools, SaaS products, APIs, and integrations.',
    siteName: 'Gull Snobar Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gull Snobar, Associate Software Engineer',
    description:
      'Associate Software Engineer building full-stack applications, AI-powered tools, SaaS products, APIs, and integrations.',
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
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
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
