import NextAuth from "next-auth"
// import AppleProvider from "next-auth/providers/apple"
import EmailProvider from "next-auth/providers/email"
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "../../../prisma/shared-client.ts";

export const prismaData = prisma;
export const adapterData = PrismaAdapter(prismaData);
export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  adapter: adapterData,
  pages: {
    signIn: '/auth/signin',
    verifyRequest: '/auth/verify-request',
  },
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
      from: "hello@penateam.com",
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      session.user.id = user.id;
      session.user.email = user.email;
      return session;
    },
  },
  events: {
    createUser: async ({ user }) => {
    }
  },
}

export default NextAuth(authOptions)