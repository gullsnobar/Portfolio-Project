import { NextRequest, NextResponse } from 'next/server'
import { projectSchema } from '@/lib/validations'
import { createServerSupabaseClient } from '@/lib/supabase'
import { cookies } from 'next/headers'

function isAdmin(): boolean {
  const cookieStore = cookies()
  const token = cookieStore.get('admin_token')?.value
  return token === process.env.ADMIN_SECRET_COOKIE
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  if (!isAdmin()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await req.json()
    const parsed = projectSchema.partial().safeParse(body)

    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid data' }, { status: 400 })
    }

    const supabase = createServerSupabaseClient()
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
  if (!isAdmin()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const supabase = createServerSupabaseClient()
    const { error } = await supabase.from('projects').delete().eq('id', params.id)

    if (error) throw error
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Projects DELETE error:', error)
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 })
  }
}
