import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
console.log('RESEND_API_KEY', process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    try {
      const data = await resend.emails.send({
        from: '<nguyenhainam362@gmail.com>', // Thay bằng email đã được xác minh trong Resend
        to: 'nguyenhainam362@gmail.com', // Email của bạn
        subject: `New Contact Form Submission: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });

      return res.status(200).json({ message: 'Email sent successfully', data });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}