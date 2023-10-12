import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    pages: {
        type: Number,
        required: true,
    }
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
