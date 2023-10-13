import express from "express";

import { sendOk, updateUser } from "../controller/userController.js";
import { createUser } from "../controller/userController.js";
import { login } from "../controller/userController.js";
import { getAll } from "../controller/userController.js";
import { getSingleUser } from "../controller/userController.js";
import { deleteUser } from "../controller/userController.js";
import {
  logout,
  addFavoriteMusic,
  removeFromFavorite,
} from "../controller/userController.js";

import dima from "../middleware/authMiddleWare.js";

const router = express.Router();

router.get("/", sendOk);

router.post("/create", createUser);

router.post("/login", login);

router.get("/all", getAll);

router.get("/single/:id", getSingleUser);

router.delete("/delete", dima, deleteUser);

router.put("/update/:id", dima, updateUser);

router.post("/logout", dima, logout);

router.post("/addMusic", dima, addFavoriteMusic);

router.post("/removeFromFavorite", dima, removeFromFavorite);

export default router;
