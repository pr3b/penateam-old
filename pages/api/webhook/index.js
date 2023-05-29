import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const session_id = req.query.session_id;

  // Fetch the session object from Stripe
  try {
    const stripeSession = await stripe.checkout.sessions.retrieve(session_id);
    res.status(200).json(stripeSession);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch session object from Stripe' });
  }
}