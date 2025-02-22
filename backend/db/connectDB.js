import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to Database");
  } catch (error) {
    console.log("Error Connecting DB", error.message);
    process.exit(1);
  }
};

export default connectDB;
