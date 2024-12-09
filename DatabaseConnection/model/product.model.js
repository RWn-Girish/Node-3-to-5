const mongoose = require('mongoose');

const multer = require('multer');
const path = require('path');

const productSchema = mongoose.Schema({
    title: {
        type: String
    },
    desc : {
        type: String,
    },
    category : {
        type: String,
    },
    price : {
        type: Number,
    },
    productImage : {
        type: String,
    },
});


const storage = multer.diskStorage({
    destination:  (req, file, cb) =>{
      cb(null, path.join(__dirname, "..", "uploads/products"))
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname+"-"+Date.now())
    }
  })

productSchema.statics.uploadImage = multer({storage}).single('productImage');

const Product = mongoose.model("Product", productSchema);
module.exports = Product;