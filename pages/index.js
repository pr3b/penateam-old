import { useRouter } from "next/router";
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
import PaymentSuccessX from "./PaymentSuccess";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const isPaymentSuccess = router.query.session_id != null;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      {/* <Navbar2 /> */}
      <div>
        {isPaymentSuccess ? (
          <PaymentSuccessX id={isPaymentSuccess} />
        ) : (
          <>
            <Hero />
            <Logo />
            {/* <About /> */}
            <Developing />
            <Brand />
            <div data-aos="fade-up" data-aos-anchor-placement="top-center">
              <Certification />
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center">
              <Webflow />
            </div>
            <Benefit />
            <Work />
            <Collab />
            <Pricing />
            <Referral />
            <FAQ />
            <Footer />
          </>
        )}
      </div>
    </>
  );
}
