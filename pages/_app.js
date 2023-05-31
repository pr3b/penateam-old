import "@/styles/globals.css";
import "@/styles/loading.css";
import "@/styles/modal.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  return(
    <>
      <ToastContainer autoClose={3000} />
      <Component {...pageProps} />
    </>
  ) 
}
