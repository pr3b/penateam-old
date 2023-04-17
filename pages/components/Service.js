import Image from "next/image";
import React from "react";
import TechnicalWriting from "../../public/assets/images/icons/Asset 8@300x.png";
import WebDev from "../../public/assets/images/icons/Asset 7@300x.png";
import GraphicDesign from "../../public/assets/images/icons/Asset 22@300x.png";

function Service() {
  return (
    <div id="service">
      <h3 className="service-text">Our Service</h3>
      <div className="service-container font-poppins">
        <h2 className="service-title">Service</h2>
        <div className="service-card-container">
          <div className="service-card">
            <div className="card-image-technical">
              <Image src={TechnicalWriting} alt="Technical writing icon" />
            </div>
            <h3>Technical Writing</h3>
            <p>
              We decode deep and complex topics into easy-to-follow yet
              high-quality content in various documentation. We also deliver on
              the intended purpose, keeping content within the scope of your
              stated goal.
            </p>
          </div>
          <div className="service-card">
            <div className="card-image-webdev">
              <Image src={WebDev} alt="Web development icon" />
            </div>
            <h3>Web Development</h3>
            <p>
              We offer top-notch front-end and back-end developers to create
              something unique as per your needs while prioritizing an engaging
              design and a seamless user experience to drive optimal results for
              your business.
            </p>
          </div>
          <div className="service-card">
            <div className="card-image-graphic">
              <Image src={GraphicDesign} alt="Graphic design icon" />
            </div>
            <h3>Graphic Design</h3>
            <p>
              With our talented designers on your side, you can captivate an
              audience that trusts you to deliver the finest possible user
              journey with a compelling and alluring graphic design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
