const express = require("express");
const { registerAdmin, loginAdmin, profile, changePassword, addNewManager } = require("../controllers/admin.controller");
const { verifyToken } = require("../middleware/verifyToken");

const routes = express.Router();


routes.post("/register", registerAdmin);
routes.post("/login", loginAdmin);
routes.get("/profile", verifyToken, profile);
routes.put("/change-password", verifyToken, changePassword);
routes.post("/add-manager",verifyToken, addNewManager)

module.exports = routes;