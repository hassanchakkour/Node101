import express from "express";
import {
  createBook,
  getBooks,
  getSingleBook,
  deleteBook,
  updateBook,
  loginBook,
} from "../controller/bookscontroler.js";

const router = express.Router();

router.post("/", createBook);
router.get("/all", getBooks);
router.get("/single/:title", getSingleBook);
router.delete("/delete", deleteBook);
router.put("/update", updateBook);

router.post("/login", loginBook);

export default router;
