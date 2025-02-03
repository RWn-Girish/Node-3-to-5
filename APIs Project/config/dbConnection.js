const mongoose = require('mongoose');

// Database connection
const dbConnect = () => {
    mongoose.connect(process.env.MONGO_DB_URI)
        .then(() => console.log('DB Connected!!'))
        .catch((err) => console.log(err));
}


module.exports = dbConnect();