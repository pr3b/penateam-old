// pages/api/getClientToken.js

import { NextApiRequest, NextApiResponse } from 'next';
// import braintree from 'braintree';
// import braintree from 'braintree-web-drop-in';
const braintree = require('braintree');

// Initialize Braintree gateway with your API credentials


export default async function handler(req, res) {
  const gatewayInstance = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,
    merchantId: 'yrkkbmyx4t6xchxm',
    publicKey: '7pq5rsbs32wvcsh6',
    privateKey: '3ad1a35f23e62bfedc9ef6df43df194c',
  });
  
  try {
    const clientToken = await gatewayInstance.clientToken.generate({});
    res.status(200).json({ clientToken });
  } catch (error) {
    console.error('Error generating client token:', error);
    res.status(500).json({ error: 'Unable to generate client token' });
  }
}
