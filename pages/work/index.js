import React from "react";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import WorkHero from "../components/WorkHero";
import WorkCase from "../components/WorkCase";
import Navbar from "../components/Navbar";

function index() {
  return (
    <>
      {/* <Navbar2 /> */}
      <Navbar />
      <WorkHero />
      <WorkCase />
      <Footer />
    </>
  );
}

export default index;
