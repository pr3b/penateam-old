import Image from "next/image";
import HeroImage from "../../public/assets/images/icons/work-hero.png";
import React from "react";

function WorkHero() {
  return (
    <>
      <div className="workhero-container">
        <div className="workhero-typography">
          <h3>
            Our Team <br /> Project<span style={{ color: "#f39f21" }}>.</span>
          </h3>
          <p>
            Let’s work together to empower businesses with <br /> results-driven
            services at any scale.
          </p>
          <button className="work-button">Get Started</button>
        </div>
        <Image src={HeroImage} alt="WorkHero image" />
      </div>
    </>
  );
}

export default WorkHero;
