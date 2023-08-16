import { getServerSession } from "next-auth";
import { authOptions, adapterData, prismaData } from "../auth/[...nextauth]";
import { AUTH_STRING } from "@/utils/midtrans";

export default async function handler(req, res){
  if(req.method !== "POST"){
    return res.statu(405).json({error: "Method not allowed"});
  }

  const session = await getServerSession(req, res, authOptions);
  const provider = authOptions.providers.find((item) => item.type == "email");
  const callbackUrl = "/dashboard";
  if(typeof provider == "undefined"){
    return res.status(500).json({error: "Email provider not found"});
  }
  const {order_id, status} = req.body;

  try {
    const email = await getUserEmailByTransactionOrderId(order_id);
    console.log(email);

    return res.status(200).json({message: "Success", email: email});
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({error: "Internal Server Error"});
  }
}

async function getUserEmailByTransactionOrderId(order_id){
  try {
    const subscription = await prismaData.subscription.findUnique({
      where: {
        trans: {
          some: {
            orderId: order_id
          }
        }
      },
      include: {
        user: true
      }
    });

    if(subscription){
      return subscription
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching user email", error);
    return null;
  } finally {
    await prismaData.$disconnect();
  }
}