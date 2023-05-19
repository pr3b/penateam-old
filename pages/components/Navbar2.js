import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ImageText from "../../public/assets/images/icons/image-star.png";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div class="container nav">
      <div>
        <Image className="brand-image-bg" src={ImageText} alt="Shape icon" />
      </div>
      <div>
        <nav role="navigation" class="nav-menu w-nav-menu">
          <a
            href="https://www.figma.com/proto/xMf3kagAMyUSNulcEMNUAU/Sample-Work?page-id=0%3A1&amp;node-id=1%3A2&amp;viewport=252%2C48%2C0.25&amp;scaling=min-zoom&amp;starting-point-node-id=1%3A2"
            target="_blank"
            class="nav__link w-nav-link"
          >
            Latest projects
          </a>
          <a href="#pricing-3" class="nav__link w-nav-link">
            Pricing
          </a>
          <a
            href="https://intercom.help/designjoy/en/"
            target="_blank"
            class="nav__link w-nav-link"
          >
            FAQs
          </a>
          <a href="/log-in" ms-hide-element="true" class="nav__link w-nav-link">
            Login
          </a>
          <a href="/log-in" ms-profile="true" class="nav__link w-nav-link">
            My account
          </a>
        </nav>
        <div class="menu-button w-nav-button">
          <div class="w-icon-nav-menu"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
