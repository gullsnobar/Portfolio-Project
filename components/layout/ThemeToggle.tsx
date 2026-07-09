'use client'

import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return <div className="w-10 h-10 rounded-full bg-surface border border-border" />
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={cn(
        'relative w-10 h-10 rounded-full flex items-center justify-center',
        'border border-border bg-surface',
        'hover:border-accent hover:bg-accent/10',
        'transition-all duration-300 ease-in-out',
        'focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background',
        'group'
      )}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <Sun
        className={cn(
          'absolute w-4 h-4 text-text-secondary group-hover:text-accent transition-all duration-300',
          theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-0'
        )}
      />
      <Moon
        className={cn(
          'absolute w-4 h-4 text-text-secondary group-hover:text-accent transition-all duration-300',
          theme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
        )}
      />
    </button>
  )
}
