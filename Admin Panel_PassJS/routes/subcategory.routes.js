const express = require("express");
const {
  addSubCategoryPage,
  addSubCategory,
  getAllSubCategoires,
  editSubCategory,
} = require("../controllers/subCategory.controller");
const subCategoryRoutes = express.Router();

subCategoryRoutes.get("/add", addSubCategoryPage);

subCategoryRoutes.post("/add-subcategory", addSubCategory);

subCategoryRoutes.get("/view", getAllSubCategoires);
subCategoryRoutes.get("/edit-subcategory/:id", editSubCategory);
module.exports = subCategoryRoutes;
