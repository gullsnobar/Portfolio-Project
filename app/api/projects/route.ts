import { NextRequest, NextResponse } from 'next/server'
import { projectSchema } from '@/lib/validations'
import { createServerSupabaseClient } from '@/lib/supabase'
import { verifyAdminSession } from '@/lib/auth'

export async function GET() {
  try {
    const supabase = createServerSupabaseClient()
    if (!supabase) return NextResponse.json({ projects: [] })

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
  if (!verifyAdminSession()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await req.json()
    const parsed = projectSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid data', issues: parsed.error.issues }, { status: 400 })
    }

    const supabase = createServerSupabaseClient()
    if (!supabase) return NextResponse.json({ error: 'Service not configured' }, { status: 503 })

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
