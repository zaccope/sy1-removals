import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const CLIENT_EMAIL = process.env.CLIENT_EMAIL || 'zac@zcubed.digital'

function getResend() {
  return new Resend(process.env.RESEND_API_KEY)
}

export async function POST(request: Request) {
  try {
    const { name, email, phone, moveDate, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    const resend = getResend()
    await resend.emails.send({
      from: 'SY1 Removals <contact@zcubed.digital>',
      to: CLIENT_EMAIL,
      replyTo: email,
      subject: `New removal enquiry from ${name}`,
      html: `
        <div style="font-family: -apple-system, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #0B0B0D; color: #F2F2F4; padding: 32px;">
          <h2 style="color: #D9A846; margin: 0 0 24px 0; font-size: 20px; letter-spacing: 0.05em; text-transform: uppercase;">New Enquiry — SY1 Removals</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; color: #D9A846; font-size: 12px; vertical-align: top; width: 110px; text-transform: uppercase; letter-spacing: 0.1em;">Name</td><td style="padding: 10px 0; color: #F2F2F4; font-size: 15px;">${name}</td></tr>
            <tr><td style="padding: 10px 0; color: #D9A846; font-size: 12px; vertical-align: top; text-transform: uppercase; letter-spacing: 0.1em;">Email</td><td style="padding: 10px 0; color: #F2F2F4; font-size: 15px;">${email}</td></tr>
            ${phone ? `<tr><td style="padding: 10px 0; color: #D9A846; font-size: 12px; vertical-align: top; text-transform: uppercase; letter-spacing: 0.1em;">Phone</td><td style="padding: 10px 0; color: #F2F2F4; font-size: 15px;">${phone}</td></tr>` : ''}
            ${moveDate ? `<tr><td style="padding: 10px 0; color: #D9A846; font-size: 12px; vertical-align: top; text-transform: uppercase; letter-spacing: 0.1em;">Move Date</td><td style="padding: 10px 0; color: #F2F2F4; font-size: 15px;">${moveDate}</td></tr>` : ''}
            <tr><td style="padding: 10px 0; color: #D9A846; font-size: 12px; vertical-align: top; text-transform: uppercase; letter-spacing: 0.1em;">Details</td><td style="padding: 10px 0; color: #F2F2F4; font-size: 15px; white-space: pre-wrap; line-height: 1.6;">${message}</td></tr>
          </table>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message.' },
      { status: 500 }
    )
  }
}
