const mailConfig = require("../config/mailConfig");
const Admin = require("../models/admin.model");
const otpGenerator = require("otp-generator");

exports.logout = (req, res) => {
    req.session.destroy((err)=>{
        if(err){
            console.log(err);
        }
        return res.redirect("/");
    })
};

exports.loginPage = (req, res) => {
    if(req.isAuthenticated()){
        return res.redirect("/dashboard");
    }
    return res.render("login");
};


exports.dashBoard =  (req, res) => {

    // console.log(req.user);
        return res.render("dashboard");
};

exports.checkedLogin = async (req, res) => {
    try {
            return res.redirect("/dashboard")
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
        to: `${req.body.email}`,
        subject: "Send OTP for Forgotpassword",
        html: `
            <h2>Your OTP is ${otp}. vlaid only 5 minutes.</h2>
        `
    }

    await mailConfig(mailInfo);
    res.cookie('otp', otp);
    res.cookie('email', req.body.email);
return res.redirect("/verify-otp");
    // console.log(otp);
}


exports.verfiyOTPpage = (req, res) => {
    try {
        return res.render("forgotPassword/otp")
    } catch (error) {
        console.log(error);
        return res.redirect("/")
    }
};

exports.verfiyOTP = async (req, res)=> {
    try {
        let otp = req.cookies.otp;
        if(otp == req.body.otp){
            return res.redirect("/newpassword");
        }else{
            return res.redirect("back")
        }
    } catch (error) {
        console.log(error);
        return res.redirect("/")
    }
};

exports.newPasswordPage = (req, res) => {
    try {
        return res.render("forgotPassword/newPassword")
    } catch (error) {
        console.log(error);
        return res.redirect("/")
    }
};

exports.updatePassword = async(req, res)=> {
    try {
        let email = req.cookies.email;
        if(req.body.password == req.body.conf_password){
            let admin = await Admin.findOne({email: email});
            admin.password = req.body.password;
            await admin.save();
            res.clearCookie("otp");
            res.clearCookie("email");
            return res.redirect("/");

        }else{
            return res.redirect("back")
        }
    } catch (error) {
        console.log(error);
        return res.redirect("/")
    }
};


/*
    Blog Project
    1. Auth
    2. CRUD with Blog => 

*/