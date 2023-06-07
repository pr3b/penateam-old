import NextAuth from "next-auth"
// import AppleProvider from "next-auth/providers/apple"
import EmailProvider from "next-auth/providers/email"
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "../../../prisma/shared-client.js";

export default NextAuth({
  // secret: process.env.SECRET,
  adapter: PrismaAdapter(prisma),
  providers: [
    // OAuth authentication providers
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET,
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET,
    // }),
    // GithubProvider({
    //   clientId: process.env.GITHUB_CLIENT_ID,
    //   clientSecret: process.env.GITHUB_CLIENT_SECRET,
    // }),
    // Sign in with passwordless email link
    EmailProvider({
      server: {
        host: process.env.SENDGRID_SMTP_HOST,
        port: Number(process.env.SENDGRID_SMTP_PORT),
        auth: {
          user: 'apikey',
          pass: process.env.SENDGRID_API_KEY
        },
      },
      from: "<no-reply@penateam.com>",
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      session.user.id = user.id;
      return session;
    },
  },
  events: {
    createUser: async ({ user }) => {
      // Create stripe API client using the secret key env variable
      // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      //   apiVersion: "2020-08-27",
      // });

      // // Create a stripe customer for the user with their email address
      // await stripe.customers
      //   .create({
      //     email: user.email,
      //   })
      //   .then(async (customer) => {
      //     // Use the Prisma Client to update the user in the database with their new Stripe customer ID
      //     return prisma.user.update({
      //       where: { id: user.id },
      //       data: {
      //         stripeCustomerId: customer.id,
      //       },
      //     });
      //   });

    }
  },
})