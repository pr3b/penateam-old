const braintree = require('braintree');

export default async function checkout (req, res) {
  const gatewayInstance = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,
    merchantId: 'yrkkbmyx4t6xchxm',
    publicKey: '7pq5rsbs32wvcsh6',
    privateKey: '3ad1a35f23e62bfedc9ef6df43df194c',
  });

  // Use the payment method nonce here
  const nonceFromTheClient = req.body.paymentMethodNonce;
  // Create a new transaction for $10
  const newTransaction = gatewayInstance.transaction.sale({
    amount: '10.00',
    paymentMethodNonce: nonceFromTheClient,
    options: {
      // This option requests the funds from the transaction
      // once it has been authorized successfully
      submitForSettlement: true
    }
  }, (error, result) => {
      if (result) {
        res.status(201).json({'result': 'success'})
      } else {
        res.status(500).send(error);
      }
  });
}