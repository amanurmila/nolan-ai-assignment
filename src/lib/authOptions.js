// lib/authOptions.js
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

import { loginUser } from "@/app/actions/auth/loginUser";
import { collectionNameObj, dbConnect } from "./dbConnect";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Enter Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await loginUser(credentials);
        console.log(user);

        if (user) {
          return {
            id: user._id.toString(),
            name: user.name,
            email: user.email,
            image: user.image ?? null,
          };
        }

        return null;
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  pages: {
    signIn: "/auth/login",
  },

  callbacks: {
    async signIn({ user, account }) {
      if (account) {
        const { providerAccountId, provider } = account;
        const { email, image, name } = user;

        const userCollection = await dbConnect(collectionNameObj.USERS_COLLECTION);

        const isExist = await userCollection.findOne({ providerAccountId });

        if (!isExist) {
          const payload = {
            providerAccountId,
            provider,
            email,
            image,
            name,
          };
          await userCollection.insertOne(payload);
        }
      }

      return true;
    },
  },
};
