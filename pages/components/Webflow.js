import Image from "next/image";
import React from "react";
import WebflowLogo from "../../public/assets/images/icons/webflowlogo.png";
import WebflowShape from "../../public/assets/images/icons/webflowshape.png";
import WebflowMobileShape from "../../public/assets/images/icons/webflow-shape-mobile.png";

function Webflow() {
  return (
    <div className="webflow-container">
      <div className="webflow-bg">
        <h3>
          Aenean molestie eros eget risus tincidunt <br /> volutpat. Quisque
          placerat at enim sed semper.
        </h3>
        <Image className="webflow-dots" src={WebflowShape} alt="Dots shape" />
        <Image
          className="webflow-dots-mobile"
          src={WebflowMobileShape}
          alt="Dots shape"
        />
        <Image src={WebflowLogo} alt="Webflow logo" />
      </div>
    </div>
  );
}

export default Webflow;
