import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

if (!uri || !dbName) {
  throw new Error("Please add your MongoDB URI and DB_NAME in the env file.");
}

// Collection names
export const collections = {
  SERVICES: "services",
  USERS: "users",
};

// MongoClient singleton
let client;
let db;

const connectDB = async () => {
  if (db) return db; // return existing db

  if (!client) {
    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
  }

  try {
    await client.connect();
    console.log("MongoDB connected.");
    db = client.db(dbName);
    return db;
  } catch (error) {
    console.error("MongoDB connection failed", error);
    throw error;
  }
};

// Return a collection ready to use
export const dbConnect = async (collectionName) => {
  const database = await connectDB(); 
  return database.collection(collectionName);
};
