import Image from "next/image";
import React from "react";
import Logo from "../../public/assets/images/logo/pena-text.png";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <nav id="navbar" class="">
        <div class="nav-wrapper">
          <div class="logo">
            <a href="#home">
              <Image src={Logo} alt="Pena Logo" />
            </a>
          </div>

          <ul id="menu">
            <li>
              <a href="#home">Home</a>
            </li>{" "}
            <li>
              <a href="#services">Services</a>
            </li>{" "}
            <li>
              <a href="#about">About</a>
            </li>{" "}
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
