import express from "express";
import { createElectronics } from "../controller/electronicsControler.js";
import { getElectronics } from "../controller/electronicsControler.js";
import { getSingleElectronics } from "../controller/electronicsControler.js";
import { deleteElectronics } from "../controller/electronicsControler.js";
import { updateElectronics } from "../controller/electronicsControler.js";


const router = express.Router();

router.post("/", createElectronics);
router.get("/all1", getElectronics);
router.get("/single1", getSingleElectronics);
router.delete("/delete", deleteElectronics);
router.put("/update", updateElectronics);

export default router;