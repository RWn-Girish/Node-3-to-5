const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

exports.addNewRegister = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res
        .status(400)
        .json({ message: "User already Exist!!! Please Login" });
    }

    let hashPassword = await bcrypt.hash(req.body.password, 10);
    // console.log(hashPassword);
    user = await User.create({ ...req.body, password: hashPassword });

    return res.status(201).json({ message: "User Register Success" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

exports.loginUSer = async (req, res) => {
  try {

    let user = await User.findOne({email: req.body.email});
    // console.log(user);
    if(!user){
        return res.status(404).json({message: "User not Found"});
    }
    let chackedPass = await bcrypt.compare(req.body.password, user.password)
    // console.log(chackedPass);
    if(chackedPass){
      let token = jwt.sign({
        userId : user._id
      }, 'red&white');
        return res.status(200).json({message: "Login Success",token });
    }else{
        return res.status(400).json({message: "Password is Not Matched!!"})
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
};


exports.profile = (req, res) => {
  return res.json(req.user);
}