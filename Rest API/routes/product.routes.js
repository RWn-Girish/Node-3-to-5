const express = require("express");
const { addProduct, getAllProducts, getSingleProduct, deleteProduct, updateProduct } = require("../controllers/product.controller");
const Product = require("../models/product.model");
const routes = express.Router();

// CRUD Operation
routes.post("/add-product", Product.uploadImage, addProduct);
routes.get("/", getAllProducts);
routes.get("/:id", getSingleProduct);
routes.put("/update-product/:id", updateProduct );
routes.delete("/delete-product/:id",deleteProduct );

module.exports = routes;
