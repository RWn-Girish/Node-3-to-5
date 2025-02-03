require('dotenv').config();

const express = require('express');

const port = process.env.PORT;
const app = express();
const morgan = require('morgan');
const db = require('./config/dbConnection');

app.use(morgan('dev'))
app.use(express.urlencoded());

app.use("/", require("./routes/index.routes"))

app.listen(port, ()=> {
    console.log(`Server start at http://localhost:${port}`);
})