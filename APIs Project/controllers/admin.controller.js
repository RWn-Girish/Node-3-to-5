const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const mailConfig = require("../middleware/mailConfig");

exports.registerAdmin = async (req, res) => {
    try {
        // console.log(req.body);
        let admin = await User.findOne({email: req.body.email})
        if(admin){
            return res.json({message: "Admin already Registered!!!!, Login Now"})
        }

        const hashPass = await bcrypt.hash(req.body.password, 10);
        req.body.role = 'Admin'
        admin = await User.create({...req.body, password: hashPass});
        return res.json({message: "Admin Register!!!"});


    } catch (error) {
        console.log(error);
        return res.json({message: "Server Error"});
    }
}

exports.loginAdmin = async (req, res) => {
    try {
        let admin = await User.findOne({email: req.body.email});
        if(!admin){
            return res.status(404).json({message: "Admin not Found"});
        }else{
            let checkPass = await bcrypt.compare(req.body.password, admin.password);
            if(checkPass){
                let token = jwt.sign({
                    userId: admin._id
                }, process.env.SECREAT_KEY);
                return res.json({message : "Login Success", token})
            }else{
                return res.json({message: 'Password is not matched...'});
            }
        }
    } catch (error) {
        console.log(error);
        return res.json({message: "Server Error"});
    }
}


exports.profile = async (req, res) => {
    try {
     return res.json({message: "Profile Found", user: req.user})   
    } catch (error) {
        console.log(error);
        return res.json({message: "Server Error"});
    }
}

exports.changePassword = async (req, res) => {
    try {
         let checkPass = await bcrypt.compare(req.body.oldPassword, req.user.password)
         if(checkPass){
              let comaprePass = await bcrypt.compare(req.body.newPassword, req.user.password)
              if(comaprePass){
                 return res.json({message: "Old pass & new Pass both are same"});
              }else{
                 if(req.body.newPassword === req.body.confiPass){
                     let hashPass = await bcrypt.hash(req.body.newPassword, 10);
                     await User.findByIdAndUpdate(req.user._id, {password: hashPass}, {new: true})
                     return res.json({message: "Password is updated"});
                 }else{
                     return res.json({message: "New & Confirm Pass is not matched"})
                 }
              }
         }else{
            return res.json({message: "old password is not matched"})
         }
    } catch (error) {
        console.log(error);
        return res.json({message: "Server Error"});
    }
};


exports.addNewManager = async (req, res) => {
    try {
        let admin = req.user;
        if(admin.role === "Admin"){

            let mailInfo = {
                from: process.env.USER_EMAIL,
                to: `${req.body.email}`,
                subject: "Send Login Credential",
                html: `
                    <h2>Your Login Email is <strong> ${req.body.email} </strong>. Password is <strong>${req.body.password}</strong></h2>
                `
            }
        
           let info =  await mailConfig(mailInfo);
           if(info){
                let hashPass = await bcrypt.hash(req.body.password, 10);
                req.body.role = "Manager";
                await User.create({...req.body, password: hashPass});
                return res.json({message: "New Manager Added"});
           }else{
            return res.json({message: "Your Credential is Wrong"});
           }
        }else{
            return res.json({message: "You are not Admin!!!!"})
        }
    } catch (error) {
        console.log(error);
        return res.json({message: "Server Error"});
    }
}