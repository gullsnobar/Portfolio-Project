import { NextRequest, NextResponse } from 'next/server'
import { projectSchema } from '@/lib/validations'
import { createServerSupabaseClient } from '@/lib/supabase'
import { verifyAdminSession } from '@/lib/auth'

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  if (!verifyAdminSession()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await req.json()
    const parsed = projectSchema.partial().safeParse(body)

    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid data' }, { status: 400 })
    }

    const supabase = createServerSupabaseClient()
    if (!supabase) return NextResponse.json({ error: 'Service not configured' }, { status: 503 })

    const { data, error } = await supabase
      .from('projects')
      .update(parsed.data)
      .eq('id', params.id)
      .select()
      .single()

    if (error) throw error
    return NextResponse.json({ project: data })
  } catch (error) {
    console.error('Projects PATCH error:', error)
    return NextResponse.json({ error: 'Failed to update project' }, { status: 500 })
  }
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  if (!verifyAdminSession()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const supabase = createServerSupabaseClient()
    if (!supabase) return NextResponse.json({ error: 'Service not configured' }, { status: 503 })

    const { error } = await supabase.from('projects').delete().eq('id', params.id)

    if (error) throw error
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Projects DELETE error:', error)
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 })
  }
}
