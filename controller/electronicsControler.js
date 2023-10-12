import Electronics from "../models/electronicsmodel.js";

const createElectronics = async (req, res) => {
    const { category, year } = req.body;

    const newElectronics = await Electronics.create({
        category,
        year,
    });
    console.log(newElectronics);
    res.status(201).json(newElectronics);
};

const getElectronics = async (req, res) => {
    const Electronics = await Electronics.find({});
    if (Electronics) {
        res.status(200).json(Electronics);
    } else {
        res.status(404).json({ Error: "No data" });
    }
};

const getSingleElectronics = async (req, res) => {
    const category = req.params.category;
    const singleElectronics = await Electronics.find({ category });
    if (singleElectronics) {
        res.json(singleElectronics);
        console.log(singleElectronics);
    } else {
        res.send("HICHAAAAMMMMMM");
    }
};

const deleteElectronics = async (req, res) => {
    const { category } = req.body;
    const findElectronics = await Electronics.findOneAndRemove({ category });
    res.status(200).json({ Message: "deleted successfully" });
};


const updateElectronics = async (req, res) => {
    const { category, year, type } = req.body;
    const findElectronics = await Electronics.findOne({ category });

    if (findElectronics) {
        findElectronics.category = type || findElectronics.category;
        findElectronics.year = year || findElectronics.year;
        await findElectronics.save();
        res.status(200).json(findElectronics);
    } else {
        res.status(404).json({ Message: " not found" });
    }
};

export { createElectronics, getElectronics, getSingleElectronics, deleteElectronics, updateElectronics };