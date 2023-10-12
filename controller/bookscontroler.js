import Book from "../models/booksmodel.js";

const createBook = async (req, res) => {
    const { title, pages } = req.body;

    const newBook = await Book.create({
        title,
        pages,
    });

    console.log(newBook);
    res.status(201).json(newBook);
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
    const { title, pages } = req.body;

    const existingBook = await Book.findOne({ title });

    if (existingBook) {
        existingBook.title = title || existingBook.title;
        existingBook.pages = pages || existingBook.pages;

        await existingBook.save();

        res.status(200).json(existingBook);
    } else {
        res.status(404).json({ Error: "Book not found" });
    }
};

export { createBook, getBooks, getSingleBook, deleteBook, updateBook };
