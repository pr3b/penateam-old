import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {MonthlySubscribtionObject} from "../utils/midtrans";

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
    <div className="max-w-sm mx-auto">
      {/* First Name */}
      <div className="mb-6">
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      {/* Last Name */}
      <div className="mb-6">
        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      {/* Email */}
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
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
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      {/* Submit button */}
      <button
        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        onClick={() => handleProductClickMidtrans(MonthlySubscribtionObject, itemDetail)}
      >
        Clicked
      </button>
    </div>
  );
};

export default CustomerDetailForm;
