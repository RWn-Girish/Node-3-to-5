const express = require("express");
const { addProduct, getAllProducts, getSingleProduct, deleteProduct } = require("../controllers/product.controller");

const routes = express.Router();

routes.post("/add-product", addProduct);
routes.get("/", getAllProducts);
routes.get("/:id", getSingleProduct);
routes.delete("/delete-product/:id",deleteProduct );

module.exports = routes;
