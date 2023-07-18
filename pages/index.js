import { useRouter } from "next/router";
import Hero from "./components/Hero";
import Brand from "./components/Brand";
import Work from "./components/Work";
import Pricing from "./components/Pricing";
import Logo from "./components/Logo";
import Collab from "./components/Collab";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Certification from "./components/Certification";
import Webflow from "./components/Webflow";
import Benefit from "./components/Benefit";
import Developing from "./components/Developing";
import PaymentSuccessX from "./PaymentSuccess";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";
import FloatingNav from "./components/FloatingNav";
import CustomCursor from "./components/CustomCursor";
import CursorSVG from "../public/assets/images/icons/cursor-pena-01.svg";

export default function Home() {
  const router = useRouter();
  const isPaymentSuccess = router.query.session_id != null;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <FloatingNav />
      <div>
        {isPaymentSuccess ? (
          <PaymentSuccessX id={isPaymentSuccess} />
        ) : (
          <>
            <CustomCursor customCursor={CursorSVG} />
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
            {/* <Collab /> */}
            <Pricing />
            <FAQ />
            <Footer />
          </>
        )}
      </div>
    </>
  );
}
