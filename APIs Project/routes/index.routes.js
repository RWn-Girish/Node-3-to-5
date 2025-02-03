const express = require("express");

const routes = express.Router();


routes.use("/admin", require('./admin.routes.js'))
routes.use("/manager", require('./admin.routes.js'))

module.exports = routes;