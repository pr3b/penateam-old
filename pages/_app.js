import "@/styles/globals.css";
import "@/styles/loading.css";
import "@/styles/modal.css";
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';
import {SessionProvider} from "next-auth/react";

export default function App({ 
  Component, 
  pageProps: {
    session, 
    ...pageProps
  } 
}) {
  return(
    <SessionProvider session={session}>
      <ToastContainer autoClose={3000} />
      <Component {...pageProps} />
    </SessionProvider>
  ) 
}
