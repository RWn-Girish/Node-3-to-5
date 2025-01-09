const Category = require('../models/category.model');

exports.addCategoryPage = (req, res) => {
    try {
        return res.render("category/add_category");
    } catch (error) {
        console.log(error);
        return res.redirect("back");
    }
};

exports.addNewCategory = async(req, res) => {
    try {
        let imagePath = "";
        if(req.file){
            imagePath = `/uploads/categories/${req.file.filename}`
        }
        req.body.categoryImage = imagePath;

        let newCategory = await Category.create(req.body);
        if(newCategory){
            req.flash('success', 'New Category Added');
            return res.redirect("back");
        }else{
            req.flash('error', 'Category Not Added');
            return res.redirect("back");
        }
    } catch (error) {
        console.log(error);
        return res.redirect("back");
    }
}