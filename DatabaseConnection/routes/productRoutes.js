const express = require('express');

const Product = require('../model/product.model');
const productRoutes = express.Router();

productRoutes.get("/", (req, res)=> {
    return res.render('product');
})

productRoutes.post('/addProduct', Product.uploadImage,  (req, res)=> {
    console.log("Body", req.body);
    console.log("File", req.file);
})

module.exports = productRoutes;