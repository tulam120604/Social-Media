import mongoose from "mongoose";

export default async function connectDB(uri) {
  try {
    await mongoose.connect(uri);
    console.log("Connect Ok: ", uri);
  } catch (error) {
    console.log("Failed: ", error);
  }
}
