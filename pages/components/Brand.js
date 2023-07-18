import Image from "next/image";
import React from "react";
import Documentation from "../../public/assets/images/icons/brand-full.png";
import Lowercost from "../../public/assets/images/icons/brand-save.png";
import Fasthiring from "../../public/assets/images/icons/brand-hiring.png";
import Check from "../../public/assets/images/icons/check.png";
import BrandImage from "../../public/assets/images/icons/star-symbol-yellow.png";
import Link from "next/link";
import RightShape from "../../public/assets/images/icons/brand-right.png";

function Brand() {
  return (
    <div className="brand-container">
      <Image
        className="brand-spin-img"
        src={BrandImage}
        alt="brand spinning shape"
      />
      <Image className="brand-right" src={RightShape} alt="Right shape" />

      <div className="brand-typography">
        <div data-aos="fade-up">
          <h3>
            We wrote for fastest growing startups and <br /> big enterprises{" "}
            <span className="gradient-span"> across the globe </span>
          </h3>
          <p className="brand-desc">
            Some are bootstrapped, others venture-backed-all work with Pena to{" "}
            <br />
            develop their documentation.
          </p>
        </div>
      </div>
      <div className="brand-card-container">
        <div data-aos="zoom-in">
          <div className="card">
            <div className="card-title">
              <h4 className="brand-tech-write">Comprehensive Service</h4>
            </div>
            <div className="brand-image-title">
              <div className="brand-image">
                <Image
                  className="brand-image-img"
                  src={Documentation}
                  alt="Verified paper image"
                />
              </div>
              <div className="brand-title-desc">
                <h5>Full Documentation Coverage</h5>
                <p>We cover full documentation service include</p>
              </div>
            </div>
            <div className="brand-content">
              <div className="brand-card-list">
                <Image className="check-icon" src={Check} alt="Check icon" />
                <p>Project Management</p>
              </div>
              <div className="brand-card-list">
                <Image className="check-icon" src={Check} alt="Check icon" />
                <p>Content Development</p>
              </div>
              <div className="brand-card-list">
                <Image className="check-icon" src={Check} alt="Check icon" />
                <p>Graphic design for technical diagrams</p>
              </div>
              <div className="brand-card-list">
                <Image className="check-icon" src={Check} alt="Check icon" />
                <p>
                  All the front-end works to deploy the technical documentation
                </p>
              </div>
              <div className="brand-card-list">
                <Image className="check-icon" src={Check} alt="Check icon" />
                <p>Plus we hire each role uniquely based on your needs</p>
              </div>
            </div>
            <Link href={"#pricing"} scroll={false}>
              <button className="brand-button">Get Started</button>
            </Link>
          </div>
        </div>
        <div data-aos="zoom-in">
          <div className="card">
            <div className="card-title">
              <h4 className="brand-tech-write">Lower Cost</h4>
            </div>
            <div className="brand-image-title">
              <div className="brand-image">
                <Image
                  className="brand-image-img"
                  src={Lowercost}
                  alt="Percent icon"
                />
              </div>
              <div className="brand-title-desc">
                <h5>Save Over 45%</h5>
                <p>Work with Pena compared to entry-level US talent</p>
              </div>
            </div>
            <div className="brand-content">
              <div className="brand-card-list">
                <Image className="check-icon" src={Check} alt="Check icon" />
                <p>Simple pricing: most roles are just $3,000 per month</p>
              </div>
            </div>
            <Link href={"#pricing"} scroll={false}>
              <button className="brand-button">Get Started</button>
            </Link>
          </div>
        </div>
        <div data-aos="zoom-in">
          <div className="card">
            <div className="card-title">
              <h4 className="brand-tech-write">Fast Hiring</h4>
            </div>
            <div className="brand-image-title">
              <div className="brand-image">
                <Image
                  className="brand-image-img"
                  src={Fasthiring}
                  alt="Search icon"
                />
              </div>
              <div className="brand-title-desc">
                <h5>Hire within days</h5>
                <p>Subscribe now for immediate assistance from our team</p>
              </div>
            </div>
            <div className="brand-content">
              <div className="brand-card-list">
                <Image className="check-icon" src={Check} alt="Check icon" />
                <p>
                  All of the sourcing, interviewing and vetting process is done
                  for you
                </p>
              </div>
            </div>
            <Link href={"#pricing"} scroll={false}>
              <button className="brand-button">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brand;
