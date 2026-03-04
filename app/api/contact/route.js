export async function POST(request) {
  try {
    const { name, company, email, message } = await request.json()

    // Validate inputs
    if (!name || !email || !message) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured')
      return Response.json(
        { error: 'Email service not configured. Please contact support.' },
        { status: 500 }
      )
    }

    // Lazy load Resend inside handler
    const { Resend } = await import('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Send email using Resend
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'Shagunchem30@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    })

    if (result.error) {
      console.error('Resend error:', result.error)
      return Response.json(
        { error: 'Failed to send email', details: result.error.message },
        { status: 500 }
      )
    }

    return Response.json(
      { success: true, message: 'Email sent successfully', id: result.data.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email error:', error)
    return Response.json(
      { error: 'Failed to send email', details: error.message },
      { status: 500 }
    )
  }
}
