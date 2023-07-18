import Image from "next/image";
import React from "react";
import WebflowLogo from "../../public/assets/images/icons/webflowlogo.png";
import WebflowQuote from "../../public/assets/images/icons/webflow-quote.png";
import WebflowLeft from "../../public/assets/images/icons/webflow-left.png";
import WebflowRight from "../../public/assets/images/icons/webflow-right.png";

function Webflow() {
  return (
    <div className="webflow-container">
      <div className="webflow-bg">
        <Image className="webflow-left" src={WebflowLeft} alt="Quote icon" />
        <h3>
          <Image
            className="webflow-quote"
            src={WebflowQuote}
            alt="Quote icon"
          />
          Aenean molestie eros eget risus tincidunt <br /> volutpat. Quisque
          placerat at enim sed semper.
        </h3>
        <Image className="webflow-right" src={WebflowRight} alt="Quote icon" />
        <Image src={WebflowLogo} alt="Webflow logo" />
      </div>
    </div>
  );
}

export default Webflow;
