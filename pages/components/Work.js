import Image from "next/image";
import React from "react";
import ImageText from "../../public/assets/images/icons/image-star.png";
import Oxla from "../../public/assets/images/portfolio/oxla.png";
import Babylon from "../../public/assets/images/portfolio/babylon.png";
import Mojito from "../../public/assets/images/portfolio/mojito.png";
import Opster from "../../public/assets/images/portfolio/opster.png";
import Phinisi from "../../public/assets/images/portfolio/phinisi.png";
import Vonigo from "../../public/assets/images/portfolio/vonigo.png";

function Work() {
  return (
    <div id="work">
      <div className="work-container">
        <div className="work-text">
          <h3>
            Our <span style={{ color: "#f39f21" }}> Masterpiece </span>
          </h3>
        </div>
        <div className="work-card-container">
          <Image src={Oxla} alt="Oxla portfolio" />
          <Image src={Babylon} alt="Babylon portfolio" />
          <Image src={Mojito} alt="Mojito portfolio" />
          <Image src={Opster} alt="Opster portfolio" />
          <Image src={Phinisi} alt="Phinisi portfolio" />
          <Image src={Vonigo} alt="Vonigo portfolio" />
        </div>
        <button className="work-button">View More</button>
      </div>
    </div>
  );
}

export default Work;
