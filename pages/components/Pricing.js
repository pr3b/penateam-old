import Image from "next/image";
import React, {useState, useEffect} from "react";
import Popular from "../../public/assets/images/icons/popular.png";
import { checkout, getProductQuantity } from "@/utils/stripe";
import Link from "next/link";

function Pricing() {
  const [productQuantity, setProductQuantity] = useState(null);

  useEffect(() => {
    async function fetchProductQuantity() {
      try {
        // const quantity = 10;
        const quantity = await getProductQuantity("prod_Nx1uVW1AZu2qKu");
        // console.log(quantity, "product quantity 1")
        setProductQuantity(quantity);
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
                  onClick={(() => {checkout(
                    {lineItems: [{price: "price_1NB7oEAEioNEOHotyEOXyMz6", quantity: 1}]}
                  )})}
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
                  {/* {productQuantity !== null ? `${productQuantity} Products left` : "Loading..."} */}
                  Only 20 spots left this month
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
                  onClick={(() => {checkout(
                    {lineItems: [{price: "price_1NB7piAEioNEOHotkmpv3g0a", quantity: 1}]}
                  )})}
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
                <p className="limited-spot">Only 10 spots left this month</p>
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
                <button 
                  className="pricing-button-yearly"
                  onClick={(() => {checkout(
                    {lineItems: [{price: "price_1NB7qbAEioNEOHotvwkIc3bh", quantity: 1}]}
                  )})}
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
                <p className="limited-spot">Only 10 spots left this month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
