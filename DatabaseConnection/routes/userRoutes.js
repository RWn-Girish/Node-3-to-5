const express = require('express');
const userRoutes = express.Router();
const { userPage, addNewUser, deleteUser, editUser, updateUser } = require('../controller/userController');

userRoutes.get('/', userPage);

userRoutes.post('/addUser', addNewUser);

userRoutes.get('/deleteUser/:id', deleteUser);

userRoutes.get("/editUser/:id", editUser);

userRoutes.post('/updateUser/:id', updateUser)

module.exports = userRoutes;