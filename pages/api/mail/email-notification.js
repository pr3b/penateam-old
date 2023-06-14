import { sendEmailNotification } from "../mail";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { to, from, subject, text } = req.body;

    const success = await sendEmailNotification(to, from, subject, text);

    if (success) {
      res.status(200).json({ message: 'Email sent successfully' });
    } else {
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
