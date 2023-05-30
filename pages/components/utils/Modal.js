import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Modal from 'react-modal';
import Image from 'next/image';
import PenaLogoText from "../../../public/assets/images/logo/pena-text.png";
import 'react-toastify/dist/ReactToastify.css';

// Modal component
const CouponModal = ({ isOpen, onClose, checkout, idPrice, idProduct, propsCoupon, setIsLoadingState }) => {
  const [couponCode, setCouponCode] = useState('');
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // Perform any logic with the entered coupon code here
      propsCoupon = couponCode
      checkout({lineItems: [{price: idPrice, quantity: 1}], discounts: [{coupon: propsCoupon,}]}, idProduct);
      setCouponCode("")
      setIsLoadingState()
      setTimeout(() => {
        toast.error('Invalid discount code. Please try again.');
        window.location.reload(); // Reload the page
        window.location.href = window.location.origin; // Go to the origin pag
      }, 5000);
    } catch (error) {
       // Handle the error and update the error state
       setErrorMessage('Invalid discount code. Please try again.');
    } finally {
      // setIsLoading(false); // Set loading state to false
      // onClose();
    }
  };

  if (typeof window !== 'undefined') {
    Modal.setAppElement('#__next');
  }  

  return (
    <Modal
      defaultAppElement="#__next"
      isOpen={isOpen}
      onRequestClose={onClose}
      className="cardModal"
      ariaHideApp={false} // To disable the warning about the modal accessibility
    >
      <div className="main">
          <div className="co-img">
            <Image
              src={PenaLogoText}
              alt=""
              width={120}
              height={80}
            />
          </div>
          <div className="vertical"></div>
          <div className="content">
            <h2>Pena Discount!!</h2>
            <h1>10% <span>Coupon</span></h1>
            <p>Valid till 5 June 2023</p>
          </div>
        </div>
        <div className="copy-button">
          <input
            type="text"
            value={couponCode.toUpperCase()}
            onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
            placeholder="Do you have coupon?"
            onSubmit={() => handleSubmit()}
          />
         {couponCode ? (
            <button className="copybtn" type="submit" onClick={handleSubmit}>APPLY DISCOUNT</button>
          ) : (
            <button className="copybtn" type="submit" onClick={handleSubmit}>NO APPLY</button>
          )}
        </div>
      {/* </div> */}
    </Modal>
  );
};

export default CouponModal