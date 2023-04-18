import Image from "next/image";
import React from "react";
import Quote from "../../public/assets/images/icons/Group 98.png";

function Testimonials() {
  return (
    <div className="testimonials-container">
      <div className="testimonials-info-container">
        <div className="testimonials-quote">
          <Image src={Quote} alt="Quote icon" />
        </div>
        <div className="testimonials-text-container">
          <h3>What they say about us</h3>
          <p>
            Success stories from our partners worldwide - they have had
            exquisite doco with us. Are you next?
          </p>
        </div>
      </div>
      <div className="testimonials-slider">
        <div className="slider-card">card</div>
        <div className="slider-card">card</div>
        <div className="slider-card">card</div>
      </div>
    </div>
  );
}

export default Testimonials;
