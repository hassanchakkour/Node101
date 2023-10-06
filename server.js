import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoute from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";
import musicRoute from "./routes/musicRoute.js";
import connectDb from "./db.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


connectDb();

app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/music", musicRoute);

app.listen(process.env.PORT, (error) => {
  if (!error) {
    console.log(`Server runing on PORT ${process.env.PORT}`);
  } else {
    console.log(`Error: ${error}`);
  }
});
