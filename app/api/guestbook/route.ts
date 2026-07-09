import { NextRequest, NextResponse } from 'next/server'
import { guestbookSchema } from '@/lib/validations'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('guestbook')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(50)

    if (error) throw error
    return NextResponse.json({ entries: data || [] })
  } catch {
    return NextResponse.json({ entries: [] })
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const parsed = guestbookSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid data', issues: parsed.error.issues },
        { status: 400 }
      )
    }

    const { name, message } = parsed.data

    const { data, error } = await supabase
      .from('guestbook')
      .insert([{ name, message }])
      .select()
      .single()

    if (error) throw error
    return NextResponse.json({ entry: data }, { status: 201 })
  } catch (error) {
    console.error('Guestbook POST error:', error)
    return NextResponse.json({ error: 'Failed to save entry' }, { status: 500 })
  }
}
