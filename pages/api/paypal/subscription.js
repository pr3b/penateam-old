import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const qs = require('qs')
const PAYPAL_API_BASE_URL = 'https://api-m.sandbox.paypal.com'; // Use the appropriate base URL for your environment
const CLIENT_ID = 'ARFeeQFeiJMReL7kH3Zzz0ZNf8zSbQ0V3cyfiULCeVM6x_TlyReA8bWKet552Wzp3JaLTtN6kCgL2aUu'; // Replace with your client ID
const SECRET = "EDVICl06G8CllzJu8hi6S9uHLd25UhMk1fibx-biuEVo4DYFEcyaWDe-Vj-NYA_grEUtpdgzvhoPaftg"; // Replace with your actual access token

const getToken = async () => {
  try {
    const response = await axios.post(`${PAYPAL_API_BASE_URL}/v1/oauth2/token`, qs.stringify({ grant_type: 'client_credentials' }), {
      headers: {
        Accept: 'application/json',
        'Accept-Language': 'en_US',
        'content-type': 'application/x-www-form-urlencoded',
      },
      auth: {
        username: CLIENT_ID,
        password: SECRET,
      },
    });

    console.log(response.data.access_token, "ACCESS_TOKEN")

    return response.data.access_token;
  } catch (error) {
    console.error('Error getting token:', error);
    throw new Error('Unable to get token');
  }
};

// Function to create subscription
async function createSubscription(productId) {
  const ACCESS_TOKEN = await getToken(); // Get access token from PayPal
  const requestData = {
    product_id: productId, // Use the passed product ID
    name: 'PENA_SUBSCRIPTION',
    description: 'Pena Subscription Plan Payment',
    status: 'ACTIVE',
    billing_cycles: [
      {
        frequency: {
          interval_unit: 'MONTH',
          interval_count: 1,
        },
        tenure_type: 'REGULAR',
        sequence: 1,
        total_cycles: 12,
        pricing_scheme: {
          fixed_price: {
            value: '10',
            currency_code: 'USD',
          }
        }
      }
    ],
    payment_preferences: {
      auto_bill_outstanding: true,
      setup_fee: {
        value: '10',
        currency_code: 'USD',
      },
      setup_fee_failure_action: 'CONTINUE',
      payment_failure_threshold: 3,
    },
    taxes: {
      percentage: '10',
      inclusive: false,
    },
  };

  try {
    const response = await axios.post(`${PAYPAL_API_BASE_URL}/v1/billing/plans`, requestData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        'PayPal-Request-Id': 'REQUEST-ID',
        Accept: 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating PayPal plan:', error.response.data.details);
    throw new Error('Unable to create PayPal plan');
  }
}

export default async function handler(req, res) {
  const ACCESS_TOKEN = await getToken(); // Get access token from PayPal
  const requestData = {
    name: 'PENA_SUBSCRIPTION',
    description: 'Pena Subscription Plan Payment',
    type: 'SERVICE',
    category: 'SOFTWARE',
    image_url: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
    // home_url: "http://localhost:3000/home",
  };

  try {
    const response = await axios.post(`${PAYPAL_API_BASE_URL}/v1/catalogs/products`, requestData, {
      headers: {
        "Content-Type": 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        'PayPal-Request-Id': 'REQUEST-ID', // Update with your actual request ID
      },
    });

    const product = response.data;
    const plan = await createSubscription(product.id); // Create subscription based on product ID
    console.log(plan, "result plan")
    res.status(200).json({ product, plan });
  } catch (error) {
    console.error('Error creating PayPal product:', error.response.data.details);
    res.status(500).json({ error: 'Unable to create PayPal product and subscription' });
  }
}
