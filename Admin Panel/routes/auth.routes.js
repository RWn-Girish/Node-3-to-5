const express = require('express');

const authRoutes = express.Router();
const { loginPage, dashBoard, checkedLogin, logout, updatePassword, forgotPasswordPage, sendOtp, verfiyOTPpage, verfiyOTP, newPasswordPage } = require("../controllers/auth.controller");


authRoutes.get("/", loginPage);

authRoutes.post("/checkedLogin", checkedLogin);
authRoutes.get("/dashboard", dashBoard);
authRoutes.get("/logout", logout);

authRoutes.get("/forgot-password", forgotPasswordPage);
authRoutes.post("/send-otp", sendOtp);

authRoutes.get("/verify-otp", verfiyOTPpage);
authRoutes.post("/verify-otp", verfiyOTP);

authRoutes.get("/newpassword", newPasswordPage);
authRoutes.post("/update-password", updatePassword);

module.exports = authRoutes;