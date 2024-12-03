const express = require('express');
const User = require('../model/user.model');
const userRoutes = express.Router();

userRoutes.get('/', async(req, res)=>{
    let users = await User.find();
    // console.log("Users: ====> ", users)
    return res.render('user', {users});
})

userRoutes.post('/addUser', async(req, res)=>{
    console.log(req.body);
    let newUser = await User.create(req.body);
    if(newUser){
        console.log('New User Added!!!!');
        return res.redirect('/user');
    }else{
        console.log('Somthing Wrong...');
        return res.redirect('/user');
    }
})

module.exports = userRoutes;