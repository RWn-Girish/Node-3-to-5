const express = require('express');

const port = 1234;
const db = require("./config/dbConnection");
const app = express();
const path = require('path');
const morgan = require('morgan');

// Middleware
app.use(morgan('dev'))
app.use(express.urlencoded());
app.use("/uploads", express.static(path.join(__dirname, "uploads")))

app.use("/products", require("./routes/product.routes"))
app.use("/users", require("./routes/user.routes"))

app.listen(port, ()=> {
    console.log(`Server start at http://localhost:${port}`);
})