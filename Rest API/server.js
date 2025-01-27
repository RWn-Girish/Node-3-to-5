const express = require('express');

const port = 1234;
const db = require("./config/dbConnection");
const app = express();
const morgan = require('morgan');

// Middleware
app.use(morgan('dev'))
app.use(express.urlencoded());

app.use("/products", require("./routes/product.routes"))

app.listen(port, ()=> {
    console.log(`Server start at http://localhost:${port}`);
})