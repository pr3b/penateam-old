import Image from "next/image";
import React from "react";
import ImageText from "../../public/assets/images/icons/image22.png";
import Babylon from "../../public/assets/images/portfolio/oxla.png";
import Microsoft from "../../public/assets/images/portfolio/microsoft.png";
import Mojito from "../../public/assets/images/portfolio/mojito.png";
import Oxla from "../../public/assets/images/portfolio/oxla.png";
import Rippey from "../../public/assets/images/portfolio/rippey.png";
import Vonigo from "../../public/assets/images/portfolio/vonigo.png";

function Work() {
  return (
    <div className="work-container">
      <div className="work-text">
        <h3>Our Masterpiece</h3>
        <p>
          Collaborate with Pena to perform excellent work
          <br />
          regardless of your team or the available resources.
        </p>
        <Image className="work-image-bg" src={ImageText} alt="Shape icon" />
      </div>
      <div className="work-card-container">
        <Image src={Babylon} alt="Babylon portfolio" />
        <Image src={Microsoft} alt="Microsoft portfolio" />
        <Image src={Mojito} alt="Mojito portfolio" />
        <Image src={Oxla} alt="Oxla portfolio" />
        <Image src={Rippey} alt="Rippey portfolio" />
        <Image src={Vonigo} alt="Vonigo portfolio" />
      </div>
      <button className="work-button">View More</button>
    </div>
  );
}

export default Work;
