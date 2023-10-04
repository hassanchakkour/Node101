import Product from "../models/productModel.js";

// @ POST
// @ create a new product
const createProd = async (req, res) => {
  const { sku, name } = req.body;

  const productExist = await Product.findOne({ sku });

  if (productExist) {
    res.json({ message: "Product Already Exists !!" });
  } else {
    const product = await Product.create({
      sku,
      name,
    });

    res.status(201).json(product);
  }
};

export { createProd };
