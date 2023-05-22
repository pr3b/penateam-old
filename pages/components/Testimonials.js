import Image from "next/image";
import React from "react";
import Roxanne from "../../public/assets/images/client/microsoft.png";
import Carousel from "react-grid-carousel";

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <div className="testimonials-info-container">
        <div className="testimonials-text-container">
          <h3>What Our Clients Say</h3>
        </div>
      </div>
      <div className="testimonials-slider">
        <Carousel cols={2} rows={1} gap={10} loop>
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
};

export default Testimonials;
