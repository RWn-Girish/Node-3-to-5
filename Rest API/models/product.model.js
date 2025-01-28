const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    category: {
        type: Array
    },
    productImage: {
        type: String
    }
});

const productStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "..", "uploads"));
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now()}`);
    }
});

productSchema.statics.uploadImage = multer({storage: productStorage}).single('productImage');

const Product = mongoose.model('Product', productSchema);

module.exports = Product;