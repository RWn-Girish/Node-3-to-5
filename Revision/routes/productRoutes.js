const express = require('express');
const Product = require('../model/productModel');

const productRoutes = express.Router();

productRoutes.get("/", (req, res)=> {
    return res.render("product");
});

productRoutes.post("/addProduct", Product.uplaodImage, async (req, res)=> {
    let imagePath = "";
    if(req.file){
        imagePath = `/uploads/${req.file.filename}`
    }
    req.body.productImage = imagePath;
    let newProduct = await Product.create(req.body);
    if(newProduct){
        console.log('Product Added');
        return res.redirect('/product');
    }else{
        console.log("Somthing Wrong");
        return res.redirect("/product");
    }
})

module.exports = productRoutes;