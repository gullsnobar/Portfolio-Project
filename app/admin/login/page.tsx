'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Lock, Loader2, Eye, EyeOff, Code2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Suspense } from 'react'

function LoginForm() {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const searchParams = useSearchParams()
  const from = searchParams.get('from') || '/admin'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      if (!res.ok) {
        setError('Incorrect password. Try again.')
        return
      }

      router.push(from)
      router.refresh()
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-accent/20 border border-accent/30 flex items-center justify-center mx-auto mb-4">
            <Code2 className="w-6 h-6 text-accent" />
          </div>
          <h1 className="font-display text-2xl font-bold text-text-primary">Admin Panel</h1>
          <p className="text-text-secondary text-sm mt-1">Enter your password to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 rounded-2xl bg-surface border border-border space-y-4">
          <div>
            <label htmlFor="admin-password" className="block text-xs font-medium text-text-secondary mb-2">
              Password
            </label>
            <div className="relative">
              <input
                id="admin-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                required
                className={cn(
                  'w-full px-4 py-3 pr-11 rounded-xl bg-background border border-border text-text-primary text-sm',
                  'placeholder:text-text-secondary/50',
                  'focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent',
                  'transition-all duration-200',
                  error && 'border-red-500/50'
                )}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary transition-colors"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
          </div>

          <button
            type="submit"
            disabled={loading || !password}
            className={cn(
              'w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium text-sm',
              'bg-accent text-white hover:bg-accent/90',
              'transition-all duration-200 hover:shadow-lg hover:shadow-accent/25',
              'disabled:opacity-60 disabled:cursor-not-allowed'
            )}
          >
            {loading ? (
              <><Loader2 className="w-4 h-4 animate-spin" /> Signing in...</>
            ) : (
              <><Lock className="w-4 h-4" /> Sign In</>
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <LoginForm />
    </Suspense>
  )
}
