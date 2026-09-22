import { cookies } from 'next/headers'

/**
 * Validates whether the incoming request is authenticated as admin.
 * Requires ADMIN_SECRET_COOKIE to be set in environment variables
 * and strictly prevents authentication bypass if unset or undefined.
 */
export function verifyAdminSession(): boolean {
  const adminSecret = process.env.ADMIN_SECRET_COOKIE
  if (!adminSecret || adminSecret.trim() === '') {
    return false
  }

  const cookieStore = cookies()
  const token = cookieStore.get('admin_token')?.value
  return Boolean(token && token === adminSecret)
}
