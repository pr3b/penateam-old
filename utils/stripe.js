import { loadStripe } from "@stripe/stripe-js";

const stripePublic = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
const getStripe = async () => {
  let stripePromis = null;
  if(!stripePromis){
    stripePromis = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromis;
}

export async function checkout({lineItems}, idProduct){
  try {
    const stripe = await getStripe();
    const success = await stripe.redirectToCheckout({
      mode: "subscription",
      lineItems,
      successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: window.location.origin,
    })
    return success;
  } catch (error) {
    console.error('Error to processing checkout:', error);
    return null;
  }
}

async function getProductQuantity(productId) {
  try {
    const product = await stripePublic.products.retrieve(productId);
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

export async function soldTracker(productId, decreaseAmount) {
  try {
    const product = await stripePublic.products.retrieve(productId);
    let currentQuantity = parseInt(product.metadata.quantity);
    currentQuantity -= decreaseAmount;
    product.metadata.quantity = currentQuantity.toString();
    await stripePublic.products.update(productId, {
      metadata: product.metadata,
    });

    console.log(`Product quantity decreased by ${decreaseAmount}`);
  } catch (error) {
    console.error('Error decreasing product quantity:', error);
  }
}
