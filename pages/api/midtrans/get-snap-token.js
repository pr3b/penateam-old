import { NextApiRequest, NextApiResponse } from 'next';
import {MonthlySubscribtionObject} from "../../../utils/midtrans";

const SERVER_KEY = 'SB-Mid-server-TbE_XT4lTt-uXrBI6vVNW4xt';
const AUTH_STRING = Buffer.from(`${SERVER_KEY}:`).toString('base64');

export default async function handler(req, res) {
    const { order_id, amount, redirect_url, subscription } = req.body;
    // order_id max 50, Unique transaction ID. A single ID could be used only once by a Merchant.
    // NOTE: Allowed Symbols are dash(-), underscore(_), tilde (~), and dot (.)

    const apiUrl = 'https://app.sandbox.midtrans.com/snap/v1/transactions';
    const headers = {
        Authorization: `Basic ${AUTH_STRING}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
    };
    const data = {
        credit_card: { secure: true },
        save_card: true,
        user_id: order_id,
        transaction_details: {
            order_id: order_id,
            gross_amount: amount,
        },
        "callbacks": {
            "finish" : redirect_url,
            "unfinish" : redirect_url,
            "error_payment" : redirect_url
        }
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const responseData = await response.json();
        console.log(responseData); // Optional: Log the response data for debugging

        const apiUrlSub = 'https://api.sandbox.midtrans.com/v1/subscriptions';
        const sub_data = MonthlySubscribtionObject(responseData.token, amount, order_id, 'credit_card', {});
        const responseSub = await fetch(apiUrlSub, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(sub_data),
        });
        console.log('responseSub', responseSub); // Optional: Log the response data for debugging
        const responseDataSub = await responseSub.json();
        console.log('responseSubData', responseDataSub); // Optional: Log the response data for debugging

        return res.status(200).json(responseData);
    } catch (error) {
        console.log(apiUrl, data, req.body);
        console.log(error);
        return res.status(500).json({error: "Error"});
    }

}