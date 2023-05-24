import { loadStripe } from "@stripe/stripe-js";

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// console.log(stripeKey, "stripe key")
const getStripe = async () => {
  let stripePromis = null;
  if(!stripePromis){
    stripePromis = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromis;
}

export async function checkout({lineItems}){
  const stripe = await getStripe();
  console.log(stripe, "stripe key 2")
  await stripe.redirectToCheckout({
    mode: "subscription",
    lineItems,
    successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: window.location.origin,
  })
}

export async function getProductQuantity(productId) {
  try {
    const product = await stripe.products.retrieve(productId);
    const quantityLimit = product.metadata.quantity;
    console.log(quantityLimit, "quantity limit")
    return quantityLimit;
  } catch (error) {
    console.error('Error retrieving product quantity:', error);
    return null;
  }
}


// export async function displayProductQuantity(productId) {
//   const quantity = await getProductQuantity(productId);
//   if (quantity) {
//     console.log('Product quantity:', quantity);
//     // Update the UI with the quantity information
//     return quantity;
//   }
// }
