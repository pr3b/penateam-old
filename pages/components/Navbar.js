import Image from "next/image";
import React from "react";
import Logo from "../../public/assets/images/logo/pena-text.png";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <nav className="nav-container">
        <Image src={Logo} width={250} height={50} alt="Picture of the author" />
        <ul className="nav-list">
          <Link href="#home">
            <li>Home</li>
          </Link>
          <Link href="#benefit">
            <li>Benefit</li>
          </Link>
          <Link href="#work">
            <li>Recent Work</li>
          </Link>
          <Link href="#pricing">
            <li>Pricing</li>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
