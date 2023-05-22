import Image from "next/image";
import React from "react";
import Popular from "../../public/assets/images/icons/popular.png";

function Pricing() {
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
            <div className="card-bg">
              <p style={{ padding: "20px 0 10px 0" }}>
                No minimum commitment. <br />
                Pause or cancel anytime.
              </p>
              <div className="price-wrap">
                <div className="pricing-shape-monthly"></div>
                <div className="pricing-price">
                  <h3>$4,995/month</h3>
                  <p>Pause or cancel anytime</p>
                </div>
                <button className="pricing-button-monthly">Choose Plan</button>
                <h5>Book a Call</h5>
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
              </div>
            </div>
          </div>
          <div className="pricing-card">
            <div className="pricing-title-quarterly">
              <h4>Quarterly</h4>
            </div>
            <div className="card-bg">
              <p style={{ padding: "20px 0 10px 0" }}>
                Commit for 3 months. <br />
                Paid monthly
              </p>
              <div className="price-wrap">
                <div className="pricing-shape-quarterly"></div>
                <div className="pricing-price">
                  <h3>$4,995/month</h3>
                  <p>Pause or cancel anytime</p>
                </div>
                <button className="pricing-button-quarterly">
                  Choose Plan
                </button>
                <h5>Book a Call</h5>
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
              </div>
            </div>
          </div>
          <Image className="most-popular" src={Popular} alt="Thumbs up icon" />
          <div className="pricing-card">
            <div className="pricing-title-yearly">
              <h4>Yearly</h4>
            </div>
            <div className="card-bg">
              <p style={{ padding: "20px 0 10px 0" }}>
                Commit for 3 months. <br />
                Paid monthly
              </p>
              <div className="price-wrap">
                <div className="pricing-shape-yearly"></div>
                <div className="pricing-price">
                  <h3>$4,995/month</h3>
                  <p>Pause or cancel anytime</p>
                </div>
                <button className="pricing-button-yearly">Choose Plan</button>
                <h5>Book a Call</h5>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
