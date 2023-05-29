import Image from "next/image";
import React from "react";
import California from "../../public/assets/images/icons/california.png";
import Jakarta from "../../public/assets/images/icons/jakarta.png";
import Pena from "../../public/assets/images/logo/pena-text-white.png";
import Shape from "../../public/assets/images/icons/footer-shape.png";
import Link from "next/link";
import Yellowstar from "../../public/assets/images/icons/yellowstar.png";
import Scribble from "../../public/assets/images/icons/scribble.png";
import ArrowHero from "../../public/assets/images/icons/arrowhero.png";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <Image
          className="footer-shape"
          src={Shape}
          alt="Two gradient balls and star shape"
        />
        <div data-aos="fade-up">
          <div className="footer-text">
            <h3>
              <div className="lets">
                <Image
                  className="footer-yellowstar"
                  src={Yellowstar}
                  alt="Star icon"
                />
                Let&rsquo;s
                <Image
                  className="footer-arrowhero"
                  src={ArrowHero}
                  alt="Arrow icon"
                />
              </div>
              <div className="collaborate">
                Collaborate<span style={{ color: "#f39f21" }}>!</span>
                <Image
                  className="footer-scribble"
                  src={Scribble}
                  alt="Scribble icon"
                />
                <Image
                  className="footer-yellowstar2"
                  src={Yellowstar}
                  alt="Arrow icon"
                />
              </div>
            </h3>
            <p>Drop us a message. You&rsquo;re one step away!</p>
            <Link href="/#pricing" scroll={false}>
              <button className="footer-button">Get Started</button>
            </Link>
          </div>
        </div>
        <div className="footer-divider"></div>
        <div data-aos="fade-up">
          <Image className="footer-logo-top" src={Pena} alt="Pena Logo" />
        </div>
        <div data-aos="fade-up">
          <div className="footer-info-container">
            <Image className="footer-logo" src={Pena} alt="Pena Logo" />
            <div className="footer-info">
              <div className="footer-flag">
                <div className="state">
                  <Image src={California} alt="California State" />
                  <p>California</p>
                </div>
                <div className="state">
                  <Image src={Jakarta} alt="Jakarta State" />
                  <p>Jakarta</p>
                </div>
              </div>
            </div>
            <div className="footer-divider-vertical"></div>
            <div className="footer-info">
              <h4>Say hi to us:</h4>
              <p>hello@penateam.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>All rights reserved 2023 © Pena</p>
      </div>
    </div>
  );
}

export default Footer;
