const Product = require("../models/product.model");

exports.addProduct = async (req, res) => {
  //   console.log(req.body);
  try {
    let product = await Product.findOne({ title: req.body.title });
    if (!product) {
      let imagePath = "";
      if(req.file){
        imagePath = `/uploads/${req.file.filename}`;
      }
      req.body.productImage = imagePath;
      product = await Product.create(req.body);
      return res
        .status(201)
        .json({ message: "New Product Added!!!", data: product });
    } else {
      return res.status(200).json({ message: "Product is Already Exists!!!!" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    let products = await Product.find();
    return res
      .status(200)
      .json({ message: "Get All Products", data: products });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

exports.getSingleProduct = async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    if(!product){
        return res.status(404).json({message: "Product not Found!!!"});
    }
    return res
      .status(200)
      .json({ message: "Get Product", data: product });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
};


exports.deleteProduct = async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    if(!product){
        return res.status(404).json({message: "Product not Found!!!"});
    }
    product = await Product.findByIdAndDelete(req.params.id);
    return res
      .status(200)
      .json({ message: "Delete Product", data: product});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
};


exports.updateProduct = async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    if(!product){
        return res.status(404).json({message: "Product not Found!!!"});
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res
      .status(202)
      .json({ message: "Update Product Success", data: product});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
};
