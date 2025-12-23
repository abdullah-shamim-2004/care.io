import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.MONGODB_URI;
const dbname = process.env.DB_NAME;
// error handaling
if (!uri || !dbname) {
  throw new Error("Please add your mongodb uri in env file.");
}
export const collections = {
  SERVICES: "services",
};

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
let db = null;
// connect with database
const connectDB = async () => {
  if (db) return db;
  try {
    await client.connect();
    console.log("MongoDB connected.");
    db = client.db(dbname);
    return db;
  } catch (error) {
    console.error("MongoDB connection failed", error);
    throw error;
  }
};
// Get collection
export const dbConnect = async (collectionname) => {
  const database = await connectDB();
  return database.collection(collectionname);
};
