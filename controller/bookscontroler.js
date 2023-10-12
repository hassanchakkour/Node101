import Book from "../models/booksmodel.js";

//crud operation
// C => create
// r => read
// u => update
// d => delete

const createBook = async (req, res) => {
  const { title, pages, password } = req.body;

  const alredyExist = await Book.findOne({ title });

  if (alredyExist) {
    res.json({ message: "Book Already Exist !!" });
  } else {
    const newBook = await Book.create({
      title,
      pages,
      password,
    });

    res.status(201).json(newBook);
  }
};

const getBooks = async (req, res) => {
  const books = await Book.find({});

  if (books) {
    res.status(200).json(books);
  } else {
    res.status(404).json({ Error: "No data" });
  }
};

const getSingleBook = async (req, res) => {
  const title = req.params.title;

  const singleBook = await Book.findOne({ title });

  if (singleBook) {
    res.json(singleBook);
    console.log(singleBook);
  } else {
    res.status(404).json({ Error: "Book not found" });
  }
};

const deleteBook = async (req, res) => {
  const { title } = req.body;

  const deletedBook = await Book.findOneAndRemove({ title });

  if (deletedBook) {
    res.status(200).json({ Message: "Book deleted successfully" });
  } else {
    res.status(404).json({ Error: "Book not found" });
  }
};

const updateBook = async (req, res) => {
  const { title, pages, password } = req.body;

  const existingBook = await Book.findOne({ title });

  if (existingBook) {
    existingBook.title = title || existingBook.title;
    existingBook.pages = pages || existingBook.pages;
    existingBook.password = password || existingBook.password;

    await existingBook.save();

    res.status(200).json(existingBook);
  } else {
    res.status(404).json({ Error: "Book not found" });
  }
};

// @ POST
// @ Login
const loginBook = async (req, res) => {
  const { title, password } = req.body;

  const book = await Book.findOne({ title });

  if (book && (await book.hishamPassword(password))) {
    res.json({ message: "Login Successfull" });
  } else {
    res.json({ message: "mesh mawjoud" });
  }
};

export {
  createBook,
  getBooks,
  getSingleBook,
  deleteBook,
  updateBook,
  loginBook,
};
