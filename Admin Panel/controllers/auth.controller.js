const Admin = require("../models/admin.model");

exports.loginPage = (req, res) => {
    return res.render("login");
};


exports.dashBoard = (req, res) => {
    return res.render("dashboard");
};

exports.checkedLogin = async (req, res)=> {
    // console.log(req.body);
    try {
        let admin = await Admin.findOne({email: req.body.email});
        console.log(admin);
    } catch (error) {
        console.log(error);
        return res.redirect("/")
    }
}