import mongoose from "mongoose";

const musicSchema = mongoose.Schema({
    genre: {
        type: String,
        required: true,
        unique: true,
    },

    year: {
        type: Number,
        required: true,
    }
});

const Music = mongoose.model("music", musicSchema);
export default Music;