import React, {useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import LoadingComponent from './components/utils/Loading';
import { soldTracker } from '@/utils/stripe';

const PaymentSuccessX = ({ id }) => {
  const router = useRouter();
  const { session_id, product_id } = router.query;
  const [loading, setLoading] = useState(true);
  const [loginUrl, setLoginUrl] = useState('')
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('')
  const [userName, setUsername] = useState('')
  const [invoice, setInvoice] = useState('')
  const [date, setDate] = useState()
  
  const formatAmount = (data) => {
    return (data / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const formattedDate = date.toLocaleDateString();
    return formattedDate;
  };

  const redirect = useCallback(() => {
    router.push(loginUrl);
  }, [router, loginUrl])

  useEffect(() => {
    if (session_id && email) {
      sendConfirmationEmail(email, session_id, amount, userName, invoice, date)
        .then(() => {
          setLoading(false)
          redirect()
        })
    }
  }, [session_id, email, amount, userName, invoice, date, redirect]);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const response = await axios.get(`/api/checkout_sessions/${session_id}`);
        const session = response.data.session;
        soldTracker(product_id, 1);
        setUsername(session.customer_details.name)
        setEmail(session.customer_details.email);
        setAmount(formatAmount(session.amount_total))
        setInvoice(session.invoice)
        setDate(formatDate(session.created))
        let url = response.data.url;
        url.replace("callbackUrl", new URLSearchParams({callbackUrl: "/my-subscription&"}));
        setLoginUrl(url)
      } catch (error) {
        console.error('Error fetching session:', error);
      }
    };

    fetchSession();
  }, [session_id, product_id]);

  const sendConfirmationEmail = async (email, session_id, amount, userName, invoice, date) => {
    try {
      await axios.post("/api/mail", { email, session_id, amount, userName, invoice, date });
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  // const handleGoHome = () => {
  //   router.push(loginUrl);
  // };

  

  if (loading) {
    return <LoadingComponent string={"Payment"} status={"processing"}/>;
  }
};

export default PaymentSuccessX;
