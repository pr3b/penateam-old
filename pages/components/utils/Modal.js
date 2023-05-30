import React, { useState } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';

// Modal component
const CouponModal = ({ isOpen, onClose, checkout, idPrice, idProduct, propsCoupon }) => {
  const [couponCode, setCouponCode] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // Perform any logic with the entered coupon code here
      propsCoupon = couponCode
      checkout({lineItems: [{price: idPrice, quantity: 1}], discounts: [{coupon: propsCoupon,}]}, idProduct);
      setCouponCode("")
      // Close the modal
      onClose();
    } catch (error) {
       // Handle the error and update the error state
       setErrorMessage('Invalid discount code. Please try again.');
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
      className="card"
      ariaHideApp={false} // To disable the warning about the modal accessibility
    >
      <div className="main">
          <div className="co-img">
            <Image
              src="https://drive.google.com/uc?export=view&id=1weC8vFQhpBLCcLQYfiouM5dcW5YdQ_TN"
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
            placeholder="Enter coupon code if any"
            onSubmit={() => handleSubmit()}
          />
          {couponCode ? (
            <button className="copybtn" type='submit' onClick={handleSubmit}>APPLY DISCOUNT</button>
          ):(
            <button className="copybtn" type='submit' onClick={handleSubmit} >NO APPLY</button>
          )}
        </div>
      {/* </div> */}
    </Modal>
  );
};

export default CouponModal