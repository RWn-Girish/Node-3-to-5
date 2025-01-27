const mongoose = require('mongoose');

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

const Product = mongoose.model('Product', productSchema);

module.exports = Product;