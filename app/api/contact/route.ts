import { NextRequest, NextResponse } from 'next/server'
import { contactSchema } from '@/lib/validations'
import { sendContactEmail } from '@/lib/email'
import { getSupabaseClient } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const parsed = contactSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid data', issues: parsed.error.issues },
        { status: 400 }
      )
    }

    const { name, email, message } = parsed.data

    // Store in Supabase only if configured
    try {
      const supabase = getSupabaseClient()
      if (supabase) {
        await supabase.from('messages').insert([{ name, email, message }])
      }
    } catch {
      // Supabase not configured or failed — skip silently
    }

    // Send email via Resend
    const result = await sendContactEmail({ name, email, message })

    if (!result.success) {
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
