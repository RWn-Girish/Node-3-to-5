const express = require('express');

const authRoutes = express.Router();
const { loginPage, dashBoard, checkedLogin } = require("../controllers/auth.controller");


authRoutes.get("/", loginPage);

authRoutes.post ("/checkedLogin", checkedLogin);
authRoutes.get("/dashboard", dashBoard);

module.exports = authRoutes;