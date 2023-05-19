import Image from "next/image";
import React from "react";
import Cism from "../../public/assets/images/icons/cism.png";
import Itil from "../../public/assets/images/icons/itil.png";
import Pmp from "../../public/assets/images/icons/pmp.png";
import Webflow from "../../public/assets/images/icons/webflow.png";
import GseasonDocs from "../../public/assets/images/icons/gseasondocs.png";

function Certification() {
  return (
    <div className="certification-container">
      <div>
        <h3>Certification</h3>
      </div>
      <div className="certification-logo-container">
        <div className="certification-logo-cism">
          <Image src={Cism} alt="Cism logo" />
        </div>
        <div className="certification-logo-itil">
          <Image src={Itil} alt="Itil logo" />
        </div>
        <div className="certification-logo-pmp">
          <Image src={Pmp} alt="Pmp logo" />
        </div>
        <div className="certification-logo-webflow">
          <Image src={Webflow} alt="Webflow logo" />
        </div>
        <div className="certification-logo-gseasondocs">
          <Image src={GseasonDocs} alt="GseasonDocs logo" />
        </div>
      </div>
    </div>
  );
}

export default Certification;
