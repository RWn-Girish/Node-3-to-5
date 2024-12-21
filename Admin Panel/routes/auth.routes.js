const express = require('express');

const authRoutes = express.Router();
const { loginPage, dashBoard, checkedLogin, logout } = require("../controllers/auth.controller");


authRoutes.get("/", loginPage);

authRoutes.post ("/checkedLogin", checkedLogin);
authRoutes.get("/dashboard", dashBoard);
authRoutes.get("/logout", logout);

module.exports = authRoutes;