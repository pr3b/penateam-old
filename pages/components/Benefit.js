import Image from "next/image";
import React from "react";
import BenefitShape from "../../public/assets/images/icons/benefitshape.png";
import Knowledgebase from "../../public/assets/images/icons/benefit-knowledge.png";
import API from "../../public/assets/images/icons/benefit-api.png";
import User from "../../public/assets/images/icons/benefit-user.png";
import Process from "../../public/assets/images/icons/benefit-process.png";
import Professional from "../../public/assets/images/icons/benefit-profesional.png";
import Blogs from "../../public/assets/images/icons/benefit-technical.png";
import Diagrams from "../../public/assets/images/icons/benefit-diagram.png";
import Web from "../../public/assets/images/icons/benefit-web.png";
import TopShape from "../../public/assets/images/icons/benefit-top.png";
import Link from "next/link";

function Benefit() {
  return (
    <div id="benefit">
      <Image className="benefit-top" src={TopShape} alt="Top shape" />
      <div className="benefit-container">
        <div data-aos="fade-up">
          <div className="benefit-typography">
            <h3>Member Benefits</h3>
            <p>
              Perks so good you&rsquo;ll never need to go anywhere else for your
              design. Seriously.
            </p>
            {/* <Link href="#pricing" scroll={false}>
              <button className="benefit-button">See Plans</button>
            </Link> */}
            {/* <Image className="benefit-shape" src={BenefitShape} alt="Dots shape" /> */}
          </div>
        </div>
        <div className="benefit-card-container">
          <div data-aos="zoom-out-down">
            <div className="benefit-card">
              <div className="benefit-img">
                <div className="benefit-white-shape">
                  <Image
                    className="benefit-image"
                    src={Knowledgebase}
                    alt="Database logo"
                  />
                </div>
              </div>
              <h4>Knowledge Base & End User Content</h4>
            </div>
          </div>
          <div data-aos="zoom-out-down">
            <div className="benefit-card">
              <div className="benefit-img">
                <div className="benefit-white-shape">
                  <Image
                    className="benefit-image"
                    src={API}
                    alt="Database logo"
                  />
                </div>
              </div>
              <h4>API & Developer Documentation</h4>
            </div>
          </div>
          <div data-aos="zoom-out-down">
            <div className="benefit-card">
              <div className="benefit-img">
                <div className="benefit-white-shape">
                  <Image
                    className="benefit-image"
                    src={User}
                    alt="Database logo"
                  />
                </div>
              </div>
              <h4>User & Installation Documentation</h4>
            </div>
          </div>
          <div data-aos="zoom-out-down">
            <div className="benefit-card">
              <div className="benefit-img">
                <div className="benefit-white-shape">
                  <Image
                    className="benefit-image"
                    src={Process}
                    alt="Database logo"
                  />
                </div>
              </div>
              <h4>Process & Procedure Documentation</h4>
            </div>
          </div>
          <div data-aos="zoom-out-down">
            <div className="benefit-card">
              <div className="benefit-img">
                <div className="benefit-white-shape">
                  <Image
                    className="benefit-image"
                    src={Professional}
                    alt="Database logo"
                  />
                </div>
              </div>
              <h4>Professional Hardware & Manufacturing Docs</h4>
            </div>
          </div>
          <div data-aos="zoom-out-down">
            <div className="benefit-card">
              <div className="benefit-img">
                <div className="benefit-white-shape">
                  <Image
                    className="benefit-image"
                    src={Blogs}
                    alt="Database logo"
                  />
                </div>
              </div>
              <h4>Technical Blogs & Whitepaper</h4>
            </div>
          </div>
          <div data-aos="zoom-out-down">
            <div className="benefit-card">
              <div className="benefit-img">
                <div className="benefit-white-shape">
                  <Image
                    className="benefit-image"
                    src={Diagrams}
                    alt="Database logo"
                  />
                </div>
              </div>
              <h4>Technical Diagram</h4>
            </div>
          </div>
          <div data-aos="zoom-out-down">
            <div className="benefit-card">
              <div className="benefit-img">
                <div className="benefit-white-shape">
                  <Image
                    className="benefit-image"
                    src={Web}
                    alt="Database logo"
                  />
                </div>
              </div>
              <h4>Web Development</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefit;
