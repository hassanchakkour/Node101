import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";
import Music from "../models/musicModel.js";

// @ send ok
const sendOk = (req, res) => {
  res.status(200).send("ok Haya");
};

// @create
const createUser = async (req, res) => {
  const { username, password } = req.body;

  const exist = await User.findOne({ username });

  if (exist) {
    res.json({ message: "user alreadyExists" });
  } else {
    const newUser = await User.create({
      username,
      password,
    });
    if (newUser) {
      generateToken(res, newUser._id);
      res.status(400).json(newUser);
    }
  }
};

// @login
const login = async (req, res) => {
  const { username, password } = req.body;

  const person = await User.findOne({ username });

  if (person && (await person.matchPasswords(password))) {
    generateToken(res, person._id);
    res.status(200).json({ Message: "Login Successful" });
  } else {
    res.json({ message: "Wrong Credentials" });
  }
};

//@ get all users
const getAll = async (req, res) => {
  const users = await User.find({});

  if (users) {
    res.status(200).json(users);
  } else {
    res.status(404).json({ haya: "No Data" });
  }
};

// @ get single user
const getSingleUser = async (req, res) => {
  const _id = req.params.id;
  const singleUser = await User.find({ _id });
  if (singleUser) {
    res.json(singleUser);
  } else {
    res.send("no");
  }
};

// @ delete user
const deleteUser = async (req, res) => {
  const { username } = req.body;

  const findUser = await User.findOneAndRemove({ username });
  console.log(findUser);
  res.status(200).json({ Message: "User deleted successfully" });
};

// @ update user
const updateUser = async (req, res) => {
  const { username, password } = req.body;
  const { id: _id } = req.params;
  console.log(req.user);
  const findUser = await User.findOne({ _id });

  if (findUser) {
    findUser.username = username || findUser.username;
    findUser.password = password || findUser.password;

    await findUser.save();
    res.status(200).json(findUser);
  } else {
    res.status(404).json({ message: "User Not Found !" });
  }
};
// @ POST
// LOGOUT
const logout = async (req, res) => {
  res.cookie("dima", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "User Logged Out !!!" });
};

// @ POST
// Add Favorite Music
const addFavoriteMusic = async (req, res) => {
  const { username, genre } = req.body;
  const findUser = await User.findOne({ username });
  const findMusic = await Music.findOne({ genre });

  if (findUser && findMusic) {
    const addUser = await User.findOneAndUpdate(
      { username: username },
      { $push: { favoriteMusic: findMusic._id } },
      { new: true }
    ).populate({
      path: "favoriteMusic",
    });
    res.status(200).json(addUser);
  } else {
    res.json({ message: "something went wrong" });
  }
};
// @ POST
// remove From Favorite Music
const removeFromFavorite = async (req, res) => {
  const { username, genre } = req.body;
  const findUser = await User.findOne({ username });
  const findMusic = await Music.findOne({ genre });

  if (findUser && findMusic) {
    const addUser = await User.findOneAndUpdate(
      { username: username },
      { $pull: { favoriteMusic: findMusic._id } },
      { new: true }
    ).populate({
      path: "favoriteMusic",
    });
    res.status(200).json(addUser);
  } else {
    res.json({ message: "something went wrong" });
  }
};

export {
  sendOk,
  createUser,
  login,
  getAll,
  getSingleUser,
  deleteUser,
  updateUser,
  logout,
  addFavoriteMusic,
  removeFromFavorite,
};
