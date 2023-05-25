import Hero from "./components/Hero";
import About from "./components/About";
import Brand from "./components/Brand";
import Work from "./components/Work";
import Pricing from "./components/Pricing";
import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import Collab from "./components/Collab";
import Referral from "./components/Referral";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Certification from "./components/Certification";
import Webflow from "./components/Webflow";
import Benefit from "./components/Benefit";
import Developing from "./components/Developing";
import Navbar2 from "./components/Navbar2";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <Navbar2 /> */}
      <Hero />
      <Logo />
      <Developing />
      <Brand />
      <Certification />
      <Webflow />
      <Benefit />
      <Work />
      <Collab />
      <Pricing />
      <Referral />
      <FAQ />
      <Footer />
    </>
  );
}
