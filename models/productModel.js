import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  sku: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("products", productSchema);

export default Product;
