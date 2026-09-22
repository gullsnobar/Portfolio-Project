import { Resend } from 'resend'

interface ContactEmailProps {
  name: string
  email: string
  message: string
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function sendContactEmail({ name, email, message }: ContactEmailProps) {
  // No API key configured: skip sending (dev mode or not set in Vercel env)
  if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'your_resend_api_key_here') {
    console.log('[Email - Dev mode] Contact form submission:', { name, email, message })
    return { success: true }
  }

  // Instantiate inside the function so it never runs at build time
  const resend = new Resend(process.env.RESEND_API_KEY)

  const sanitizedName = escapeHtml(name)
  const sanitizedEmail = escapeHtml(email)
  const sanitizedMessage = escapeHtml(message)

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL || 'gullsnobar07@gmail.com'],
      reply_to: email,
      subject: `New message from ${name} via Portfolio`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
          <h2 style="color: #0d9488;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${sanitizedName}</p>
          <p><strong>Email:</strong> <a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></p>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background: #f8fafc; padding: 12px; border-radius: 6px;">${sanitizedMessage}</p>
        </div>
      `,
    })

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Email send error:', error)
    return { success: false, error }
  }
}
