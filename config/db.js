import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongoose connected");
  } catch (error) {
    console.log(error);
    process.exit(1); // only exit on error
  }
};

export default connectDB;