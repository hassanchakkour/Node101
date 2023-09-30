import express from "express";
import dotenv from "dotenv";

import userRoute from "./routes/userRoute.js";
import connectDb from "./db.js";

dotenv.config();
const app = express();

app.use(express.json());

connectDb();

app.use("/api/users", userRoute);

app.listen(process.env.PORT, (error) => {
  if (!error) {
    console.log(`Server runing on PORT ${process.env.PORT}`);
  } else {
    console.log(`Error: ${error}`);
  }
});
