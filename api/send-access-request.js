// api/send-access-request.js
// -----------------------------------
// Serverless function to send access request form data to Camille's Joytir Yoga email.
//
// To use: Deploy this file as an API route (e.g. /api/send-access-request) on Vercel, Netlify, or similar.
// Requires environment variables for SMTP credentials:
//   - EMAIL_HOST
//   - EMAIL_PORT
//   - EMAIL_USER
//   - EMAIL_PASS
//   - EMAIL_TO (recipient, e.g. camille@joytir-yoga.com)

const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { name, email, phone, experience, reason } = req.body;
  if (!name || !email || !phone || !experience || !reason) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_PORT == 465, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  try {
    await transporter.sendMail({
      from: `Joytir Yoga <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: 'New Access Request from Joytir Yoga',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nExperience: ${experience}\nReason: ${reason}`,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Phone:</b> ${phone}</p><p><b>Experience:</b> ${experience}</p><p><b>Reason:</b> ${reason}</p>`
    });
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to send email.' });
  }
}

// To use: POST to /api/send-access-request with JSON body { name, email, phone, experience, reason }
// On the frontend, call on form submit.
