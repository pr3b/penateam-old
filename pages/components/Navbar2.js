import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/assets/images/logo/pena-text.png";

import { useRouter } from "next/router";

const Navbar2 = () => {
  const [collapse, setCollapse] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("toggler__icon");
  const { session_id } = useRouter().query;

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
              <Link className="nav__link" href={"/#home"} scroll={false}>
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" href={"/#benefit"} scroll={false}>
                Benefit
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" href={"/#work"} scroll={false}>
                Work
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" href={"/#pricing"} scroll={false}>
                Pricing
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" href={"/#referral"} scroll={false}>
                Referral
              </Link>
            </li>
            {session_id && (
              <li className="nav__item">
                <Link
                  className="nav__link"
                  href={`/payment-success?session_id=${session_id}`}
                  scroll={false}
                >
                  Payment Success
                </Link>
              </li>
            )}
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
