import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";
import Popular from "../../public/assets/images/icons/popular.png";
import {
  checkout,
  checkoutWithPromo,
  displayProductQuantity,
} from "@/utils/stripe";

//Braintree
// import braintree from 'braintree-web-drop-in';
import { getBraintreeNonce } from "@/utils/braintree";
import DropIn from "braintree-web-drop-in-react";

import Link from "next/link";
import CouponModal from "./utils/Modal";
import LoadingComponent from "./utils/Loading";
import Check from "../../public/assets/images/icons/check.png";

//Midtrans
import { MonthlySubscribtionObject } from "@/utils/midtrans";

//Exchange realtime
import { convertUSDToIDR, convertUSDToIDRNono } from "@/utils/currencyConverter";
import { Router } from "next/router";

const LoadingPlaceholder = () => {
  return (
    <div className="flex justify-center items-center h-6">
      <span className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-gray-600"></span>
    </div>
  );
};

/**
 * Tood Next
 * - Button Choose plan show loading when clicked, it will add user experience
 */

function Pricing() {
  const router = useRouter();
  // console.log(convertUSDToIDRNono(3000), "return rate")

  // Braintree
  const [clientToken, setClientToken] = useState('');
  // console.log(clientToken, "data client token sudah ada")
  const dropInContainerReference = useRef(null);
  const [purchaseComplete, setPurchaseComplete] = useState(false);

  const [productQuantityMonthly, setproductQuantityMonthly] = useState(null);
  const [productQuantityQuarterly, setproductQuantityQuarterly] =
    useState(null);
  const [productQuantityYearly, setproductQuantityYearly] = useState(null);
  const [idPrice, setIdPrice] = useState("");
  const [idProduct, setIdProduct] = useState("");
  const [propsCoupon, setPropsCoupon] = useState("");
  const monthly = "prod_Nx1rngjF99Wgf1";
  const quarterly = "prod_Nx1t07LFmKsEaD";
  const yearly = "prod_Nx1uVW1AZu2qKu";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [choosePlanLoading, setChoosePlanLoading] = useState(null);
  const [instanceDropin, setInstanceDropIn] = useState(null);
  
  //Midtrans variable
  let id, quantity, price, name;
  // const [snapToken, setSnapToken] = useState(null)

  /**
   * Used Modal - Used for discount feature
   * @param {*} idPrice
   * @param {*} idProduct
   * @param {*} propsCoupon
   */
  const handleProductClick = (idPrice, idProduct, propsCoupon) => {
    setIdPrice(idPrice);
    setIdProduct(idProduct);
    setPropsCoupon(propsCoupon);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const openLoadingSpinner = () => {
    setIsLoading(true);
  };

  /**
   * Unused function - Simple Checkout implementation
   */
  // const handleClick = (idPrice, idProduct, propsCoupon) => {
  //   checkout(
  //     {
  //       lineItems: [{ price: idPrice, quantity: 1 }],
  //       discounts: [{ coupon: propsCoupon }],
  //     },
  //     idProduct
  //   );
  // };

  //Not used Modal
  const handleClick = (idPrice, idProduct, buttonId) => {
    setChoosePlanLoading(buttonId);
    checkoutWithPromo(
      {
        lineItems: [{ price: idPrice, quantity: 1 }],
      },
      idProduct
    );
    setTimeout(() => {
      // Perform your desired action here

      setChoosePlanLoading(null); // Set loading state back to false
    }, 3000); // Simulating a 2-second delay
  };

  //Braintree
  const handlePaymentSubmit = async (idPlan) => {
    try {
      const nonce = await getBraintreeNonce();
      const res = await fetch("/api/braintree/create-subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ paymentMethodNonce: nonce, planId: idPlan }),
      });
      if(res.ok){
        console.log("subscription success")
      } else {
        console.error("subscription failed")
      }
    } catch (error) {
      console.error("Error creating subscription:", error);
    }
  }

  const showDropIn = async () => {
    const instance = await braintree.dropin.create({
      authorization: 'sandbox_pgwcm7zx_yrkkbmyx4t6xchxm',
      container: '#test-dropin',
      // container: dropInContainer.current,
      // paypal: {
      //   flow: 'vault',
      // },
      card: {
        cardholderName: true,
      },
    });
    setInstanceDropIn(instance);
    // setPlanId(planId);
  }

  const customerCoba = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@mail.com',
  }

  const buy = async () => {
    // Send the nonce to your server
    const { nonce } = await dropInContainerReference.current.requestPaymentMethod();
    const res = await fetch('/api/braintree/subscription', {
      body: JSON.stringify({
        paymentMethodNonce: nonce,
        user_id: '1234',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const result = await res.json();
    if (result.result === 'success') {
      setPurchaseComplete(true);
    }
  };

  const handleProductClickBraintree = async () => {
    try {
      // if (!plandId) {
      //   console.error('Please select a plan');
      //   return;
      // }

      // const instance = await braintree.dropin.create({
      //   authorization: 'sandbox_pgwcm7zx_yrkkbmyx4t6xchxm',
      //   container: '#test-dropin',
      //   // container: dropInContainer.current,
      //   // paypal: {
      //   //   flow: 'vault',
      //   // },
      //   card: {
      //     cardholderName: true,
      //   },
      // });

      const { nonce } = await instanceDropin.requestPaymentMethod();

      const response = await fetch('/api/braintree/create-subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify({ paymentMethodNonce: nonce, planId: plandId }),
        body: JSON.stringify({ nonceFromTheClient: nonce, customer: customerCoba }),
      });

      if (response.ok) {
        console.log('Subscription successful');
      } else {
        console.error('Subscription failed');
      }
    } catch (error) {
      console.error('Error processing payment:', error);
    }
  };

  const handleProductClickMidtrans = async (subsObject, amount) => {
    try {
      const today = new Date();
      const yyyy = today.getFullYear();
      let mm = today.getMonth() + 1;
      let dd = today.getDate();
      let hours = today.getHours();
      let minutes = today.getMinutes();
      let seconds = today.getSeconds();

      const order_id = `ORDER_${yyyy}-${mm}-${dd}_${hours}${minutes}${seconds}`;
      const callback_success_url = `${window.location.origin}/`;

      const response = await fetch('/api/midtrans/get-snap-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({order_id, amount, redirect_url: callback_success_url, subscription: subsObject}),
      });
      const json = await response.json();
      window.location.href = json.redirect_url;

      console.log('set response', json)
    } catch (error) {
      console.error("Error fetching snap token:", error);
    }
  }

  const goToInputCustomerData = (idItem, amount, quantity, name) => {
    router.push({
      pathname: "/customer",
      query: {idItem, amount, quantity, name },
    });
  }

  useEffect(() => {
    fetch('/api/braintree/get-client-token')
      .then((response) => response.json())
      .then((data) => setClientToken(data.clientToken))
      .catch((error) => console.error('Error fetching client token:', error));
  }, []);


  useEffect(() => {
    async function fetchProductQuantity() {
      try {
        const quantityMonth = await displayProductQuantity(monthly);
        const quantityQuarterly = await displayProductQuantity(quarterly);
        const quantityYearly = await displayProductQuantity(yearly);
        setproductQuantityMonthly(quantityMonth);
        setproductQuantityQuarterly(quantityQuarterly);
        setproductQuantityYearly(quantityYearly);
      } catch (error) {
        console.error("Error fetching product quantity:", error);
      }
    }

    fetchProductQuantity();
  }, []);

  if (purchaseComplete) {
    return (
      <div>
        <h1>Completed.</h1>
      </div>
    );
  }

  return (
    <div id="pricing">
      {isLoading === true ? (
        <LoadingComponent string={"Coupon Applied"} status={"checking"} />
      ) : (
        <div className="pricing-container">
          {/* <div className="pricing-section-divider" id="test-dropin"></div> */}
          <div data-aos="fade-up">
            <div className="pricing-text">
              <h3>
                Subscription to{" "}
                <span className="gradient-span"> Meet Your Needs</span>
              </h3>
              <br />
              <p>
                Stay on Course with Our Reliable and Adaptable Subscription,
                <br />
                 Perfectly Tailored to Keep Your Documentation Journey Smooth.
              </p>
            </div>
          </div>
          <CouponModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            checkout={checkout}
            idPrice={idPrice}
            idProduct={idProduct}
            propsCoupon={propsCoupon}
            setIsLoadingState={openLoadingSpinner}
          />
          {/* <div id="test-dropin"></div>
          <button onClick={handleProductClickBraintree}>Checkout</button> */}
          {/* <div>
            <DropIn 
              options={{ authorization: "sandbox_pgwcm7zx_yrkkbmyx4t6xchxm" }}
              onInstance={(instance) => (dropInContainerReference.current = instance)}
            />
            <button onClick={handleProductClickBraintree}>Submit</button>
          </div> */}
          <div className="pricing-card-container">
            <div data-aos="fade-up">
              <div ref={dropInContainerReference}/>
              <div className="pricing-card">
                <div className="pricing-title-monthly">
                  <h4>Monthly</h4>
                  <p>
                    No minimum commitment. <br />
                    Pause or cancel anytime.
                  </p>
                </div>
                <div className="card-bg monthly">
                  <div className="pricing-price">
                    <h3>
                      <span className="pricing-price-permonth">Rp. 45.000.000</span>
                      /mo
                    </h3>
                  </div>
                  <div className="price-wrap">
                    {productQuantityMonthly !== 0 ? (
                      <button
                        type="button"
                        id="button1"
                        className="pricing-button-monthly"
                        // onClick={() => handleProductClick("price_1NB7oEAEioNEOHotyEOXyMz6", monthly, propsCoupon)}
                        onClick={() =>
                          // handleClick(
                          //   "price_1NB7oEAEioNEOHotyEOXyMz6",
                          //   monthly,
                          //   "button1"
                          // )
                          // showDropIn()
                          // handleProductClickMidtrans(MonthlySubscribtionObject, 45000000)
                          goToInputCustomerData(
                              "ITEM001",45000000,1,"Pena Monthly Subscription",
                          )
                        }
                        disabled={choosePlanLoading === "button1"}
                      >
                        {choosePlanLoading === "button1" ? (
                          <LoadingPlaceholder />
                        ) : (
                          "Choose Plan"
                        )}
                      </button>
                    ) : (
                      <button
                        style={{ color: "GrayText" }}
                        className="pricing-button-yearly"
                        disabled
                      >
                        Product Sold
                      </button>
                    )}
                    <Link href="http://calendly.com/cahyosubroto">
                      <h5 className="meeting">Schedule a meeting</h5>
                    </Link>
                    <div className="pricing-feature">
                      <ul className="feature-list">
                        <h6>What&rsquo;s included:</h6>
                        <li className="feature-check">
                          <Image
                            className="check-icon"
                            src={Check}
                            alt="Check icon"
                          />
                          <p>Unlimited requests</p>
                        </li>
                        <li className="feature-check">
                          <Image
                            className="check-icon"
                            src={Check}
                            alt="Check icon"
                          />
                          <p>Unlimited brands</p>
                        </li>
                        <li className="feature-check">
                          <Image
                            className="check-icon"
                            src={Check}
                            alt="Check icon"
                          />
                          <p>Unlimited users</p>
                        </li>
                        <li className="feature-check">
                          <Image
                            className="check-icon"
                            src={Check}
                            alt="Check icon"
                          />
                          <p>Unlimited stock photos via Shutterstock</p>
                        </li>
                        <li className="feature-check">
                          <Image
                            className="check-icon"
                            src={Check}
                            alt="Check icon"
                          />
                          <p>Pause or cancel anytime</p>
                        </li>
                      </ul>
                    </div>
                    <p className="limited-spot">
                      {productQuantityMonthly !== null ? (
                        <>
                          Only{" "}
                          <span className="gradient-span">
                            {productQuantityMonthly}
                          </span>{" "}
                          spots left this month
                        </>
                      ) : (
                        "Loading..."
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="pricing-card">
                <div className="pricing-title-quarterly">
                  <h4>Quarterly</h4>
                  <p>
                    Commit for 3 months. <br />
                    Paid monthly
                  </p>
                </div>
                <div className="card-bg quarterly">
                  <div className="pricing-price">
                    <h3>
                      <span className="pricing-price-permonth">Rp. 37.000.000.</span>
                      /mo
                    </h3>
                  </div>
                  <div className="price-wrap">
                    {productQuantityQuarterly !== 0 ? (
                      <button
                        id="button2"
                        className="pricing-button-quarterly"
                        // onClick={() => handleProductClick("price_1NB7oEAEioNEOHotyEOXyMz6", monthly, propsCoupon)}
                        onClick={() =>
                          // handleClick(
                          //   "price_1NB7piAEioNEOHotkmpv3g0a",
                          //   quarterly,
                          //   "button2"
                          // )
                          goToInputCustomerData(
                            "ITEM002",38000000,1,"Pena Querterly Subscription",
                          )
                        }
                        disabled={choosePlanLoading === "button2"}
                      >
                        {choosePlanLoading === "button2" ? (
                          <LoadingPlaceholder />
                        ) : (
                          "Choose Plan"
                        )}
                      </button>
                    ) : (
                      <button
                        style={{ color: "GrayText" }}
                        className="pricing-button-yearly"
                        disabled
                      >
                        Product Sold
                      </button>
                    )}
                    <Link href="http://calendly.com/cahyosubroto">
                      <h5 className="meeting">Schedule a meeting</h5>
                    </Link>
                    <div className="pricing-feature">
                      <ul className="feature-list">
                        <h6>What&rsquo;s included:</h6>
                        <li className="feature-check">
                          <Image
                            className="check-icon"
                            src={Check}
                            alt="Check icon"
                          />
                          <p>Unlimited requests</p>
                        </li>
                        <li className="feature-check">
                          <Image
                            className="check-icon"
                            src={Check}
                            alt="Check icon"
                          />
                          <p>Unlimited brands</p>
                        </li>
                        <li className="feature-check">
                          <Image
                            className="check-icon"
                            src={Check}
                            alt="Check icon"
                          />
                          <p>Unlimited users</p>
                        </li>
                        <li className="feature-check">
                          <Image
                            className="check-icon"
                            src={Check}
                            alt="Check icon"
                          />
                          <p>Unlimited stock photos via Shutterstock</p>
                        </li>
                        <li className="feature-check">
                          <Image
                            className="check-icon"
                            src={Check}
                            alt="Check icon"
                          />
                          <p>Pause or cancel anytime</p>
                        </li>
                      </ul>
                    </div>
                    <p className="limited-spot">
                      {productQuantityQuarterly !== null ? (
                        <>
                          Only{" "}
                          <span className="gradient-span">
                            {productQuantityQuarterly}
                          </span>{" "}
                          spots left this month
                        </>
                      ) : (
                        "Loading..."
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="pricing-card">
                <div className="pricing-title-yearly">
                  <h4>Yearly</h4>
                  <p>
                    Commit for 12 months. <br />
                    Paid monthly
                  </p>
                </div>
                <div className="card-bg yearly">
                  <div className="pricing-price">
                    <h3>
                      <span className="pricing-price-permonth">Rp. 30.000.000.</span>
                      /mo
                    </h3>
                  </div>
                  <div className="price-wrap">
                    {productQuantityYearly !== 0 ? (
                      <button
                        id="button3"
                        className="pricing-button-yearly"
                        // onClick={() => handleProductClick("price_1NB7oEAEioNEOHotyEOXyMz6", monthly, propsCoupon)}
                        onClick={() =>
                          // handleClick(
                          //   "price_1NB7qbAEioNEOHotvwkIc3bh",
                          //   monthly,
                          //   "button3"
                          // )
                          goToInputCustomerData(
                            "ITEM003",30000000,1,"Pena Yearly Subscription",
                          )
                        }
                        disabled={choosePlanLoading === "button3"}
                      >
                        {choosePlanLoading === "button3" ? (
                          <LoadingPlaceholder />
                        ) : (
                          "Choose Plan"
                        )}
                      </button>
                    ) : (
                      <button
                        style={{ color: "GrayText" }}
                        className="pricing-button-yearly"
                        disabled
                      >
                        Product Sold
                      </button>
                    )}
                    <Link href="http://calendly.com/cahyosubroto">
                      <h5 className="meeting">Schedule a meeting</h5>
                    </Link>
                    <div className="pricing-feature">
                      <ul className="feature-list">
                        <h6>What&rsquo;s included:</h6>
                        <li className="feature-check">
                          <Image
                            className="check-icon"
                            src={Check}
                            alt="Check icon"
                          />
                          <p>Unlimited requests</p>
                        </li>
                        <li className="feature-check">
                          <Image
                            className="check-icon"
                            src={Check}
                            alt="Check icon"
                          />
                          <p>Unlimited brands</p>
                        </li>
                        <li className="feature-check">
                          <Image
                            className="check-icon"
                            src={Check}
                            alt="Check icon"
                          />
                          <p>Unlimited users</p>
                        </li>
                        <li className="feature-check">
                          <Image
                            className="check-icon"
                            src={Check}
                            alt="Check icon"
                          />
                          <p>Unlimited stock photos via Shutterstock</p>
                        </li>
                        <li className="feature-check">
                          <Image
                            className="check-icon"
                            src={Check}
                            alt="Check icon"
                          />
                          <p>Pause or cancel anytime</p>
                        </li>
                      </ul>
                    </div>
                    <p className="limited-spot">
                      {productQuantityYearly !== null ? (
                        <>
                          Only{" "}
                          <span className="gradient-span">
                            {productQuantityYearly}
                          </span>{" "}
                          spots left this month
                        </>
                      ) : (
                        "Loading..."
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pricing;
