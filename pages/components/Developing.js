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
              <br />
              documentation is a hassle
              <Image
                className="developing-hassle"
                src={HassleShape}
                alt="Line icon"
              />
            </h3>
            <p className="developing-desc">
              Pena provides a solution for businesses struggling to hire
              high-quality technical writers for short-term projects. Say
              goodbye to unreliable freelancers and expensive commitments by
              subscribing to Pena for a monthly fee. Our team of expert
              technical writers can be onboarded quickly and deliver excellent
              technical documentation at lightning speed, allowing your
              developers to focus on what really matters - creating great
              products.
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
                <p className="developing-card-title">Hiring Woes:</p>
                <p>
                  Pena provides access to skilled technical writers for
                  short-term projects.
                </p>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in">
            <div className="developing-card">
              <Image className="developing-gif" src={Doc} alt="Doc icon" />
              <div className="developing-card-typography">
                <p className="developing-card-title">Reliable Documentation:</p>
                <p>
                  Pena&rsquo;s team of technical writers consistently deliver
                  high-quality documentation, eliminating the problem of
                  unreliable freelancers.
                </p>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in">
            <div className="developing-card">
              <Image className="developing-gif" src={Time} alt="Time icon" />
              <div className="developing-card-typography">
                <p className="developing-card-title">Time Crunch:</p>
                <p>
                  Pena&rsquo;s fast documentation delivery allows businesses to
                  focus on other aspects of their projects.
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
