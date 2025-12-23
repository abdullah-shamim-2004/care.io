import { collections, dbConnect } from "@/lib/dbConnect";

export const getServices = async () => {
  try {
    const collection = await dbConnect(collections.SERVICES);

    const services = await collection.find().toArray();

    return services.map((s) => ({
      ...s,
      _id: s._id.toString(),
    }));
  } catch (error) {
    console.error("getServices failed:", error);
    return []; 
  }
};
