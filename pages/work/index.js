import React from "react";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import WorkHero from "../components/WorkHero";
import WorkCase from "../components/WorkCase";

function index() {
  return (
    <>
      <Navbar2 />
      <WorkHero />
      <WorkCase />
      <Footer />
    </>
  );
}

export default index;
