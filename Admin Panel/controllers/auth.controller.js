const Admin = require("../models/admin.model");

exports.logout = (req, res) => {
    res.clearCookie("admin");
    return res.redirect("/");
};

exports.loginPage = (req, res) => {
    if (req.cookies == undefined || req.cookies.admin == undefined || req.cookies.admin._id == undefined) {
        return res.render("login");
    } else {
        return res.redirect("/dashboard");
    }
};


exports.dashBoard = async (req, res) => {
    // console.log(req.cookies.admin)
    if (req.cookies.admin == undefined || req.cookies.admin._id == undefined) {

        return res.redirect("/",)
    } else {
        let loginAdmin = await Admin.findById(req.cookies.admin._id);
        return res.render("dashboard", { loginAdmin });
    }
};

exports.checkedLogin = async (req, res) => {
    // console.log(req.body);
    try {
        let admin = await Admin.findOne({ email: req.body.email });
        // console.log(admin);
        if (admin) {
            if (req.body.password == admin.password) {
                console.log("Login Success....");
                res.cookie("admin", admin)
                return res.redirect("/dashboard")
            } else {
                console.log("Password is not mathced...")
                return res.redirect("/");
            }

        } else {
            console.log("User not found.....");
            return res.redirect("/")
        }
    } catch (error) {
        console.log(error);
        return res.redirect("/")
    }
}