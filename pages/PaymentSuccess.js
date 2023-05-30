import React, {useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import LoadingComponent from './components/utils/Loading';
import { soldTracker } from '@/utils/stripe';

const PaymentSuccessX = ({ id }) => {
  const router = useRouter();
  const { session_id, product_id } = router.query;
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    if (session_id && email) {
      sendConfirmationEmail(email, session_id, amount, userName, invoice, date);
    }
  }, [session_id, email, amount, userName, invoice, date]);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const response = await axios.get(`/api/checkout_sessions/${session_id}`);
        const session = response.data;
        soldTracker(product_id, 1);
        setUsername(session.customer_details.name)
        setEmail(session.customer_details.email);
        setAmount(formatAmount(session.amount_total))
        setInvoice(session.invoice)
        setDate(formatDate(session.created))
        setLoading(false);
      } catch (error) {
        console.error('Error fetching session:', error);
      }
    };

    if (session_id) {
      fetchSession();
    }
  }, [session_id, product_id]);

  const sendConfirmationEmail = async (email, session_id, amount, userName, invoice, date) => {
    try {
      await axios.post("/api/mail", { email, session_id, amount, userName, invoice, date });
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const handleGoHome = () => {
    router.push('/');
  };

  if (loading) {
    return <LoadingComponent string={"Payment"} status={"processing"}/>;
  }

  if (id) {
    return (
      <div className="dialog">
        <h1>Payment Successful!</h1>
        <p>You can go to check your Email!</p>
        <p>Email: {email}</p>
        <p>Session ID: {session_id.slice(0, 20) + `...`}</p>
        <button onClick={handleGoHome}>Go to Homepage</button>

        <style jsx>{`
          .dialog {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 20px;
            background-color: #f5f5f5;
            border-radius: 10px;
            margin: 10%;
          }
          .dialog h1 {
            font-size: 32px;
            font-weight: bold;
            color: #333;
            margin-bottom: 10px;
            text-align: center;
          }
          .dialog p {
            font-size: 18px;
            color: #666;
            margin-bottom: 10px;
            text-align: center;
          }
          .dialog button {
            font-size: 16px;
            padding: 10px 20px;
            background-color: #333;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
        `}</style>
      </div>
    );
  }
};

export default PaymentSuccessX;
