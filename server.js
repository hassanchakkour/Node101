import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoute from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";
import musicRoute from "./routes/musicRoute.js";
import gameroute from "./routes/gameroute.js";
import electronicsroute from "./routes/electronicsroute.js";
import booksroute from "./routes/booksroute.js";
import cookieParser from "cookie-parser";

import connectDb from "./db.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

connectDb();

app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/music", musicRoute);
app.use("/api/game", gameroute);
app.use("/api/electronics", electronicsroute);
app.use("/api/books", booksroute);
app.listen(process.env.PORT, (error) => {
  if (!error) {
    console.log(`Server running on PORT ${process.env.PORT}`);
  } else {
    console.log(`Error: ${error}`);
  }
});
