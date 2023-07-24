import { cancelSubscription } from "@/utils/stripe";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function handler(req, res){
  const session = await getServerSession(req, res, authOptions);
  const {subscription_id} = req.body;

  if(!session){
    res.status(401).json({message: "You must be logged in!"});
    return;
  }

  const subscription = await cancelSubscription(subscription_id);

  if(!subscription){
    res.status(500).json({error: "Error cancel subscription"});
  }

  return res.json(subscription)
}