const express = require('express');
const { addAdminPage, viewAllAdmins, addNewAdmin, editAdminPage, updateAdmin } = require('../controllers/admin.controller');
const Admin = require('../models/admin.model');
const adminRoutes = express.Router();

adminRoutes.get("/add", addAdminPage)
adminRoutes.get("/viewalladmin", viewAllAdmins);

adminRoutes.post("/add-admin", Admin.uploadImage, addNewAdmin);

adminRoutes.get("/editAdmin/:id", editAdminPage);
adminRoutes.post("/editAdmin/:id", Admin.uploadImage, updateAdmin);


module.exports = adminRoutes;