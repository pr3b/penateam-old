import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/Service";
import Work from "./components/Work";
import Pricing from "./components/Pricing";
import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import Passion from "./components/Passion";
import Testimonials from "./components/Testimonials";
import Collab from "./components/Collab";
import Referral from "./components/Referral";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="component-container">
        <Navbar />
        <Hero />
        <Logo />
        <About />
        <Service />
        <Passion />
        <Testimonials />
        <Work />
        <Collab />
        <Pricing />
        <Referral />
        <FAQ />
        <Footer />
      </div>
    </>
  );
}
