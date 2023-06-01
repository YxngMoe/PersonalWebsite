import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const formData = req.body;

    try {
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: process.env.SMTP_USERNAME,
          pass: process.env.SMTP_PASSWORD,
        },
      });

      const mailOptions = {
        from: 'sender-email@example.com',
        to: 'recipient-email@example.com',
        subject: 'New form submission',
        text: JSON.stringify(formData, null, 2),
      };

      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
      res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
      console.log('Failed to send email:', error);
      res.status(500).json({ message: 'Failed to submit form' });
    }
  } else {
    res.status(400).json({ message: 'Invalid request method' });
  }
}
