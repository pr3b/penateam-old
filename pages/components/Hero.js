import Image from "next/image";
import react from "react";
import Link from "next/link";
import Logo from "../../public/assets/images/logo/pena-text.png";
import HeroLeft from "../../public/assets/images/icons/hero-left.png";
import HeroRight from "../../public/assets/images/icons/hero-right.png";
import Arrow from "../../public/assets/images/icons/arrow-button.png";

function Hero() {
  return (
    <div id="home">
      <Image className="hero-shape-left" src={HeroLeft} alt="Hero left shape" />
      <div className="home-container">
        <div className="hero-wrapper">
          <div data-aos="fade-down">
            <Image className="pena-logo" src={Logo} alt="Pena Logo" />
          </div>
          <div data-aos="zoom-in">
            <button className="tech-write">
              <p>Technical writing as a service</p>
            </button>
            <div className="hero-typography">
              <h1 className="home-title">
                Your Go-To <br />
                <span className="gradient-span">Documentation</span> Partner
              </h1>
              <p>
                Quickly scale your technical documentation with our affordable
                subscription service.
              </p>
              <div className="hero-buttons">
                <Link href="#pricing" scroll={false}>
                  <button className="hero-button">Get Started</button>
                </Link>
                <Image className="arrow-button" src={Arrow} alt="Arrow shape" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        className="hero-shape-right"
        src={HeroRight}
        alt="Hero right shape"
      />
    </div>
  );
}

export default Hero;
