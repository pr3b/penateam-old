import braintree from "braintree-web-drop-in";

export async function getBraintreeClientToken() {
  const response = await fetch("/api/braintree/get-client-token");
  const { clientToken } = await response.json();

  return clientToken;
}

export async function getBraintreeInstance() {
  const clientToken = await getBraintreeClientToken();
  const instance = await braintree.create({
    authorization: clientToken,
    container: "#dropin-container",
    paypal: {
      flow: "vault",
    },
    card: {
      cardholderName: true
    }
  });

  return instance;
}

export async function getBraintreeNonce() {
  const instance = await getBraintreeInstance();
  const { nonce } = await instance.requestPaymentMethod();

  return nonce;
}