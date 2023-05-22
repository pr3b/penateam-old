import Image from "next/image";
import React from "react";
import HeroImage from "../../public/assets/images/icons/hero1.png";
import HeroImage2 from "../../public/assets/images/icons/hero2.png";
import Link from "next/link";

function Hero() {
  return (
    <div id="home">
      <div className="home-container">
        <div className="hero-typography">
          <h1 className="home-title">
            Your Go-to documentation partner{" "}
            <span
              style={{
                color: "#f39f21",
                marginLeft: "10rem",
                fontFamily: "Comfortaa, cursive",
              }}
            >
              -
            </span>
          </h1>
          <p>
            Quickly scale your technical documentation with our affordable
            subscription service.
          </p>
          <Link href="#pricing" scroll={false}>
            <button className="hero-button">Work with us</button>
          </Link>
          <p>
            Trusted by{" "}
            <span style={{ color: "#f39f21", fontWeight: "700" }}> 30+ </span>{" "}
            companies across the globe
          </p>
        </div>
        <div className="hero-image">
          <Image className="hero1" src={HeroImage} alt="Showcase project 1" />
          <Image className="hero2" src={HeroImage2} alt="Showcase project 2" />
          <div className="hero-shape"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
