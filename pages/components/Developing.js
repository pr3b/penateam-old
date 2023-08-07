import Image from "next/image";
import React from "react";
import Search from "../../public/assets/images/icons/developing-woes.png";
import Doc from "../../public/assets/images/icons/developing-reliable.png";
import Time from "../../public/assets/images/icons/developing-time.png";
import TopShape from "../../public/assets/images/icons/developing-top.png";
import HassleShape from "../../public/assets/images/icons/developing-hassle.png";
import RightShape from "../../public/assets/images/icons/developing-right-shape.png";
import LeftBottomShape from "../../public/assets/images/icons/developing-left-bottom.png";
import BottomShape from "../../public/assets/images/icons/developing-bottom.png";

function Developing() {
  return (
    <div className="developing-container">
      <div className="developing-wrapper">
        <div data-aos="fade-up">
          <Image className="developing-top" src={TopShape} alt="Line icon" />
        </div>
        <Image
          className="developing-right-shape"
          src={RightShape}
          alt="Line icon"
        />
        <Image
          className="developing-left-bottom"
          src={LeftBottomShape}
          alt="Line icon"
        />
        <Image
          className="developing-bottom"
          src={BottomShape}
          alt="Line icon"
        />
      </div>
      <div data-aos="fade-up">
        <div className="fade-up-class">
          <div className="developing-typography">
            <h3>
              <span className="gradient-span">
                {" "}
                Developing and maintaining technical
              </span>{" "}
              documentation is a hassle
              <Image
                className="developing-hassle"
                src={HassleShape}
                alt="Line icon"
              />
            </h3>
            <p className="developing-desc">
            Wave farewell to the hassle of finding skilled technical writers for your short-term projects.”
            Introducing Pena – your solution to unreliable freelancers and costly long-term commitments. With a convenient monthly subscription, access our team of expert writers who can swiftly create top-tier technical documentation. Free up your developers to excel in product creation while we handle the documentation magic.
            </p>
          </div>
        </div>

        <div className="developing-card-container">
          <div data-aos="zoom-in">
            <div className="developing-card">
              <Image
                className="developing-gif"
                src={Search}
                alt="Search icon"
              />
              <div className="developing-card-typography">
                <p className="developing-card-title">Hiring Woes</p>
                <p>
                  Skip the hiring hassle and access skilled technical writers for short-term projects with Pena!
                </p>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in">
            <div className="developing-card">
              <Image className="developing-gif" src={Doc} alt="Doc icon" />
              <div className="developing-card-typography">
                <p className="developing-card-title">Reliable Documentation</p>
                <p>
                  Pena&rsquo;s expert writers eliminate freelancer worries with top-notch documentation quality.
                </p>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in">
            <div className="developing-card">
              <Image className="developing-gif" src={Time} alt="Time icon" />
              <div className="developing-card-typography">
                <p className="developing-card-title">Time Crunch</p>
                <p>
                  Pena&rsquo;s swift documentation delivery frees developer teams to elevate their products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Developing;
