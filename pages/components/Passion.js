import Image from "next/image";
import React from "react";
import Medal from "../../public/assets/images/icons/Asset 27@300x.png";
import Write from "../../public/assets/images/icons/Asset 26@300x.png";
import Target from "../../public/assets/images/icons/Asset 25@300x.png";
import Trusted from "../../public/assets/images/icons/Asset 24@300x.png";

function Passion() {
  return (
    <div className="passion-container">
      <h3>We love what we do</h3>
      <div className="passion-wrapper">
        <div className="passion-card">
          <div className="passion-image-medal">
            <Image src={Medal} alt="Medal icon" />
          </div>
          <p>
            We focus on quality over quantity - our writers use the most
            up-to-date technology.
          </p>
        </div>
        <div className="passion-card">
          <div className="passion-image-write">
            <Image src={Write} alt="Writer icon" />
          </div>
          <p>Our writers are diverse industry experts and tech-savvy.</p>
        </div>
        <div className="passion-card">
          <div className="passion-image-target">
            <Image src={Target} alt="Target icon" />
          </div>
          <p>
            We are more than words - deliver on the intended purpose within the
            scope of your goal.
          </p>
        </div>
        <div className="passion-card">
          <div className="passion-image-trusted">
            <Image src={Trusted} alt="Handshake icon" />
          </div>
          <p>
            We are trustworthy and knowledgeable - keeping your documentation
            clear and concise.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Passion;
