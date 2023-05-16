import Image from "next/image";
import React from "react";

function about() {
  return (
    <div class="container">
      <div className="header">
        <h1>Developing and maintaining technical documentation is a hassle</h1>
        {/* <Image src="/assets/images/about/81.png" width={685} height={125} alt="Header"/> */}
      </div>  
      <p>Pena provides a solution for businesses struggling to hire high-quality technical writers for short-term projects. Say goodbye to unreliable freelancers and expensive commitments by subscribing to Pena for a monthly fee. Our team of expert technical writers can be onboarded quickly and deliver excellent technical documentation at lightning speed, allowing your developers to focus on what really matters - creating great products.</p>
      <div class="card-row">
        <div class="card">
          <Image src="/assets/images/about/82.png" alt="Card 1" width={50} height={50}/>
          <p>Hiring Woes: Pena provides access to skilled technical writers for short-term projects.</p>
        </div>
        <div class="card">
          <Image src="/assets/images/about/83.png" alt="Card 2" width={50} height={50}/>
          <p>Reliable Documentation: Pena`s team of technical writers consistently deliver high-quality documentation, eliminating the problem of unreliable freelancers.</p>
        </div>  
        <div class="card">
          <Image src="/assets/images/about/84.png" alt="Card 3" width={50} height={50}/>
          <p>Time Crunch: Pena`s fast documentation delivery allows businesses to focus on other aspects of their projects.</p>
        </div>
      </div>
    </div>
);

      {/* <div className="about-container font-poppins">
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
      </div> */}
}

export default about;
