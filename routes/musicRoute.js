import express from "express";
import { createMusic } from "../controller/musicController.js";
import { getMusic } from "../controller/musicController.js";
import { getSingleMusic } from "../controller/musicController.js";
import { deleteGenre } from "../controller/musicController.js";
import { updateMusic } from "../controller/musicController.js";

const router = express.Router();

router.post("/", createMusic);
router.get("/all", getMusic);
router.get("/single/:genre", getSingleMusic);
router.delete("/delete", deleteGenre);
router.put("/update/:id", updateMusic)


export default router;