import { loadStripe } from "@stripe/stripe-js";

const stripeKey = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
const getStripe = async () => {
  let stripePromis = null;
  if(!stripePromis){
    stripePromis = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromis;
}

export async function checkout({lineItems}){
  const stripe = await getStripe();
  await stripe.redirectToCheckout({
    mode: "subscription",
    lineItems,
    successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: window.location.origin,
  })
}

async function getProductQuantity(productId) {
  try {
    const product = await stripeKey.products.retrieve(productId);
    const quantityLimit = product.metadata.quantity;
    return quantityLimit;
  } catch (error) {
    console.error('Error retrieving product quantity:', error);
    return null;
  }
}


export async function displayProductQuantity(productId) {
  const quantity = await getProductQuantity(productId);
  if (quantity) {
    // Update the UI with the quantity information
    return quantity;
  }
}
