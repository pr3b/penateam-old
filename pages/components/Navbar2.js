import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ImageText from "../../public/assets/images/icons/image-star.png";

const Navbar2 = () => {
  return (
    <>
      <div>
        <input type="checkbox" id="active" />
        <label for="active" class="menu-btn">
          <i class="fas fa-bars"></i>
        </label>
        <div class="wrapper">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Feedback</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar2;
