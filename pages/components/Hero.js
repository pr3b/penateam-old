import Image from "next/image";
import React, { useEffect } from "react";
import HeroImage from "../../public/assets/images/icons/hero.png";
import Yellowstar from "../../public/assets/images/icons/yellowstar.png";
import Scribble from "../../public/assets/images/icons/scribble.png";
import ArrowHero from "../../public/assets/images/icons/arrowhero.png";
import Link from "next/link";

function Hero() {
  return (
    <div id="home">
      <div className="home-container">
        <div data-aos="zoom-in">
          <div className="hero-typography">
            <h1 className="home-title">
              <div className="yourgoto">
                Your go-to
                <Image className="arrowhero" src={ArrowHero} alt="Arrow icon" />
              </div>
              documentation
              <div className="partner">
                <Image
                  className="yellowstar"
                  src={Yellowstar}
                  alt="Star icon"
                />
                partner<span style={{ color: "#f39f21" }}>.</span>
                <Image
                  className="scribble"
                  src={Scribble}
                  alt="Scribble icon"
                />
              </div>
            </h1>
            <p>
              Quickly scale your technical documentation with our affordable
              subscription service.
            </p>
            <Image
              className="heroimg-mobile"
              src={HeroImage}
              alt="Hero image"
            />
            <Link href="#pricing" scroll={false}>
              <button className="hero-button">Work with us</button>
            </Link>
          </div>
        </div>
        <Image className="hero-img" src={HeroImage} alt="Hero image" />
      </div>
    </div>
  );
}

export default Hero;
