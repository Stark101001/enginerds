import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
const PORT = process.env.PORT || 5000;

// Basic safety check so we don't run without required configuration
const REQUIRED_ENV_VARS = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'CONTACT_TO'];
const missingVars = REQUIRED_ENV_VARS.filter((key) => !process.env[key]);

if (missingVars.length) {
  console.warn(`⚠️  Missing environment variables: ${missingVars.join(', ')}`);
  console.warn('   Update your server/.env file before deploying to production.');
}

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT ?? '465', 10),
  secure: (process.env.SMTP_SECURE ?? 'true').toLowerCase() === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

app.get('/', (_req, res) => {
  res.json({ status: 'ok', message: 'Enginerds contact API is running' });
});

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Name, email, and message are required.' });
  }

  try {
    const textBody = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || '-'}`,
      'Message:',
      message
    ].join('\n');

    const htmlBody = `
      <h2>New enquiry from ${name}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || '-'}</p>
      <p><strong>Message:</strong></p>
      <p>${(message || '').replace(/\n/g, '<br/>')}</p>
    `;

    await transporter.sendMail({
      from: `Enginerds Contact Form <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO,
      subject: `New enquiry from ${name}`,
      replyTo: email,
      text: textBody,
      html: htmlBody
    });

    res.json({ message: 'Mail sent successfully' });
  } catch (error) {
    console.error('Mail send error:', error);
    res.status(500).json({ message: 'Failed to send email, please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Contact API running on http://localhost:${PORT}`);
});
