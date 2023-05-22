import Image from "next/image";
import React from "react";
import Search from "../../public/assets/images/icons/search-about-section.gif";
import Doc from "../../public/assets/images/icons/doc-about-section.gif";
import Time from "../../public/assets/images/icons/time-about-section.gif";
import ImageText from "../../public/assets/images/icons/image-star.png";

function Developing() {
  return (
    <div className="developing-container">
      <div className="developing-typography">
        <h3>
          <span style={{ color: "#f39f21" }}> Developing</span> and maintaining
          technical documentation is a hassle
        </h3>
        <p className="developing-desc">
          Pena provides a solution for businesses struggling to hire
          high-quality technical writers for short-term projects. Say goodbye to
          unreliable freelancers and expensive commitments by subscribing to
          Pena for a monthly fee. Our team of expert technical writers can be
          onboarded quickly and deliver excellent technical documentation at
          lightning speed, allowing your developers to focus on what really
          matters - creating great products.
        </p>
      </div>
      <div className="developing-card-container">
        <div className="developing-card">
          <Image className="developing-gif" src={Search} alt="Search icon" />
          <p>
            Hiring Woes: Pena provides access to skilled technical writers for
            short-term projects.
          </p>
        </div>
        <div className="developing-card">
          <Image className="developing-gif" src={Doc} alt="Doc icon" />
          <p>
            Reliable Documentation: Pena&rsquo;s team of technical writers
            consistently deliver high-quality documentation, eliminating the
            problem of unreliable freelancers.
          </p>
        </div>
        <div className="developing-card">
          <Image className="developing-gif" src={Time} alt="Time icon" />
          <p>
            Time Crunch: Pena&rsquo;s fast documentation delivery allows
            businesses to focus on other aspects of their projects.
          </p>
        </div>
      </div>
      <div className="developing-divider"></div>
    </div>
  );
}

export default Developing;
