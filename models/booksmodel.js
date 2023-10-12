import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  pages: {
    type: Number,
    required: true,
  },
});

// schema name
// previous abel l "save"

bookSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  // generate salt == keb 3lya bharat

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// schema name
// hayde mothod
// esem l method

bookSchema.methods.hishamPassword = async function (plainPassword) {
  return await bcrypt.compare(plainPassword, this.password);
};

const Book = mongoose.model("Book", bookSchema);

export default Book;
