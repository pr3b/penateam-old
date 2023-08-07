import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import PenaLogo from "../../public/assets/images/logo/pena-text.png";

import CustomCursor from '../components/CustomCursor'
import CursorSVG from "../../public/assets/images/icons/cursor-pena-01.svg"

export default function VerifyRequest() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    // If the user is already signed in, redirect to the home page or any other page
    if (session) {
      router.push('/dashboard'); // Replace this with the desired destination
    }
  }, [session, router]);

  const handleResendVerificationEmail = async () => {
    await signIn('email', { callbackUrl: '/' }); // Replace '/' with the desired callback URL
  };

  return (
    <div className="min-h-screen flex bg-white items-center justify-center">
      <CustomCursor customCursor={CursorSVG} />
      <div className="text-center w-[35%] border p-8 border-solid rounded-xl bg-amber-500">
        <h1 className="text-2xl pb-2 border-b-2 text-white font-semibold mb-4">Verify Your Email</h1>
        <p className="text-sm mb-4 text-white">
          We`ve sent an email to your registered email address. Click the link in the email to
          verify your account.
        </p>
        <button
          onClick={handleResendVerificationEmail}
          className="bg-slate-500 text-white py-2 px-4 rounded-lg hover:bg-slate-600 cursor-not-allowed pointer-events-none"
        >
          Resend Verification Email
        </button>
      </div>
      {/* <div className="flex flex-col items-center justify-center">
        <Image 
          src={PenaLogo}
          width={200}
          height={200}
          alt='Pena logo'
        />
      </div> */}
    </div>
  );
}
