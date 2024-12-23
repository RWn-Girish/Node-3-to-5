const mailConfig = require("../config/mailConfig");
const Admin = require("../models/admin.model");
const otpGenerator = require("otp-generator");

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
};


exports.forgotPasswordPage = (req, res) => {
    try {
        return res.render("forgotPassword/forgotpass")
    } catch (error) {
        console.log(error);
        return res.redirect("/")
    }
};

exports.sendOtp = async (req, res) => {
    // console.log(req.body.email)
    // let otp = Math.floor(Math.random() * 10000)

    // password : jwrf chkk rsbo elmf
    let otp = otpGenerator.generate(5, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false
    });

    let mailInfo = {
        from: 'rw3.girish.gk@gmail.com',
        to: `ashishdhola0.7@gmail.com`,
        subject: "Send OTP for Forgotpassword",
        html: `
            <h2>Your OTP is ${otp}. vlaid only 5 minutes.</h2>
        `
    }

    await mailConfig(mailInfo);

return res.redirect("/");
    // console.log(otp);
}