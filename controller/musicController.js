import Music from "../models/musicModel.js";

// POST
// Create new music
const createMusic = async (req, res) => {
    const {genre, year} = req.body;

    const newMusic = await Music.create({
        genre, 
        year,
    });
    console.log(newMusic)
    res.status(201).json(newMusic);
};

// GET
// get all genre
const getMusic = async (req, res) => {
    const music = await Music.find({});
    if(music){
        res.status(200).json(music);
    } else{
        res.status(404).json({Error: "No data"});
    }
};

// get one genre
const getSingleMusic = async (req, res) => {
    const genre = req.params.genre;
    const singleMusic = await Music.find({genre});
    if(singleMusic){
        res.json(singleMusic)
        console.log(singleMusic)
     
    } else {
        res.send("Genre don't exist")
    }
}

// delete genre
const deleteGenre = async (req, res) =>{
    const {genre} = req.body;
    const findGenre = await Music.findOneAndRemove({genre});
    res.status(200).json({Message: "Genre deleted successfully"});
}

// update
const updateMusic = async (req, res) =>{
    const {genre, year} = req.body;
    const { id: _id } = req.params;
    const findMusic = await Music.findOne({_id});

    if(findMusic){
        findMusic.genre = genre || findMusic.genre;
        findMusic.year = year || findMusic.year;
        await findMusic.save();
        res.status(200).json(findMusic);
    }else{
        res.status(404).json({Message: "Genre not found"})
    }


}

export{
    createMusic,
    getMusic,
    getSingleMusic,
    deleteGenre,
    updateMusic,
};
