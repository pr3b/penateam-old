import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div id="home">
      <div className="hero">
        <div class="text-hero">
          <h1>Your go-to documentation partner</h1>
          <p>Quickly scale your technical documentation with our affordable subscription service.</p>
          <a href="#" class="cta-button">Work with us</a>
          <p>Trusted by 30+ companies across the globe.</p>
        </div>
        <div class="image-hero">
          {/* <Image src="path/to/your-image.jpg" alt="Hero Image" width={300} height={200}/> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
