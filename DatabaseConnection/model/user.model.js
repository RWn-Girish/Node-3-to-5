const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fname: String, // short hand property 
    lname: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    phoneNo: {
        type: Number 
    },
    gender: {
        type: String
    },
    hobby: {
        type: Array
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;