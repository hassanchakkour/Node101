import mongoose from "mongoose";
const gameSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique: true,
    },
    year: {
        type: Number,
        required: true,
    }


});
const Game = mongoose.model("game", gameSchema);
export default Game;
