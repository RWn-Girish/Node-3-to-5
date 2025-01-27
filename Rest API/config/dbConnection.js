const mongoose = require('mongoose');

// Database connection
const dbConnect = () => {
    mongoose.connect("mongodb+srv://rw3girishgk:Decode%40123@cluster0.c1whb.mongodb.net/api-project")
        .then(() => console.log('DB Connected!!'))
        .catch((err) => console.log(err));
}


module.exports = dbConnect();