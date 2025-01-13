const express = require("express");
const { addSubCategoryPage, addSubCategory, getAllSubCategoires } = require("../controllers/subCategory.controller");
const subCategoryRoutes = express.Router();

subCategoryRoutes.get("/add", addSubCategoryPage);

subCategoryRoutes.post("/add-subcategory", addSubCategory);

subCategoryRoutes.get("/view", getAllSubCategoires);
module.exports = subCategoryRoutes;
