import User from "../models/userModel.js";

// @ send ok
const sendOk = (req, res) => {
  res.status(200).send("ok Haya");
};

// @create
const createUser = async (req, res) => {
  const { username, password } = req.body;

  const newUser = await User.create({
    username,
    password,
  });
  if (newUser) {
    res.status(400).json(newUser);
  }
};

// @login
const login = async (req, res) => {
  const { username, password } = req.body;

  const person = await User.findOne({ username });

  if (person && (await person.matchPasswords(password))) {
    res.status(200).json({ haya: "Login Successful" });
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
  res.status(200).json({ haya: "User deleted successfully" });
};

// @ update user
const updateUser = async (req, res) => {
  const { username, password } = req.body;
  const { id: _id } = req.params;
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

export {
  sendOk,
  createUser,
  login,
  getAll,
  getSingleUser,
  deleteUser,
  updateUser,
};
