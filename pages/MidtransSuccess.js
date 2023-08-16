import React, {useRef, useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import LoadingComponent from './components/utils/Loading';
import { useSession, signIn, signOut } from 'next-auth/react';

const MidtransSuccess = () => {
    const router = useRouter();
    const {data: session} = useSession();
    const [isLoading, setIsLoading] = useState(true);
    const checked = useRef(null);

    useEffect(() => {
      if(checked.current == null){
        checked.current = "checked";
        if(session){
          router.push(loginUrl);
        } else if(router.query.provider != null && router.query.token != null){
          fetch("/api/midtrans/success-payment-check", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              order_id: router.query.order_id,
              status: router.query.transaction_status,
            }),
          })
          .then((res) => res.json())
          .then(data => {
            const params = new URLSearchParams({callbackUrl: "/dashboard", token: router.query.token, email: data.email});
            const urlValidationLoginEmail = `/api/auth/callback/${router.query.provider}?${params}`;
            router.push(urlValidationLoginEmail);
            console.log("API Response", data.email);
          })
          .catch(error => {
            console.error("API Error:", error)
          });
        }
      }
    }, [router, session]);

    return (isLoading? <LoadingComponent string={"Payment"} status={"processing"}/> : "");
};

export default MidtransSuccess;