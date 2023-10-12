import express from "express";
import { createGame } from "../controller/gameControler.js";
import { getGame } from "../controller/gameControler.js";
import { getSingleGame } from "../controller/gameControler.js";
import { deleteGame } from "../controller/gameControler.js";
import { updateGame } from "../controller/gameControler.js";



const router = express.Router();

router.post("/", createGame);
router.get("/all", getGame);
router.get("/single", getSingleGame);
router.delete("/delete", deleteGame);
router.put("/update", updateGame);

export default router;
