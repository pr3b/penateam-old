import { getInvoiceIdsByCustomerEmail } from "@/utils/stripe";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { customerEmail } = req.body;

      // Call the getInvoiceIdsByCustomerEmail function
      const invoiceIds = await getInvoiceIdsByCustomerEmail(customerEmail);

      // Return the invoice IDs as the API response
      res.status(200).json({ invoiceIds });
    } catch (error) {
      console.error('Error retrieving invoice IDs:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
