import mongoose from "mongoose";

export default async function connectDB(uri) {
  try {
    console.log(uri)
    await mongoose.connect(uri);
    console.log("Connect Ok: ", uri);
  } catch (error) {
    console.log("Failed: ", error);
  }
}
