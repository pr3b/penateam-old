import Stripe from 'stripe';
import { authOptions, adapterData, prismaData } from '../auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import crypto, { createHash } from "crypto";
import axios from 'axios';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  const session_id = req.query.session_id;

  // Fetch the session object from Stripe
  try {
    const stripeSession = await stripe.checkout.sessions.retrieve(session_id);
    const callbackUrl = "/";
    const provider = authOptions.provider.find((item) => item.type == "email");
    const identifier = stripeSession.customer_details.email;
    const token = (await provider.generateVerificationToken?.()) ?? randomString(32);
    const ONE_DAY_IN_SECONDS = 86400;
    const expires = new Date(Date.now() + provider.maxAge ?? ONE_DAY_IN_SECONDS  * 1000);
    const params = new URLSearchParams({callbackUrl, token, email: identifier});
    const _url = `/api/auth/callback/${provider.id}?${params}`;
    const secret = provider.secret ?? authOptions.secret;

    let user = await prismaData.user.findUnique({where: {email: identifier}});
    if(!user){
      user = await prismaData.user.create({data : {
        email: identifier,
        emailVerified: null
      }});
    }

    adapterData.createVerificationToken?.({
      identifier,
      token: await createHash(`${token}${secret}`),
      expires: expires
    })

    res.status(200).json({session: stripeSession, url: _url});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch session object from Stripe' });
  }
}
