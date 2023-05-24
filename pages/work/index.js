import React from "react";
import Footer from "../components/Footer";
import WorkHero from "../components/WorkHero";
import WorkCase from "../components/WorkCase";
import Navbar from "../components/Navbar";

function index() {
  return (
    <>
      <Navbar />
      <WorkHero />
      <WorkCase />
      <Footer />
    </>
  );
}

export default index;
