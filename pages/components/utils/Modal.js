import React, { useState } from 'react';
import Modal from 'react-modal';

// Styling for the modal
const customStyles = {
  content: {
    width: '400px',
    height: '200px',
    margin: 'auto',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

// Modal component
const CouponModal = ({ isOpen, onClose, clickHandler }) => {
  const [couponCode, setCouponCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any logic with the entered coupon code here
    console.log(couponCode);
    // Close the modal
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      ariaHideApp={false} // To disable the warning about the modal accessibility
    >
      <h2>Enter Coupon Code</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          placeholder="Enter coupon code"
        />
        <button type="submit">Apply Coupon</button>
      </form>
    </Modal>
  );
};

export default CouponModal