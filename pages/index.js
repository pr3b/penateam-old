import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/Service";
import Work from "./components/Work";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <div className="font-poppins">
        <Navbar />
        <Hero />
        <About />
        <Service />
        <Work />
        <Pricing />
        <Contact />
      </div>
    </div>
  );
}
