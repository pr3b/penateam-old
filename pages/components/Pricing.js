import Image from "next/image";
import React, {useState, useEffect} from "react";
import Popular from "../../public/assets/images/icons/popular.png";
import { checkout, displayProductQuantity } from "@/utils/stripe";
import Link from "next/link";

function Pricing() {
  const [productQuantityMonthly, setproductQuantityMonthly] = useState(null);
  const [productQuantityQuarterly, setproductQuantityQuarterly] = useState(null);
  const [productQuantityYearly, setproductQuantityYearly] = useState(null);
  const monthly = "prod_Nx1rngjF99Wgf1";
  const quarterly = "prod_Nx1t07LFmKsEaD";
  const yearly = "prod_Nx1uVW1AZu2qKu"
  const yearlyCoupon = "H2AlML2r"

  const handleClick = (idPrice, idProduct, propsCoupon) => {
    checkout({lineItems: [{price: idPrice, quantity: 1}], discounts: [{coupon: propsCoupon,}]}, idProduct);
  }

  useEffect(() => {
    async function fetchProductQuantity() {
      try {
        const quantityMonth = await displayProductQuantity(monthly);
        const quantityQuarterly = await displayProductQuantity(quarterly);
        const quantityYearly = await displayProductQuantity(yearly);
        setproductQuantityMonthly(quantityMonth)
        setproductQuantityQuarterly(quantityQuarterly)
        setproductQuantityYearly(quantityYearly);
      } catch (error) {
        console.error("Error fetching product quantity:", error);
      }
    }

    fetchProductQuantity();
  }, []);

  return (
    <div id="pricing">
      <div className="pricing-container">
        <div className="pricing-text">
          <h3>Subscription to Meet Your Needs</h3>
          <br />
          <p>
            A steady yet flexible subscription to help keep your documentation
            on track.
          </p>
        </div>
        <div className="pricing-card-container">
          <div className="pricing-card">
            <div className="pricing-title-monthly">
              <h4>Monthly</h4>
            </div>
            <div className="card-bg monthly">
              <p style={{ padding: "20px 0 10px 0" }}>
                No minimum commitment. <br />
                Pause or cancel anytime.
              </p>
              <div className="price-wrap">
                <div className="pricing-shape-monthly"></div>
                <div className="pricing-price">
                  <h3>$3,000/month</h3>
                  <p>Pause or cancel anytime</p>
                </div>
                <button 
                  className="pricing-button-monthly" 
                  onClick={() => handleClick("price_1NB7oEAEioNEOHotyEOXyMz6", monthly)}
                >Choose Plan</button>
                <Link href="http://calendly.com/cahyosubroto">
                  <h5>Book a Call</h5>
                </Link>
                <div className="pricing-divider"></div>
                <div className="pricing-feature">
                  <ul className="feature-list">
                    <h6>What&rsquo;s included:</h6>
                    <li>
                      <p>- Unlimited requests</p>
                    </li>
                    <li>
                      <p>- Unlimited brands</p>
                    </li>
                    <li>
                      <p>- Unlimited users</p>
                    </li>
                    <li>
                      <p>- Unlimited stock photos via Shutterstock</p>
                    </li>
                    <li>
                      <p>- Pause or cancel anytime</p>
                    </li>
                  </ul>
                </div>
                <p className="limited-spot">
                  {productQuantityMonthly !== null ? `Only ${productQuantityMonthly} spots left this month` : "Loading..."}
                </p>
              </div>
            </div>
          </div>
          <Image className="most-popular" src={Popular} alt="Thumbs up icon" />
          <div className="pricing-card">
            <div className="pricing-title-quarterly">
              <h4>Quarterly</h4>
            </div>
            <div className="card-bg quarterly">
              <p style={{ padding: "20px 0 10px 0" }}>
                Commit for 3 months. <br />
                Paid monthly
              </p>
              <div className="price-wrap">
                <div className="pricing-shape-quarterly"></div>
                <div className="pricing-price">
                  <h3>$2,500/month</h3>
                  <p>Pause or cancel anytime</p>
                </div>
                <button 
                  className="pricing-button-quarterly"
                  onClick={() => handleClick("price_1NB7piAEioNEOHotkmpv3g0a", quarterly)}
                >
                  Choose Plan
                </button>
                <Link href="http://calendly.com/cahyosubroto">
                  <h5>Book a Call</h5>
                </Link>
                <div className="pricing-divider"></div>
                <div className="pricing-feature">
                  <ul className="feature-list">
                    <h6>What&rsquo;s included:</h6>
                    <li>
                      <p>- Unlimited requests</p>
                    </li>
                    <li>
                      <p>- Unlimited brands</p>
                    </li>
                    <li>
                      <p>- Unlimited users</p>
                    </li>
                    <li>
                      <p>- Unlimited stock photos via Shutterstock</p>
                    </li>
                    <li>
                      <p>- Pause or cancel anytime</p>
                    </li>
                  </ul>
                </div>
                <p className="limited-spot">
                  {productQuantityQuarterly !== null ? `Only ${productQuantityQuarterly} spots left this month` : "Loading..."}
                </p>
              </div>
            </div>
          </div>

          <div className="pricing-card">
            <div className="pricing-title-yearly">
              <h4>Yearly</h4>
            </div>
            <div className="card-bg yearly">
              <p style={{ padding: "20px 0 10px 0" }}>
                Commit for 12 months. <br />
                Paid monthly
              </p>
              <div className="price-wrap">
                <div className="pricing-shape-yearly"></div>
                <div className="pricing-price">
                  <h3>$2,000/month</h3>
                  <p>Pause or cancel anytime</p>
                </div>
                {productQuantityYearly !== 0? (
                  <button 
                    className="pricing-button-yearly"
                    onClick={() => handleClick("price_1NB7qbAEioNEOHotvwkIc3bh", yearly, yearlyCoupon)}
                  >Choose Plan</button>
                ):(
                  <button 
                    className="pricing-button-yearly"
                    disabled
                  >Product Sold</button>
                )}
                <Link href="http://calendly.com/cahyosubroto">
                  <h5>Book a Call</h5>
                </Link>
                <div className="pricing-divider"></div>
                <div className="pricing-feature">
                  <ul className="feature-list">
                    <h6>What&rsquo;s included:</h6>
                    <li>
                      <p>- Unlimited requests</p>
                    </li>
                    <li>
                      <p>- Unlimited brands</p>
                    </li>
                    <li>
                      <p>- Unlimited users</p>
                    </li>
                    <li>
                      <p>- Unlimited stock photos via Shutterstock</p>
                    </li>
                    <li>
                      <p>- Pause or cancel anytime</p>
                    </li>
                  </ul>
                </div>
                <p className="limited-spot">
                  {productQuantityYearly !== null ? `Only ${productQuantityYearly} spots left this month` : "Loading..."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
