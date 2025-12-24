import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

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
export const getSingleService = async (id) => {
  try {
    if (!ObjectId.isValid(id)) return null;
    const collection = await dbConnect(collections.SERVICES);
    const service = await collection.findOne({ _id: new ObjectId(id) });
    return service ? { ...service, _id: service._id.toString() } : null;
  } catch (error) {
    console.error("Error fetching service", error);
    return null;
  }
};
