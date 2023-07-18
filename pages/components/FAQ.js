import React, { useState } from "react";
import Image from "next/image";
import Arrow from "../../public/assets/images/icons/arrowaccordion.svg";
import LeftShape from "../../public/assets/images/icons/faq-left.png";
import RightShape from "../../public/assets/images/icons/faq-right.png";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswerVisibility = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <div className="faq-container">
      <div id="faq" className="section white p-t-150">
        <Image src={LeftShape} alt="Left shape" className="faq-left" />
        <Image src={RightShape} alt="Right shape" className="faq-right" />
        <div className="container">
          <h3 className="faq-font">Frequently Asked Questions</h3>
          <div className="faq__list-wrapper">
            <div className="faq__row">
              <div className="faq__left">
                <div
                  className="faq__title"
                  onClick={() => toggleAnswerVisibility(0)}
                >
                  How do pricing and subscriptions work?
                </div>
                <div
                  style={{
                    display: activeIndex === 0 ? "block" : "none",
                  }}
                  className="faq__answer"
                >
                  Getting started with Pena is easy-breezy. When you subscribe
                  to Pena, you choose monthly, quarterly, or yearly term. Each
                  term has monthly billing, you will be billed on the date you
                  subscribe and each month thereafter, on the date you
                  subscribed. This subscription pricing will streamline and keep
                  your documentation up to date. P.s. We&rsquo;ll also give you
                  a great deal if you choose a longer term.
                </div>
              </div>
              <Image
                src={Arrow}
                alt=""
                className={`faq__arrow ${activeIndex === 0 ? "rotated" : ""}`}
                onClick={() => toggleAnswerVisibility(0)}
                width={16}
                height={16}
              />
            </div>
            <div className="faq__row">
              <div className="faq__left">
                <div
                  className="faq__title"
                  onClick={() => toggleAnswerVisibility(1)}
                >
                  Why is Pena using a subscription service?
                </div>
                <div
                  style={{
                    display: activeIndex === 1 ? "block" : "none",
                  }}
                  className="faq__answer"
                >
                  Getting started with Pena is easy-breezy. When you subscribe
                  to Pena, you choose monthly, quarterly, or yearly term. Each
                  term has monthly billing, you will be billed on the date you
                  subscribe and each month thereafter, on the date you
                  subscribed. This subscription pricing will streamline and keep
                  your documentation up to date. P.s. We&rsquo;ll also give you
                  a great deal if you choose a longer term.
                </div>
              </div>
              <Image
                src={Arrow}
                alt=""
                className={`faq__arrow ${activeIndex === 1 ? "rotated" : ""}`}
                onClick={() => toggleAnswerVisibility(1)}
                width={16}
                height={16}
              />
            </div>
            <div className="faq__row">
              <div className="faq__left">
                <div
                  className="faq__title"
                  onClick={() => toggleAnswerVisibility(2)}
                >
                  How do you understand what I want with my documentation?
                </div>
                <div
                  style={{
                    display: activeIndex === 2 ? "block" : "none",
                  }}
                  className="faq__answer"
                >
                  Getting started with Pena is easy-breezy. When you subscribe
                  to Pena, you choose monthly, quarterly, or yearly term. Each
                  term has monthly billing, you will be billed on the date you
                  subscribe and each month thereafter, on the date you
                  subscribed. This subscription pricing will streamline and keep
                  your documentation up to date. P.s. We&rsquo;ll also give you
                  a great deal if you choose a longer term.
                </div>
              </div>
              <Image
                src={Arrow}
                alt=""
                className={`faq__arrow ${activeIndex === 2 ? "rotated" : ""}`}
                onClick={() => toggleAnswerVisibility(2)}
                width={16}
                height={16}
              />
            </div>
            <div className="faq__row">
              <div className="faq__left">
                <div
                  className="faq__title"
                  onClick={() => toggleAnswerVisibility(3)}
                >
                  What makes your writers better?
                </div>
                <div
                  style={{
                    display: activeIndex === 3 ? "block" : "none",
                  }}
                  className="faq__answer"
                >
                  Getting started with Pena is easy-breezy. When you subscribe
                  to Pena, you choose monthly, quarterly, or yearly term. Each
                  term has monthly billing, you will be billed on the date you
                  subscribe and each month thereafter, on the date you
                  subscribed. This subscription pricing will streamline and keep
                  your documentation up to date. P.s. We&rsquo;ll also give you
                  a great deal if you choose a longer term.
                </div>
              </div>
              <Image
                src={Arrow}
                alt=""
                className={`faq__arrow ${activeIndex === 3 ? "rotated" : ""}`}
                onClick={() => toggleAnswerVisibility(3)}
                width={16}
                height={16}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
