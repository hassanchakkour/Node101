import express from "express";

import { sendOk } from "../controller/userController.js";
import { createUser } from "../controller/userController.js";
import { login } from "../controller/userController.js";
import { getAll } from "../controller/userController.js";
import { getSingleUser } from "../controller/userController.js";
import { deleteUser } from "../controller/userController.js";

const router = express.Router();

router.get("/", sendOk);

router.post("/create", createUser);

router.post("/haya", login);

router.get("/all", getAll);

router.get("/single/:id", getSingleUser);

router.post("/delete", deleteUser);

export default router;
