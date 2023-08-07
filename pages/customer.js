import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {MonthlySubscribtionObject} from "../utils/midtrans";
import Image from 'next/image';
import PenaLogo from "../public/assets/images/logo/pena-text.png";

const CustomerDetailForm = () => {
  const router = useRouter();
  const { idItem, amount, quantity, name } = router.query;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const itemDetail = {
    id: idItem,
    price: amount,
    quantity: quantity,
    name: name,
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(firstName, lastName, email, phone);
  };

  const handleProductClickMidtrans = async (subsObject, itemDetail) => {
    try {
      const today = new Date();
      const yyyy = today.getFullYear();
      let mm = today.getMonth() + 1;
      let dd = today.getDate();
      let hours = today.getHours();
      let minutes = today.getMinutes();
      let seconds = today.getSeconds();

      const order_id = `ORDER_${yyyy}-${mm}-${dd}_${hours}${minutes}${seconds}`;
      const callback_success_url = `${window.location.origin}/`;

      console.log(callback_success_url, "origint url")

      const response = await fetch('/api/midtrans/get-snap-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          order_id, 
          amount: itemDetail.price,
          redirect_url: callback_success_url, 
          subscription: subsObject,
          customer_details: {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone: phone,
          },
          item_details: {
            id: itemDetail.id,
            price: itemDetail.price,
            quantity: itemDetail.quantity,
            name: itemDetail.name,
          }
        }),
      });
      const json = await response.json();
      window.location.href = json.redirect_url;

      console.log('set response', json)
    } catch (error) {
      console.error("Error fetching snap token:", error);
    }
  }

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
    <div className="py-8 md: px-8">
      <div className="flex justify-center">
        <h3 className="font-bold text-3xl mb-8 text-white md:text-4xl">Payment Form</h3>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {/* First Name */}
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Phone */}
          <div className="mb-6">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          {/* Submit button */}
          <button
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            onClick={() => handleProductClickMidtrans(MonthlySubscribtionObject, itemDetail)}
          >
            Clicked
          </button>
        </div>
        <Image src={PenaLogo} alt="Pena Logo" width={75} height={75} />
      </div>
    </div>
  </>
  );
};

export default CustomerDetailForm;
