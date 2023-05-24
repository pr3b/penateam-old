import Image from "next/image";
import React from "react";
import HeroImage from "../../public/assets/images/icons/hero.png";
import Link from "next/link";

function Hero() {
  return (
    <div id="home">
      <div className="home-container">
        <div className="hero-typography">
          <h1 className="home-title">
            Your go-to documentation partner
            <span style={{ color: "#f39f21" }}>.</span>
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
        <Image src={HeroImage} alt="Hero image" />
      </div>
    </div>
  );
}

export default Hero;
