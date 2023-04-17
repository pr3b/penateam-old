import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/Service";
import Work from "./components/Work";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Logo from "./components/Logo";

export default function Home() {
  return (
    <div className="component-container">
      <Navbar />
      <Hero />
      <Logo />
      <About />
      <Service />
      <Work />
      <Pricing />
      <Contact />
    </div>
  );
}
