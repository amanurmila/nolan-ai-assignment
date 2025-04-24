// ==========================
// app/actions/auth/registerUser.js
// ==========================
"use server";
import bcrypt from "bcrypt";
import { dbConnect, collectionNameObj } from "@/lib/dbConnect";

export const registerUser = async (payload) => {
  const userCollection = await dbConnect(collectionNameObj.USERS_COLLECTION);

  const { email, password } = payload;
  if (!email || !password) return { success: false };

  const existingUser = await userCollection.findOne({ email });
  if (existingUser) return { success: false };

  const hashedPassword = await bcrypt.hash(password, 10);
  await userCollection.insertOne({ ...payload, password: hashedPassword });

  return { success: true };
};
