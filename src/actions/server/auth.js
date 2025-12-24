"use server";
import bcrypt from "bcryptjs";
import { collections, dbConnect } from "@/lib/dbConnect";

export const postUser = async (payload) => {
  try {
    const { nid, name, email, password } = payload;

    // Validate payload
    if (!email || !password) {
      return { success: false, message: "Email and password are required" };
    }

    //  Connect to users collection
    const usersCollection = await dbConnect(collections.USERS);

    // Check if user already exists
    const isExist = await usersCollection.findOne({ email });
    if (isExist) {
      return { success: false, message: "User already exists!" };
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 14);

    // Create new user object
    const newUser = {
      providerId: "credentials",
      nid,
      name,
      email,
      password: hashedPassword,
      role: "user",
      createdAt: new Date(),
    };

    // Insert user into database
    const result = await usersCollection.insertOne(newUser);

    return {
      success: true,
      userId: result.insertedId.toString(),
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};

export const loginUser = async (payload) => {
  try {
    const { email, password } = payload;

    if (!email || !password) {
      return { success: false, message: "Email and password are required" };
    }

    //  Connect to users collection
    const usersCollection = await dbConnect(collections.USERS);

    // Find user by email
    const user = await usersCollection.findOne({ email });
    if (!user) {
      return { success: false, message: "User not found" };
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return { success: false, message: "Invalid password" };
    }

    // Return user object (without password for security)
    const { password: _, ...userWithoutPassword } = user;

    return { success: true, user: userWithoutPassword };
  } catch (error) {
    return { success: false, message: error.message };
  }
};
