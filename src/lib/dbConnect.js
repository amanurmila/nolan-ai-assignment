// ==========================
// lib/dbConnect.js
// ==========================
import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
const dbName = process.env.DB_NAME;

export const collectionNameObj = {
  USERS_COLLECTION: "test-users",
};

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let isConnected = false;

export async function dbConnect(collectionName) {
  if (!isConnected) {
    await client.connect();
    isConnected = true;
  }
  return client.db(dbName).collection(collectionName);
}
