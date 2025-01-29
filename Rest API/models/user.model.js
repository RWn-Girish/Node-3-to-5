const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    
}, {
    timestamps: true
});


const User = mongoose.model('User', userSchema);

module.exports = User;