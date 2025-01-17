const Category = require("../models/category.model");
const SubCategory = require("../models/subCategory.model");

exports.getSubCategories = async (req, res) => {
  let categoery = await Category.findById(req.query.categoryId);
  let subCategories = await SubCategory.find({categoryId: categoery._id})
  // console.log(subCategories);
  return res.json({subCategories})
}
exports.addextraCategoryPage = async (req, res) => {
  try {
    let categories = await Category.find();
    // let subCategories = await SubCategory.find();
    return res.render("extracategory/add_extracategory", {
      categories,
      // subCategories,
    });
  } catch (error) {
    console.log(error);
    return res.redirect("back");
  }
};
