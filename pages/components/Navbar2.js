import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ImageText from "../../public/assets/images/icons/image-star.png";
import Logo from "../../public/assets/images/logo/pena-text.png";
import { getTopNav } from "./topNav";

const Navbar2 = () => {
  const [navItems, setNavItems] = useState([]);
  const [collapse, setCollapse] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("toggler__icon");

  useEffect(() => {
    setNavItems(getTopNav());
  }, []);

  const onToggle = () => {
    collapse === "nav__menu"
      ? setCollapse("nav__menu nav__collapse")
      : setCollapse("nav__menu");

    toggleIcon === "toggler__icon"
      ? setToggleIcon("toggler__icon toggle")
      : setToggleIcon("toggler__icon");
  };

  return (
    <div className="nav__wrapper">
      <div className="container">
        <nav className="nav">
          <a href="#" className="nav__brand">
            <Image src={Logo} alt="Pena logo" />
          </a>
          <ul className={collapse}>
            <li className="nav__item">
              <Link className="nav__link" href={"#home"}>
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" href={"#benefit"}>
                Benefit
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" href={"#work"}>
                Work
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" href={"#pricing"}>
                Pricing
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" href={"#referral"}>
                Referral
              </Link>
            </li>
          </ul>
          <div className={toggleIcon} onClick={onToggle}>
            <div className="line__1"></div>
            <div className="line__2"></div>
            <div className="line__3"></div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar2;
