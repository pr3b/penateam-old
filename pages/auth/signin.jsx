import { useState } from "react";
import { getProviders,signIn } from "next-auth/react";
import CustomCursor from "../components/CustomCursor";
import CursorSVG from "../../public/assets/images/icons/cursor-pena-01.svg"
import LoadingOverlay from "../components/utils/LoadingOverlay";

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
    <div className="flex items-center justify-center min-h-screen bg-amber-500 relative">
      <CustomCursor customCursor={CursorSVG} />
      {/* Left side with the image */}
      <div className="w-2/3">
        <img
          className="object-cover h-screen w-full"
          src="https://via.placeholder.com/600x800" // Replace this with your image URL
          alt="Sign in"
        />
      </div>

      {/* Right side with email form and button */}
      <div className="w-1/3 flex flex-col justify-center items-center p-8 rounded-md">
        <div className='bg-white p-8 w-full rounded-2xl'>
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
        <div className="my-4 text-center text-white text-l font-normal absolute bottom-0 w-full">
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
