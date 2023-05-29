import Image from "next/image";
import React from "react";
import CollabImage from "../../public/assets/images/icons/image33.png";
import CollabImageMobile from "../../public/assets/images/icons/collabmobile.png";
import Logos from "../../public/assets/images/icons/logos-group.png";
import LogosMobile from "../../public/assets/images/icons/logosmobile.png";

function Collab() {
  return (
    <div className="collab-container">
      <div data-aos="fade-up">
        <div className="collab-text">
          <h3>
            <span>30+</span> Global
            <br /> Collaboration
          </h3>
          <p>
            We take perplexing technical ideas and turn them into user-friendly
            documentation. Let us take work off your plate, so you can focus on
            running your business.
          </p>
        </div>
      </div>
      <Image className="collab-image" src={CollabImage} alt="Shape image" />
      <Image
        className="collab-image-mobile"
        src={CollabImageMobile}
        alt="Shape image"
      />
      <Image className="logos" src={Logos} alt="Client card image" />
      <Image
        className="logos-mobile"
        src={LogosMobile}
        alt="Client card image"
      />
    </div>
  );
}

export default Collab;
