import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.mongo_URI);
    console.log("connected to Db");
  } catch (error) {
    console.log(`Error : ${error}`);
  }
};

export default connectDb;
