import { createClient } from '@supabase/supabase-js'

/**
 * Returns a Supabase client only when both env vars are present.
 * Returns null otherwise so callers can skip gracefully.
 * This avoids the "supabaseUrl is required" crash during Next.js build.
 */
export function getSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !key) return null

  return createClient(url, key)
}

/** Server-side client with service role (for admin operations) */
export function createServerSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !serviceRoleKey) return null

  return createClient(url, serviceRoleKey)
}
