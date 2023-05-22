import Image from "next/image";
import React from "react";
import California from "../../public/assets/images/icons/california.png";
import Jakarta from "../../public/assets/images/icons/jakarta.png";
import Pena from "../../public/assets/images/logo/pena-text-white.png";
import Shape from "../../public/assets/images/icons/images.png";
import Link from "next/link";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <Image
          className="footer-shape"
          src={Shape}
          alt="Two gradient balls and star shape"
        />
        <div className="footer-text">
          <h3>
            Let&rsquo;s <br /> Collaborate
            <span style={{ color: "#f39f21" }}>!</span>
          </h3>

          <p>Drop us a message. You&rsquo;re one step away!</p>
          <Link href="#pricing">
            <button className="footer-button">Get Started</button>
          </Link>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-info-container">
          <div className="footer-info">
            <div className="footer-flag">
              <Image src={California} alt="California State" />
              <Image src={Jakarta} alt="Jakarta State" />
            </div>
            <p>California | Jakarta</p>
          </div>
          <div className="footer-info">
            <h4>Say hi to us:</h4>
            <p>hello@penateam.com</p>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <Image src={Pena} alt="Indonesia Flag" />
        <p>All rights reserved 2023 © Pena</p>
      </div>
    </div>
  );
}

export default Footer;
