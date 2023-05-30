import React from "react";
import Footer from "../components/Footer";
import WorkHero from "../components/WorkHero";
import WorkCase from "../components/WorkCase";
import Navbar from "../components/Navbar";
import CursorSVG from "../../public/assets/images/icons/cursor-pena-01.svg";
import CustomCursor from "../components/CustomCursor";
import FloatingNav from "../components/FloatingNav";

function index() {
  return (
    <>
      <FloatingNav />
      <CustomCursor customCursor={CursorSVG} />
      <WorkHero />
      <WorkCase />
      <Footer />
    </>
  );
}

export default index;
