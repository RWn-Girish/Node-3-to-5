const express = require('express');
const path = require('path');
const fs = require('fs');
const Product = require('../model/product.model');
const productRoutes = express.Router();

productRoutes.get("/", async (req, res)=> {
    let products = await Product.find();

    return res.render('product', {products});
})

productRoutes.post('/addProduct', Product.uploadImage,  async(req, res)=> {
    // console.log("Body", req.body);
    // console.log("File", req.file);
    let imagePath = "";
    if(req.file){
        imagePath = `/uploads/products/${req.file.filename}`
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


productRoutes.get('/delete/:id', async (req, res) => {
    let rec = await Product.findById(req.params.id);
    // console.log(rec);
    if(rec){
        let imagepath = path.join(__dirname, "..", rec.productImage)
        // console.log(imagepath);
        await fs.unlinkSync(imagepath);
        await Product.findByIdAndDelete(req.params.id);
        console.log("Delete Success");
        return res.redirect('/product');
    }else{
        console.log('Somthing Wrong');
        return res.redirect('/product');
    }
});

productRoutes.get("/edit/:id", async (req, res) => {
    let rec = await Product.findById(req.params.id);
    if(rec){
        return res.render('editProduct', {product: rec})
    }
});

productRoutes.post("/updateProduct/:id",Product.uploadImage, async(req, res) => {
    let rec = await Product.findById(req.params.id);
    if(rec){
        if(req.file){
            let imagepath = path.join(__dirname, "..", rec.productImage)
            await fs.unlinkSync(imagepath); 
            imagepath = `/uploads/products/${req.file.filename}`
            req.body.productImage = imagepath;
        }
        await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        console.log('Update Success');
        return res.redirect("/product");
    }
})

module.exports = productRoutes;