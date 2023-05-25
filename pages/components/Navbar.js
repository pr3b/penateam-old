import { useRef } from "react";
import { useRouter } from "next/router";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/assets/images/logo/pena-text.png";

function Navbar() {
  const navRef = useRef();
  const { session_id } = useRouter().query;

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const closeNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  return (
    <header>
      <div className="nav-logo">
        <Link href="https://penateam.com/">
          <Image src={Logo} alt="Pena logo" />
        </Link>
      </div>
      <nav ref={navRef}>
        <Link
          className="nav-menu"
          href="/#home"
          onClick={closeNavbar}
          scroll={false}
        >
          Home
        </Link>
        <Link
          className="nav-menu"
          href="/#benefit"
          onClick={closeNavbar}
          scroll={false}
        >
          Benefit
        </Link>
        <Link
          className="nav-menu"
          href="/#work"
          onClick={closeNavbar}
          scroll={false}
        >
          Work
        </Link>
        <Link
          className="nav-menu"
          href="/#pricing"
          onClick={closeNavbar}
          scroll={false}
        >
          Pricing
        </Link>
        <Link
          className="nav-menu"
          href="/#referral"
          onClick={closeNavbar}
          scroll={false}
        >
          Referral
        </Link>
        {session_id && (
          <Link
            className="success"
            href={`/payment-success?session_id=${session_id}`}
            scroll={false}
          >
            .
          </Link>
        )}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
