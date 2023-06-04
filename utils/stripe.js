import { loadStripe } from "@stripe/stripe-js";

const stripePublic = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
const getStripe = async () => {
  let stripePromis = null;
  if(!stripePromis){
    stripePromis = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromis;
}

export async function checkout({lineItems, discounts}, idProduct){
  const stripe = await getStripe();
  if(!discounts || discounts.length === 0 || discounts[0].coupon === ""){
    await stripe.redirectToCheckout({
      mode: "subscription",
      lineItems,
      successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}&&product_id=${idProduct}`,
      cancelUrl: window.location.origin,
    })
  } else {
    const sessionId = await getCheckoutSessionCreated({lineItems, discounts}, idProduct)
    await stripe.redirectToCheckout({
    sessionId: sessionId
    })
  }
}

async function getCheckoutSessionCreated({lineItems, discounts}, idProduct){
  try {
    const session = await stripePublic.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: "subscription",
      discounts: discounts,
      success_url: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}&&product_id=${idProduct}`,
      cancel_url: window.location.origin,
    })
    return session.id;
  } catch (error) {
    console.error('Error creating checkout session:', error);
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

/**
 * 
 * This function is implementation for Promotional code, at first time used, not Discount
 */
export async function checkoutWithPromo({lineItems}, idProduct){
  const stripe = await getStripe();
  const sessionId = await getCheckoutSessionWithPromotionalCode({lineItems}, idProduct)
  await stripe.redirectToCheckout({
  sessionId: sessionId
  })
}

async function getCheckoutSessionWithPromotionalCode({lineItems}, idProduct) {
  try {
    const session = await stripePublic.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: "subscription",
      allow_promotion_codes: true,
      success_url: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}&&product_id=${idProduct}`,
      cancel_url: window.location.origin,
    })
    return session.id;
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return null;
  }
}