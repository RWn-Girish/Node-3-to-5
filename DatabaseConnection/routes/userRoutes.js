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
});

userRoutes.get('/deleteUser/:id', async(req, res)=>{
    // console.log(req.params.id);
    let rec = await User.findById(req.params.id);
    if(rec){
        await User.findByIdAndDelete(req.params.id);
        console.log('Delete Record Success');
        return res.redirect('/user');
    }
    else{
        console.log("Sometghing wrong");
        return res.redirect("/user");
    }
});

userRoutes.get("/editUser/:id", async(req, res)=>{
    let rec = await User.findById(req.params.id);
    if(rec){
        return res.render('editUser', {user: rec})
    }
    else{
        console.log("Sometghing wrong");
        return res.redirect("/user");
    }
});

module.exports = userRoutes;