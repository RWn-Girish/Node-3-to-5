const express = require("express");
const {
    addextraCategoryPage,
    getSubCategories
} = require("../controllers/extracategory.controller");
const extraCategoryRoutes = express.Router();

extraCategoryRoutes.get("/getsubcategoies", getSubCategories);
extraCategoryRoutes.get("/add", addextraCategoryPage);

module.exports = extraCategoryRoutes;
