import Image from "next/image";
import React from "react";
import Logo from "../../public/assets/images/logo/pena-text.png";

function Navbar() {
  return (
    <>
      <nav className="nav-container">
        <Image src={Logo} width={250} height={50} alt="Picture of the author" />
        <ul className="nav-list">
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Work</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
