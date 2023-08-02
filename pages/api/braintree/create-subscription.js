// pages/api/createSubscription.js

import { NextApiRequest, NextApiResponse } from 'next';
import { gateway } from 'braintree';

// Initialize Braintree gateway with your API credentials
const gatewayInstance = new gateway.BraintreeGateway({
  environment: gateway.Environment.Sandbox, // Replace with 'Production' in a live environment
  merchantId: 'yrkkbmyx4t6xchxm',
  publicKey: '7pq5rsbs32wvcsh6',
  privateKey: '3ad1a35f23e62bfedc9ef6df43df194c',
});

export default async function handler(req, res) {
  const { paymentMethodNonce, planId } = req.body;

  try {
    const result = await gatewayInstance.subscription.create({
      paymentMethodNonce,
      planId: planId, // Replace with your Braintree plan ID
    });

    if (result.success) {
      // Subscription successful
      res.status(200).json({ success: true });
    } else {
      // Subscription failed
      res.status(400).json({ error: result.message });
    }
  } catch (error) {
    console.error('Error creating subscription:', error);
    res.status(500).json({ error: 'Unable to create subscription' });
  }
}
