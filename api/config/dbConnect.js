import mongoose from "mongoose";

//Function to connect
const dbConnect = async () => {
  mongoose.set("strictQuery", true);
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB connected")
  } catch (error) {
    console.log(error.msg);
    process.exit(1);
  }
};

dbConnect();
