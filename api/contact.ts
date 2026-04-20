import { Resend } from 'resend';

// Vercel handles typing natively but we use generic req/res for JS if requested, though this is .ts
// Let's type it using standard Vercel payload
export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, phone, email, service, message } = req.body;

    const data = await resend.emails.send({
      from: 'Pop-A-Lock <hello@popalockalexandria.com>',
      to: ['service@popalock.com'],
      reply_to: email || 'ciara@founditmarketing.com',
      subject: `New Service Request: ${service || 'General Inquiry'}`,
      html: `
        <h2>New Request via Website</h2>
        <p><strong>Name:</strong> ${name || 'N/A'}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Email:</strong> ${email || 'N/A'}</p>
        <p><strong>Service Needed:</strong> ${service || 'N/A'}</p>
        <p><strong>Additional Details:</strong><br/> ${message || 'None provided'}</p>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error: any) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: error.message || 'Error sending email' });
  }
}
