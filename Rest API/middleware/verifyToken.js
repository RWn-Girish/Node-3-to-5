const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

exports.verifyToken = async (req, res, next) => {
  try {
    let token = req.headers["authorization"].split(" ")[1];
    // console.log(token);
    if (!token) {
      return res.json({ message: "Token missing!!!!" });
    }

    let { userId } = jwt.verify(token, "red&white");
    // console.log(userId);
    let user = await User.findById(userId);
    if(user){
        req.user = user;
        next()
    }else{
        return res.json({message: "user not Found"})
    }
  } catch (error) {
    console.log(error);
    return res.json({ message: "Server Error" });
  }
};
