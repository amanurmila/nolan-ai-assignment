"use server";

import bcrypt from "bcrypt";
import { collectionNameObj, dbConnect } from "@/lib/dbConnect";

export const loginUser = async (payload) => {
  const { email, password } = payload;

  const userCollection = await dbConnect(collectionNameObj.USERS_COLLECTION);
  const user = await userCollection.findOne({ email });

  if (!user) return null;

  const isPasswordOK = await bcrypt.compare(password, user.password);
  if (!isPasswordOK) return null;

  return user;
};
