import { useState } from "react";
import { getProviders,signIn } from "next-auth/react";

export default function SignIn({ providers }) {
  const [email, setEmail] = useState("");

  const handleSignIn = (e, provider) => {
    e.preventDefault();
    if (provider === "email") {
      signIn("email", { email });
    } else {
      signIn(provider);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="signInWith">
            Sign in with
          </label>
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                onClick={(e) => handleSignIn(e, provider.id)}
              >
                {provider.name}
              </button>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}

export async function getServerSideProps(context) {
  return { props: { providers: await getProviders() } };
}
