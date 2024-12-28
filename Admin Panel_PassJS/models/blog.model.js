const mongoose = require('mongoose');


const blogSchema = mongoose.Schema({
    title: String,
    description: String,
    blogDate: Date,
    author: String,
    category: String,
    blogImage: String
});


const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;