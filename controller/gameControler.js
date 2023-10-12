import Game from "../models/gamemodel.js"

const createGame = async (req, res) => {
    const { name, year } = req.body;

    const newGame = await Game.create({
        name,
        year,
    });
    console.log(newGame);
    res.status(201).json(newGame);
};

const getGame = async (req, res) => {
    const Game = await Game.find({});
    if (Game) {
        res.status(200).json(Game);
    } else {
        res.status(404).json({ Error: "No data" });
    }
};

const getSingleGame = async (req, res) => {
    const name = req.params.name;
    const singleGame = await Game.find({ name });
    if (singleGame) {
        res.json(singleGame);
        console.log(singleGame);
    } else {
        res.send("name don't exist");
    }
};

const deleteGame = async (req, res) => {
    const { name } = req.body;
    const findGame = await Game.findOneAndRemove({ name });
    res.status(200).json({ Message: "Name deleted successfully" });
};


const updateGame = async (req, res) => {
    const { hicham, year } = req.body;
    const findGame = await Game.findOne({ _id });

    if (findGame) {
        findGame.name = hicham || findGame.name;
        findGame.year = year || findGame.year;
        await findGame.save();
        res.status(200).json(findGame);
    } else {
        res.status(404).json({ Message: "Name not found" });
    }
};

export { createGame, getGame, getSingleGame, deleteGame, updateGame };
