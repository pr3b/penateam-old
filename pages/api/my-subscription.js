import { authOptions } from "./auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { getListOfCheckoutSessions } from "@/utils/stripe";

export default async function handler(req, res){
  const session = await getServerSession(req, res, authOptions);

  if(!session){
    res.status(401).json({message: "You must be logged in"});
    return;
  }
  
  const data = await getListOfCheckoutSessions(session.user.email);
  return res.json(data)
}