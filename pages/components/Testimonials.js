import Image from "next/image";
import React from "react";
import Quote from "../../public/assets/images/icons/Group 98.png";
import Roxanne from "../../public/assets/images/client/microsoft.png";
import Carousel from "react-grid-carousel";

function Testimonials() {
  return (
    <div className="testimonials-container">
      <div className="testimonials-info-container">
        <div className="testimonials-quote">
          <Image src={Quote} alt="Quote icon" />
        </div>
        <div className="testimonials-text-container">
          <h3>What they say about us</h3>
          <p>
            Success stories from our partners worldwide - they <br /> have had
            exquisite doco with us. Are you next?
          </p>
        </div>
      </div>
      <div className="testimonials-slider">
        <Carousel cols={2} rows={1} gap={50} loop>
          <Carousel.Item>
            <div className="card-slider">
              <h4>
                “Cahyo quickly turned around a review of documentation for me
                with accuracy and attention to detail. Great to work with.”
              </h4>
              <div className="profile">
                <Image src={Roxanne} alt="Roxanne from Microsoft" />
                <div className="profile-text">
                  <p style={{ fontWeight: "700" }}>Roxanne Kenison</p>
                  <p>Microsoft</p>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="card-slider">
              <h4>
                “Cahyo quickly turned around a review of documentation for me
                with accuracy and attention to detail. Great to work with.”
              </h4>
              <div className="profile">
                <Image src={Roxanne} alt="Roxanne from Microsoft" />
                <div className="profile-text">
                  <p style={{ fontWeight: "700" }}>Roxanne Kenison</p>
                  <p>Microsoft</p>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="card-slider">
              <h4>
                “Cahyo quickly turned around a review of documentation for me
                with accuracy and attention to detail. Great to work with.”
              </h4>
              <div className="profile">
                <Image src={Roxanne} alt="Roxanne from Microsoft" />
                <div className="profile-text">
                  <p style={{ fontWeight: "700" }}>Roxanne Kenison</p>
                  <p>Microsoft</p>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            {/* anything you want to show in the grid */}
          </Carousel.Item>
          {/* ... */}
        </Carousel>
      </div>
    </div>
  );
}

export default Testimonials;
