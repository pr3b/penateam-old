import Image from "next/image";
import React from "react";
import CollabImage from "../../public/assets/images/icons/image33.png";
import Logos from "../../public/assets/images/icons/logos-group.png";

function Collab() {
  return (
    <div className="collab-container">
      <div className="collab-text">
        <h3>
          <span>40+</span> Global
          <br /> Collaboration
        </h3>
        <p>
          We take perplexing technical ideas and turn them
          <br />
          into user-friendly documentation. Let us take work off
          <br /> your plate, so you can focus on running your <br />
          business.
        </p>
      </div>
      <Image className="collab-image" src={CollabImage} alt="Shape image" />
      <Image className="logos" src={Logos} alt="Client card image" />
    </div>
  );
}

export default Collab;
