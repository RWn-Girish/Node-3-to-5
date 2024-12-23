const express = require('express');

const authRoutes = express.Router();
const { loginPage, dashBoard, checkedLogin, logout, forgotPasswordPage, sendOtp } = require("../controllers/auth.controller");


authRoutes.get("/", loginPage);

authRoutes.post ("/checkedLogin", checkedLogin);
authRoutes.get("/dashboard", dashBoard);
authRoutes.get("/logout", logout);

authRoutes.get("/forgot-password", forgotPasswordPage);
authRoutes.post("/send-otp", sendOtp);

module.exports = authRoutes;