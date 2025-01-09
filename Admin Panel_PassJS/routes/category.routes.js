const express = require("express");
const Category = require("../models/category.model");
const categoryRoutes = express.Router();
const {addCategoryPage, addNewCategory} = require("../controllers/category.controller");


categoryRoutes.get("/add", addCategoryPage);
categoryRoutes.post("/add-category", Category.uploadImage, addNewCategory )

module.exports = categoryRoutes;