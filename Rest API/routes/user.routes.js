const express = require("express");
const { addNewRegister, loginUSer } = require("../controllers/user.controller");
const routes = express.Router();

routes.post("/register", addNewRegister);

routes.post("/login", loginUSer)

module.exports = routes;
