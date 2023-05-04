import Image from "next/image";
import React from "react";
import Usa from "../../public/assets/images/icons/flag/usa-square.png";
import Indo from "../../public/assets/images/icons/flag/indo-square.png";
import Pena from "../../public/assets/images/logo/pena-text-white.png";
import Shape from "../../public/assets/images/icons/images.png";

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
          <button className="footer-button">Get Started</button>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-info-container">
          <div className="footer-info">
            <div className="footer-flag">
              <Image src={Indo} alt="Indonesia Flag" />
            </div>
            <p>
              AD Premier Office Park, 9th FloorJl. TB Simatupang No.5, South
              Jakarta City Jakarta, Indonesia
            </p>
          </div>
          <div className="footer-info">
            <div className="footer-flag">
              <Image src={Usa} alt="Usa Icon" />
            </div>
            <p>223 S Baldwin Ave, Arcadia, CA 91007, USA</p>
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
