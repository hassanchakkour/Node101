import express from "express";
import { createProd } from "../controller/productController.js";

const router = express.Router();

router.post("/create", createProd);

export default router;
