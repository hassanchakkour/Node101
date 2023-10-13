import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const { SchemaTypes } = mongoose;

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  favoriteMusic: {
    type: [
      {
        type: SchemaTypes.ObjectId,
        ref: "music",
      },
    ],
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPasswords = async function (plainPassword) {
  return await bcrypt.compare(plainPassword, this.password);
};

const User = mongoose.model("users", userSchema);

export default User;
