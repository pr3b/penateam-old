import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { AUTH_STRING, MIDTRANS_BASE_URL, MIDTRANS_SANDBOX_URL } from '@/utils/midtrans';

export default async function handler(req, res) {
  const { orderId } = req.query;

  try {
    const response = await axios({
      method: 'GET',
      url: `${MIDTRANS_BASE_URL}/v2/invoices/${orderId}`,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Basic ${AUTH_STRING}`,
      },
    });

    const invoiceData = response.data;
    res.status(200).json(invoiceData);
  } catch (error) {
    console.error('Error retrieving invoice data:', error.response.data);
    res.status(500).json({ error: 'Unable to retrieve invoice data' });
  }
}
