import { useState } from "react";
import { getProviders,signIn } from "next-auth/react";
import CustomCursor from "../components/CustomCursor";
import CursorSVG from "../../public/assets/images/icons/cursor-pena-01.svg"
import LoadingOverlay from "../components/utils/LoadingOverlay";
import Logo from '../../public/assets/images/logo/pena-text.png'
import ImageBanner from '../../public/assets/images/icons/work-hero-2.png'
import Rectangle from '../../public/assets/images/icons/rectangle-372.png'
import Rectangle2 from '../../public/assets/images/icons/rectangle-373.png'
import Rectangle3 from '../../public/assets/images/icons/rectangle-375.png'
import Rectangle4 from '../../public/assets/images/icons/rectangle-374.png'
import Image from "next/image";

export default function SignIn({ providers }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false); // Added loading state


  const handleSignIn = async (e, provider) => {
    e.preventDefault();
    setLoading(true)
    if (provider === "email") {
      await signIn("email", { email, callbackUrl: `${window.location.origin}/dashboard` });
    } else {
      await signIn(provider);
    }
    setLoading(false); // Reset loading state after sign-in
  };

  return (
    <div className="flex flex-col md:flex-row justify-center min-h-screen bg-amber-500 relative">
      <CustomCursor customCursor={CursorSVG} />
      {/* Left side with the image */}
      <div className="md:w-2/3 flex justify-center items-center bg-transparent md:bg-white">
        <div className="flex flex-col justify-center items-center mb-20 mt-20 relative z-20">
          <Image className="w-[100px] pb-8 relative z-20" src={Logo} alt="Pena Logo"/>
          <Image className="w-[300px] md:w-[500px] relative z-20" src={ImageBanner} alt="Image Banner"/>
          <Image className="w-[200px] md:w-[350px] absolute z-10" src={Rectangle} alt="Rectangle Shape"/>
        </div>
      </div>

      {/* Right side with email form and button */}
        <Image className="w-[100px] md:w-[150px] absolute z-10 top-0 right-5 md:right-72" src={Rectangle2} alt="Image Banner"/>
        <Image className="w-[125px] absolute z-10 bottom-20 right-44 md:right-44" src={Rectangle3} alt="Image Banner"/>
        <Image className="w-[150px] absolute z-10 bottom-20 right-0" src={Rectangle4} alt="Image Banner"/>
      <div className="md:w-1/3 flex flex-col justify-center items-center p-8 rounded-md">
        <div className='bg-white p-8 w-full rounded-2xl relative z-10 mb-10'>
          <form className="w-full space-y-4">
            <input
              className="border bg-gray-200 border-slate-100 rounded-2xl py-3 px-4 text-slate-400 text-sm font-medium focus:outline-none focus:border-amber-500 w-full"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="relative w-full">
              <div className="absolute inset-0 bg-amber-500 opacity-50 rounded-2xl"></div>
              {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                  <button
                    className="relative w-full py-3 bg-amber-500 rounded-2xl text-white text-sm font-semibold uppercase"
                    onClick={(e) => handleSignIn(e, provider.id)}
                  >
                    SIGN IN WITH {provider.name}
                  </button>
                </div>
              ))}
            </div>
          </form>
        </div>
          

        {/* All rights reserved text */}
        <div className="my-4 text-center text-white text-l font-normal absolute bottom-0">
          All rights reserved 2023 © Pena
        </div>
        {loading ? <LoadingOverlay event={"Sign In"} />: null}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  return { props: { providers: await getProviders() } };
}
