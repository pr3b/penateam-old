import Image from "next/image";
import React from "react";
import BenefitShape from "../../public/assets/images/icons/benefitshape.png";
import Knowledgebase from "../../public/assets/images/icons/knowledgebase.png";
import API from "../../public/assets/images/icons/api.png";
import User from "../../public/assets/images/icons/user.png";
import Process from "../../public/assets/images/icons/process.png";
import Professional from "../../public/assets/images/icons/professional.png";
import Blogs from "../../public/assets/images/icons/blogs.png";
import Diagrams from "../../public/assets/images/icons/diagrams.png";
import Web from "../../public/assets/images/icons/web.png";

function Benefit() {
  return (
    <div id="benefit">
      <div className="benefit-container">
        <div className="benefit-typography">
          <h3>Member Benefits</h3>
          <p>
            Perks so good you&rsquo;ll never need to go anywhere else for your
            design. Seriously.
          </p>
          <button className="benefit-button">See Plans</button>
          {/* <Image className="benefit-shape" src={BenefitShape} alt="Dots shape" /> */}
        </div>
        <div className="benefit-card-container">
          <div className="benefit-card">
            <h4>Knowledge Base & End User Content</h4>
            <div className="benefit-img">
              <div className="benefit-white-shape">
                <Image src={Knowledgebase} alt="Database logo" />
              </div>
            </div>
          </div>
          <div className="benefit-card">
            <h4>API & Developer Documentation</h4>
            <div className="benefit-img">
              <div className="benefit-white-shape">
                <Image src={API} alt="Database logo" />
              </div>
            </div>
          </div>
          <div className="benefit-card">
            <h4>User & Installation Documentation</h4>
            <div className="benefit-img">
              <div className="benefit-white-shape">
                <Image src={User} alt="Database logo" />
              </div>
            </div>
          </div>
          <div className="benefit-card">
            <h4>Process & Procedure Documentation</h4>
            <div className="benefit-img">
              <div className="benefit-white-shape">
                <Image src={Process} alt="Database logo" />
              </div>
            </div>
          </div>
          <div className="benefit-card">
            <h4>Professional Hardware & Manufacturing Docs</h4>
            <div className="benefit-img">
              <div className="benefit-white-shape">
                <Image src={Professional} alt="Database logo" />
              </div>
            </div>
          </div>
          <div className="benefit-card">
            <h4>Technical Blogs & Whitepaper</h4>
            <div className="benefit-img">
              <div className="benefit-white-shape">
                <Image src={Blogs} alt="Database logo" />
              </div>
            </div>
          </div>
          <div className="benefit-card">
            <h4>Technical Diagram</h4>
            <div className="benefit-img">
              <div className="benefit-white-shape">
                <Image src={Diagrams} alt="Database logo" />
              </div>
            </div>
          </div>
          <div className="benefit-card">
            <h4>Web Development</h4>
            <div className="benefit-img">
              <div className="benefit-white-shape">
                <Image src={Web} alt="Database logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefit;
