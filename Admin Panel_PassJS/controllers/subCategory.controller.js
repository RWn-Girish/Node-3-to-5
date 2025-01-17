const Category = require('../models/category.model');
const SubCategory = require("../models/subCategory.model");


exports.addSubCategoryPage = async(req, res) => {
    try {
        let categories = await Category.find();
        return res.render('subcategory/add_subcategory', {categories});
    } catch (error) {
        console.log(error);
        return res.redirect("back");
    }
}

exports.addSubCategory = async(req, res) => {
    try {
        let newSubCategory = await SubCategory.create(req.body);
        if(newSubCategory){
            req.flash('success', 'New Sub Category Added!!!');
            return res.redirect("back");
        }else{
            req.flash('error', 'Sub Category not Added!!!');
            return res.redirect("back");
        }
    } catch (error) {
        console.log(error);
        return res.redirect("back");
    }
};


exports.getAllSubCategoires = async(req, res) => {
    try {
        let subCategories = await SubCategory.find().populate('categoryId');
        // console.log(subCategories)
        return res.render("subcategory/view_subcategory", {subCategories});
    } catch (error) {
        console.log(error);
        return res.redirect("back");
    }
}

exports.editSubCategory = async(req, res) => {
    try {
        let subCategory = await SubCategory.findById(req.params.id);
        let categories = await Category.find();
        return res.render('subcategory/edit_subcategory', {categories, subCategory});
    } catch (error) {
        console.log(error);
        return res.redirect("back");
    }
}
