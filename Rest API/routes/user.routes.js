const express = require("express");
const { addNewRegister, loginUSer, profile } = require("../controllers/user.controller");
const { verifyToken } = require("../middleware/verifyToken");
const routes = express.Router();

routes.post("/register", addNewRegister);

routes.post("/login", loginUSer);

routes.get("/profile", verifyToken, profile)

module.exports = routes;
