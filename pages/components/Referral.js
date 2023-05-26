import Image from "next/image";
import React from "react";
import ReferralImage from "../../public/assets/images/icons/referral.png";

function Referral() {
  return (
    <div id="referral">
      <div className="referral-container">
        <div data-aos="fade-up">
          <Image src={ReferralImage} alt="Speaker icon" />
        </div>
        <div data-aos="fade-up">
          <div className="referral-text">
            <h4>Welcome. Referral Partner!</h4>
            <p>
              Drop us a line or queries about what you need to be a successful
              Pena’s referral partner!
            </p>
          </div>
        </div>
        <div data-aos="fade-up">
          <button className="referral-button">Join Now</button>
        </div>
      </div>
    </div>
  );
}

export default Referral;
