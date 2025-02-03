const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    mobileNo: {
        type: String
    },
    image: {
        type: String
    },
    role: {
        type: String,
        enum: ['Admin', 'Manager', 'Employee']
    },
},
{
    timestamps: true
});

const User = mongoose.model("User", userSchema);

module.exports = User;