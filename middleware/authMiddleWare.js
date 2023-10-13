import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const dima = async (req, res, next) => {
  let token;

  token = req.cookies.dima;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.jwt_secret);

      req.user = await User.findById(decoded.userId).select("-password");

      next();
    } catch (error) {
      res.status(401).json({ message: "Unvalid Token" });
    }
  } else {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export default dima;
