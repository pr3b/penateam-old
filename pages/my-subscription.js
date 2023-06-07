import React, {useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import LoadingComponent from './components/utils/Loading';
import { getListOfCheckoutSessions } from "@/utils/stripe";

import { useSession, signIn, signOut } from "next-auth/react" //tambahan

export default function MySubscriptionsPage(){
    const {data, status} = useSession()
    const [loading, setLoading] = useState(true);
    const [subscriptions, setSubscripstions] = useState([]);

    const fetchSubscriptionData = () => {
        console.log(data);
        setSubscripstions(getListOfCheckoutSessions(data.user.email))
    }

    useEffect(() => {
        fetchSubscriptionData()
    })

    if (loading) {
        return <LoadingComponent string={"My Subscriptions"} status={"loading"}/>;
    }


    return (
        <pre>{JSON.stringify(data, null, 2)}</pre>
    )
}