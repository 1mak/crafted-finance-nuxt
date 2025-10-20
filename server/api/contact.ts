interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  solutionType: string
  loanAmount?: string
  message: string
}

export default defineEventHandler(async (event) => {
  try {
    // Only allow POST requests
    assertMethod(event, 'POST')

    // Parse the request body
    const body = await readBody<ContactFormData>(event)

    // Validate required fields
    if (!body.firstName || !body.lastName || !body.email || !body.phone || !body.solutionType) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing required fields'
      })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid email format'
      })
    }

    // Get environment variables
    const config = useRuntimeConfig()

    if (!config.resendApiKey) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Email configuration missing - Resend API key not found'
      })
    }

    // Email content for business
    const businessEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission - Crafted Finance</title>
        </head>
        <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f8fafc;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; box-shadow: 0 10px 25px rgba(0,0,0,0.1);">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); padding: 30px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 600;">New Contact Form Submission</h1>
              <p style="color: #94a3b8; margin: 10px 0 0 0; font-size: 14px;">Crafted Finance - Finance Solutions</p>
            </div>
            
            <!-- Content -->
            <div style="padding: 30px;">
              <!-- Client Information -->
              <div style="background-color: #f1f5f9; border-left: 4px solid #3b82f6; padding: 20px; margin-bottom: 25px; border-radius: 0 8px 8px 0;">
                <h2 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">📋 Client Information</h2>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; font-weight: 600; color: #475569; width: 120px;">Name:</td>
                    <td style="padding: 8px 0; color: #1e293b;">${body.firstName} ${body.lastName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: 600; color: #475569;">Email:</td>
                    <td style="padding: 8px 0;"><a href="mailto:${body.email}" style="color: #3b82f6; text-decoration: none;">${body.email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: 600; color: #475569;">Phone:</td>
                    <td style="padding: 8px 0;"><a href="tel:${body.phone}" style="color: #3b82f6; text-decoration: none;">${body.phone}</a></td>
                  </tr>
                </table>
              </div>

              <!-- Finance Details -->
              <div style="background-color: #f0f9ff; border-left: 4px solid #0ea5e9; padding: 20px; margin-bottom: 25px; border-radius: 0 8px 8px 0;">
                <h2 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">💰 Finance Requirements</h2>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; font-weight: 600; color: #475569; width: 120px;">Solution Type:</td>
                    <td style="padding: 8px 0; color: #1e293b;"><span style="background-color: #3b82f6; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 600;">${body.solutionType}</span></td>
                  </tr>
                  ${body.loanAmount ? `
                  <tr>
                    <td style="padding: 8px 0; font-weight: 600; color: #475569;">Loan Amount:</td>
                    <td style="padding: 8px 0; color: #1e293b;">${body.loanAmount}</td>
                  </tr>
                  ` : ''}
                </table>
              </div>

              <!-- Message -->
              ${body.message ? `
              <div style="background-color: #fef3f2; border-left: 4px solid #ef4444; padding: 20px; margin-bottom: 25px; border-radius: 0 8px 8px 0;">
                <h2 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">💬 Client Message</h2>
                <p style="color: #374151; margin: 0; line-height: 1.6; white-space: pre-wrap;">${body.message}</p>
              </div>
              ` : ''}

              <!-- Next Steps -->
              <div style="background-color: #f0fdf4; border: 1px solid #22c55e; padding: 20px; border-radius: 8px; margin-top: 25px;">
                <h3 style="color: #15803d; margin: 0 0 10px 0; font-size: 16px;">✅ Next Steps</h3>
                <ul style="color: #166534; margin: 0; padding-left: 20px;">
                  <li>Contact the client within 2 hours during business hours</li>
                  <li>Assess their ${body.solutionType.toLowerCase()} finance requirements</li>
                  <li>Prepare initial loan options and documentation</li>
                  <li>Schedule follow-up consultation if needed</li>
                </ul>
              </div>
            </div>

            <!-- Footer -->
            <div style="background-color: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="color: #64748b; margin: 0; font-size: 12px;">
                This email was generated automatically from the Crafted Finance contact form<br>
                Submitted on ${new Date().toLocaleString('en-AU', {
      timeZone: 'Australia/Brisbane',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })} AEST
              </p>
            </div>
          </div>
        </body>
      </html>
    `

    // Customer confirmation email
    const customerEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank You - Crafted Finance</title>
        </head>
        <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f8fafc;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; box-shadow: 0 10px 25px rgba(0,0,0,0.1);">
            <!-- Header -->
            <div style="background: linear-gradient(45deg, #1e293b, #0d3574); padding: 40px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 600;">Thank You, ${body.firstName}!</h1>
              <p style="color: #93c5fd; margin: 15px 0 0 0; font-size: 16px;">Your finance enquiry has been received</p>
            </div>
            
            <!-- Content -->
            <div style="padding: 40px;">
              <div style="text-align: center; margin-bottom: 30px;">
                <div style="color: #16a34a; width: 60px; height: 60px; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; font-size: 34px;">✓</div>
                <h2 style="color: #1e293b; margin: 0; font-size: 22px;">We've Got Your Details</h2>
              </div>

              <div style="background-color: #f8fafc; border-radius: 12px; padding: 25px; margin-bottom: 30px;">
                <h3 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px;">📝 Your Enquiry Summary</h3>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Solution Type:</td>
                    <td style="padding: 8px 0; color: #1e293b;">${body.solutionType}</td>
                  </tr>
                  ${body.loanAmount ? `
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Amount Range:</td>
                    <td style="padding: 8px 0; color: #1e293b;">${body.loanAmount}</td>
                  </tr>
                  ` : ''}
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Submitted:</td>
                    <td style="padding: 8px 0; color: #1e293b;">${new Date().toLocaleDateString('en-AU')}</td>
                  </tr>
                </table>
              </div>

              <div style="background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; border-radius: 12px; padding: 25px; margin-bottom: 30px;">
                <h3 style="margin: 0 0 15px 0; font-size: 18px;">⏱️ What Happens Next?</h3>
                <div style="display: flex; align-items: center; margin-bottom: 12px;">
                  <div style="background: rgba(255,255,255,0.2); width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 12px; font-weight: bold;">1</div>
                  <span>Our expert broker will contact you within 2 hours during business hours</span>
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 12px;">
                  <div style="background: rgba(255,255,255,0.2); width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 12px; font-weight: bold;">2</div>
                  <span>We'll discuss your requirements and assess the best options</span>
                </div>
                <div style="display: flex; align-items: center;">
                  <div style="background: rgba(255,255,255,0.2); width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 12px; font-weight: bold;">3</div>
                  <span>Receive competitive finance proposals tailored to your needs</span>
                </div>
              </div>

              <div style="background-color: #fef3f2; border: 1px solid #fca5a5; border-radius: 8px; padding: 20px;">
                <h4 style="color: #dc2626; margin: 0 0 10px 0; font-size: 16px;">🚀 Need Immediate Assistance?</h4>
                <p style="color: #7f1d1d; margin: 0 0 15px 0;">If you have an urgent finance requirement, feel free to call us directly:</p>
                <div style="text-align: center;">
                  <a href="tel:0434658240" style="background-color: #dc2626; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600; display: inline-block;">📞 Call 0434 658 240</a>
                </div>
              </div>
            </div>

            <!-- Footer -->
            <div style="background-color: #1e293b; color: white; padding: 30px; text-align: center;">
              <h4 style="margin: 0 0 15px 0; color: #3b82f6;">Crafted Finance Pty Ltd</h4>
              <p style="margin: 0 0 10px 0; color: #94a3b8; font-size: 14px;">Australian Credit Licence 543046 | Credit Representative 572894</p>
              <div style="margin: 15px 0;">
                <a href="mailto:info@crafted-finance.com.au" style="color: #3b82f6; text-decoration: none; margin: 0 10px;">✉️ info@crafted-finance.com.au</a>
              </div>
              <p style="margin: 15px 0 0 0; color: #64748b; font-size: 12px;">
                This is an automated confirmation email. Please do not reply to this message.
              </p>
            </div>
          </div>
        </body>
      </html>
    `

    // Function to send email via Resend API
    const sendEmail = async (emailData: {
      from: string
      to: string[]
      subject: string
      html: string
      reply_to?: string
    }) => {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${config.resendApiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailData)
      })

      if (!response.ok) {
        const error = await response.text()
        throw new Error(`Resend API error: ${response.status} - ${error}`)
      }

      return await response.json()
    }

    // Send both emails using direct API calls
    const [businessResult, customerResult] = await Promise.all([
      // Business notification email
      sendEmail({
        from: 'Crafted Finance <noreply@crafted-finance.com.au>',
        to: [config.businessEmail || 'noreply@crafted-finance.com.au'],
        reply_to: body.email,
        subject: `🔥 New ${body.solutionType} Finance Enquiry - ${body.firstName} ${body.lastName}`,
        html: businessEmailHtml,
      }),
      // Customer confirmation email
      sendEmail({
        from: 'Crafted Finance <noreply@crafted-finance.com.au>',
        to: [body.email],
        subject: `Thank you for your ${body.solutionType} finance enquiry - Crafted Finance`,
        html: customerEmailHtml,
      })
    ])

    return {
      success: true,
      message: 'Emails sent successfully',
      businessMessageId: businessResult.id,
      customerMessageId: customerResult.id
    }

  } catch (error) {
    console.error('Contact form error:', error)

    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'Failed to send email'
    })
  }
})