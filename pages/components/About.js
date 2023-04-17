import Image from "next/image";
import React from "react";
import Image1 from "../../public/assets/images/icons/image11.png";

function about() {
  return (
    <div id="about">
      <div className="about-container font-poppins">
        <h2 className="about-title">About</h2>
        <Image className="shape" src={Image1} alt="About us icon" />
        <div className="about-typography">
          <h3>Hi, We&lsquo;re Pena!</h3>
          <h4>
            All of your technical writing needs, harmoniously in one place.
          </h4>
          <p>
            We specialize in creating, delivering, and improving code and copy
            in a ready-to-use package. Let us handle all your software needs
            with the ingenuity of a computer engineer and the passion of a
            marketing professional. Streamlined solutions made easy and
            available worldwide. From concept to creation, Pena provides
            high-quality products through detailed development and innovative
            implementation. Our documentation process consists of multiple
            thorough run-downs, statistical-based strategies, and distinguished
            business use cases by an experienced team equipped with technical
            expertise, demonstrated capabilities, and a can-do attitude to
            provide satisfactory results rivaled by no other.
          </p>
        </div>
      </div>
      <div className="divider-container">
        <div className="divider"></div>
      </div>
    </div>
  );
}

export default about;
