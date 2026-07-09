import { NextRequest, NextResponse } from 'next/server'
import { projectSchema } from '@/lib/validations'
import { createServerSupabaseClient } from '@/lib/supabase'
import { cookies } from 'next/headers'

function isAdmin(): boolean {
  const cookieStore = cookies()
  const token = cookieStore.get('admin_token')?.value
  return token === process.env.ADMIN_SECRET_COOKIE
}

export async function GET() {
  try {
    const supabase = createServerSupabaseClient()
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return NextResponse.json({ projects: data || [] })
  } catch {
    return NextResponse.json({ projects: [] })
  }
}

export async function POST(req: NextRequest) {
  if (!isAdmin()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await req.json()
    const parsed = projectSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid data', issues: parsed.error.issues }, { status: 400 })
    }

    const supabase = createServerSupabaseClient()
    const { data, error } = await supabase
      .from('projects')
      .insert([parsed.data])
      .select()
      .single()

    if (error) throw error
    return NextResponse.json({ project: data }, { status: 201 })
  } catch (error) {
    console.error('Projects POST error:', error)
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 })
  }
}
