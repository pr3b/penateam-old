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
    <>
    <svg preserveAspectRatio="xMidYMid slice" viewBox="10 10 80 80">
      <defs>
        <style>
          {`
            body {
              background-color: #fee440;
            }
            svg {
              position: fixed;
              z-index: -1;
              top: 0;
              left: 0;
              width: 100%;
              height: 100vh;
            }
            @keyframes rotate {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }
            .out-top {
              animation: rotate 20s linear infinite;
              transform-origin: 13px 25px;
            }
            .in-top {
              animation: rotate 10s linear infinite;
              transform-origin: 13px 25px;
            }
            .out-bottom {
              animation: rotate 25s linear infinite;
              transform-origin: 84px 93px;
            }
            .in-bottom {
              animation: rotate 15s linear infinite;
              transform-origin: 84px 93px;
            }
          `}
        </style>
      </defs>
      <path
        fill="#91d0d6"
        className="out-top"
        d="M37-5C25.1-14.7,5.7-19.1-9.2-10-28.5,1.8-32.7,31.1-19.8,49c15.5,21.5,52.6,22,67.2,2.3C59.4,35,53.7,8.5,37-5Z"
      />
      <path
        fill="#e8580b"
        className="in-top"
        d="M20.6,4.1C11.6,1.5-1.9,2.5-8,11.2-16.3,23.1-8.2,45.6,7.4,50S42.1,38.9,41,24.5C40.2,14.1,29.4,6.6,20.6,4.1Z"
      />
      <path
        fill="#efa4a4"
        className="out-bottom"
        d="M105.9,48.6c-12.4-8.2-29.3-4.8-39.4.8-23.4,12.8-37.7,51.9-19.1,74.1s63.9,15.3,76-5.6c7.6-13.3,1.8-31.1-2.3-43.8C117.6,63.3,114.7,54.3,105.9,48.6Z"
      />
      <path
        fill="#212121"
        className="in-bottom"
        d="M102,67.1c-9.6-6.1-22-3.1-29.5,2-15.4,10.7-19.6,37.5-7.6,47.8s35.9,3.9,44.5-12.5C115.5,92.6,113.9,74.6,102,67.1Z"
      />
    </svg>
    
    <div className="min-h-screen flex flex-col items-center justify-center">
      <CustomCursor customCursor={CursorSVG} />
      <div className="text-center w-[80%] md:w-[35%] border p-8 border-solid rounded-xl bg-amber-500">
        <h1 className="text-2xl pb-2 border-b-2 text-white font-semibold mb-4">Verify Your Email</h1>
        <p className="text-sm mb-4 text-white">
          We`ve sent an email to your registered email address. Click the link in the email to
          verify your account.
        </p>
        <button
          onClick={handleResendVerificationEmail}
          className="bg-white text-amber-500 py-2 px-4 rounded-lg hover:bg-slate-600 cursor-not-allowed pointer-events-none"
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
    <Image className='mt-5' src={PenaLogo} alt="Pena Logo" width={75} height={75} />
    </div>
    </>
  );
}
