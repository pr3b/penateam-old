// pages/api/createSubscription.js

import { NextApiRequest, NextApiResponse } from 'next';
// import { gateway } from 'braintree';
const gateway = require('braintree');

export default async function handler(req, res) {
  const { nonceFromTheClient, customer } = req.body;
  // Initialize Braintree gateway with your API credentials
  const gatewayInstance = new gateway.BraintreeGateway({
    environment: gateway.Environment.Sandbox, // Replace with 'Production' in a live environment
    merchantId: 'yrkkbmyx4t6xchxm',
    publicKey: '7pq5rsbs32wvcsh6',
    privateKey: '3ad1a35f23e62bfedc9ef6df43df194c',
  });

  // const createCustomerResult = await gatewayInstance.customer.create({
  //   firstName: customer.firstName,
  //   lastName: customer.lastName,
  //   email: customer.email,
  //   paymentMethodNonce,
  // });
  const createCustomerResult = await gatewayInstance.customer.create(customer)

  if (!createCustomerResult.success) {
    throw new Error('Failed to create customer');
  }

  const paymentMethodResult = await gatewayInstance.paymentMethod.create({
    customerId: createCustomerResult.customer.id,
    paymentMethodNonce: nonceFromTheClient
  })

  if(!paymentMethodResult.success) {
    throw new Error('Failed to create payment method');
  }

  try {
    const result = await gatewayInstance.subscription.create({
      paymentMethodToken: paymentMethodResult.paymentMethod.token,
      // paymentMethodNonce,
      planId: "pena-monthly-payment", // Replace with your Braintree plan ID
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
