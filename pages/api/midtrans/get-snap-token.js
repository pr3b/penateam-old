import { NextApiRequest, NextApiResponse } from 'next';
import {MonthlySubscribtionObject} from "../../../utils/midtrans";
import { prismaData } from '../auth/[...nextauth]';
import { AUTH_STRING } from '../../../utils/midtrans';

export default async function handler(req, res) {
    const { order_id, amount, redirect_url, subscription, customer_details, item_details } = req.body;
    // order_id max 50, Unique transaction ID. A single ID could be used only once by a Merchant.
    // NOTE: Allowed Symbols are dash(-), underscore(_), tilde (~), and dot (.)

    const apiUrl = 'https://app.sandbox.midtrans.com/snap/v1/transactions';
    const headers = {
        Authorization: `Basic ${AUTH_STRING}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
        "X-Append-Notification": "https://pena.vercel.app/api/log/log",
    };
    const data = {
        credit_card: { secure: true },
        save_card: true,
        user_id: order_id,
        transaction_details: {
            order_id: order_id,
            gross_amount: amount,
        },
        // item_details: [
        //     {
        //         id: "ITEM001",
        //         price: amount,
        //         quantity: 1,
        //         name: "Product 1",
        //     },
        // ],
        item_details: [
            {
                id: item_details.id,
                price: item_details.price,
                quantity: item_details.quantity,
                name: item_details.name,
            },
        ],
        customer_details: {
            first_name: customer_details.first_name,
            last_name: customer_details.last_name,
            email: customer_details.email,
            phone: customer_details.phone,
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
        console.error('responseData', responseData); // Optional: Log the response data for debugging
        console.log(responseData); // Optional: Log the response data for debugging

        const apiUrlSub = 'https://api.sandbox.midtrans.com/v1/subscriptions';
        const sub_data = MonthlySubscribtionObject(
            responseData.token, 
            amount, 
            order_id, 
            item_details.interval, 
            item_details.itemPlan
        );
        const responseSub = await fetch(apiUrlSub, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(sub_data),
        });

        // if (!responseSub.ok) {
        //     throw new Error('Subscription request failed');
        // }

        // console.log('responseSub', responseSub); // Optional: Log the response data for debugging
        const responseDataSub = await responseSub.json();
        console.log('responseSubData', responseDataSub); // Optional: Log the response data for debugging

        //input data to database
        const inputDB = await createSubscriptionAndTransactions(
            responseDataSub.id,
            responseDataSub.schedule.next_execution_at,
            responseDataSub.status,
            responseDataSub.payment_type,
            order_id,
            amount,
        );

        return res.status(200).json(responseData);
    } catch (error) {
        console.log(apiUrl, data, req.body);
        console.log(error);
        return res.status(500).json({error: "Error"});
    }
}

async function createSubscriptionAndTransactions(subscription_id, schedule_next_execution_at, status, payment_type, orderId, gross_amount){
    try {
        const subscription = await prismaData.subscription.create({
            data: {
                id: subscription_id,
                schedule_next_execution_at: schedule_next_execution_at,
                status: status,
                payment_type: payment_type,
                trans: {
                    create: [
                        {orderId: orderId, gross_amount: gross_amount},
                    ],
                },
            },
        });
       console.log('subscription', subscription); 
    } catch (error) {
        console.error("Error creating subscription",error);
    } finally {
        await prismaData.$disconnect();
    }
}