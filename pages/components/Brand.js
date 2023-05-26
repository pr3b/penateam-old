import Image from "next/image";
import React from "react";
import Documentation from "../../public/assets/images/icons/fulldocumentation.png";
import Lowercost from "../../public/assets/images/icons/lowercost.png";
import Fasthiring from "../../public/assets/images/icons/fasthiring.png";
import Check from "../../public/assets/images/icons/check.png";
import ImageText from "../../public/assets/images/icons/image-star.png";
import Link from "next/link";

function Brand() {
  return (
    <div className="brand-container">
      <div className="brand-typography">
        <h3>
          We wrote for fastest growing startups and big enterprises{" "}
          <span style={{ color: "#f39f21" }}> across the globe </span>
        </h3>
        <p className="brand-desc">
          Some are bootstrapped, others venture-backed-all work with Pena to
          develop their documentation.
        </p>
      </div>
      <div className="brand-card-container">
        <div className="card">
          <div className="card-title">
            <h4>Comprehensive Service</h4>
          </div>
          <div className="brand-image">
            <Image src={Documentation} alt="Verified paper image" />
          </div>
          <h5>Full Documentation Coverage</h5>
          <div className="brand-content">
            <p>We cover full documentation service include</p>
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
        <div className="card">
          <div className="card-title">
            <h4>Lower Cost</h4>
          </div>
          <div className="brand-image">
            <Image src={Lowercost} alt="Percent icon" />
          </div>
          <h5>Save Over 45%</h5>
          <div className="brand-content">
            <p>Work with Pena compared to entry-level US talent</p>
            <div className="brand-card-list">
              <Image className="check-icon" src={Check} alt="Check icon" />
              <p>Simple pricing: most roles are just $3,000 per month</p>
            </div>
          </div>
          <Link href={"#pricing"} scroll={false}>
            <button className="brand-button">Get Started</button>
          </Link>
        </div>
        <div className="card">
          <div className="card-title">
            <h4>Fast Hiring</h4>
          </div>
          <div className="brand-image">
            <Image src={Fasthiring} alt="Search icon" />
          </div>
          <h5>Hire within days</h5>
          <div className="brand-content">
            <p>Subscribe now for immediate assistance from our team</p>
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
  );
}

export default Brand;
