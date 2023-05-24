import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const PaymentSuccessX = ({ id }) => {
  const router = useRouter();
  const { session_id } = router.query;
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const response = await axios.get(`/api/checkout_sessions/${session_id}`);
        const session = response.data;
        setEmail(session.customer_details.email);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching session:', error);
      }
    };

    if (session_id) {
      fetchSession();
    }
  }, [session_id]);

  const handleGoHome = () => {
    router.push('/');
  };

  if (loading) {
    return <p>Loading...</p>;
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
