import { loadStripe } from "@stripe/stripe-js";

export async function checkout({lineItems}){
  let stripePromis = null;

  const getStripe = async () => {
    if(!stripePromis){
      stripePromis = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
    }
    return stripePromis;
  }

  const stripe = await getStripe();

  await stripe.redirectToCheckout({
    mode: "subscription",
    lineItems,
    successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: window.location.origin,
  })
}