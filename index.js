const stripe = require('stripe')("sk_test_51NAPPCAEioNEOHotJaQxnzMKAYcPbvT4kAJuv7iefZm2ADz8RjHjjYeAQBsWrEMBu3uOEDyk0qFBfbBpwMwzvMh900PGlFTQLj");

async function getProductQuantity(productId) {
  try {
    const product = await stripe.products.retrieve(productId, {
      auth: process.env.STRIPE_SECRET_KEY
    });
    const quantityLimit = product.metadata.quantity;
    console.log(quantityLimit, "quantity limit");
    return quantityLimit;
  } catch (error) {
    console.error('Error retrieving product quantity:', error);
    return null;
  }
}

// Call the function with the product ID
// getProductQuantity('prod_Nx1uVW1AZu2qKu');

async function soldTracker(productId, decreaseAmount) {
  try {
    // Retrieve the product using the productId
    const product = await stripe.products.retrieve(productId);

    // Get the current quantity from the metadata
    let currentQuantity = parseInt(product.metadata.quantity);

    // Decrease the quantity by the desired amount
    currentQuantity -= decreaseAmount;

    // Update the quantity in the metadata
    product.metadata.quantity = currentQuantity.toString();

    // Update the product's metadata using the Stripe API
    await stripe.products.update(productId, {
      metadata: product.metadata,
    });

    // Log a success message
    console.log(`Product quantity decreased by ${decreaseAmount}`);
  } catch (error) {
    console.error('Error decreasing product quantity:', error);
  }
}

soldTracker("prod_Nx1rngjF99Wgf1", 1)

