import { useRouter } from "next/router";
import Hero from "./components/Hero";
import Brand from "./components/Brand";
import Work from "./components/Work";
import Pricing from "./components/Pricing";
import Logo from "./components/Logo";
import Logo2 from "./components/Logo2";
import Collab from "./components/Collab";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Certification from "./components/Certification";
import Webflow from "./components/Webflow";
import Benefit from "./components/Benefit";
import Developing from "./components/Developing";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";
import FloatingNav from "./components/FloatingNav";
import CustomCursor from "./components/CustomCursor";
import CursorSVG from "../public/assets/images/icons/cursor-pena-01.svg";

//Sucess page
import PaymentSuccessX from "./PaymentSuccess";
import MidtransSuccess from "./MidtransSuccess";

export default function Home() {
  const router = useRouter();
  const isPaymentSuccess = router.query.session_id != null;
  const isMidtransSuccess = router.query.order_id != null
    && router.query.transaction_status != null
    && router.query.status_code == 200;

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
            {/* ({isMidtransSuccess ? <MidtransSuccess /> : null}) */}
            <CustomCursor customCursor={CursorSVG} />
            <Hero />
            {/* <Logo /> */}
            <Logo2 />
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