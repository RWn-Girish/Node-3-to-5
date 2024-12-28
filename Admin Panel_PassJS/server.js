const express = require('express');
const path = require('path');
const port = 5555;
const db = require("./config/dbConnection");
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require("passport");
const localSt = require("./config/passportLocalStratergy");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded());
app.use(cookieParser());
app.use("/assets", express.static(path.join(__dirname, 'assets')))
app.use("/uploads", express.static(path.join(__dirname, 'uploads')))

app.use(session({
    name: 'learning',
    secret: "learning",
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60,
        secure: true
    }
}))

app.use(passport.session());
app.use(passport.initialize());


app.use("/", require("./routes/auth.routes"));
app.use("/admin", require('./routes/admin.routes'));


app.listen(port, () => {
    console.log(`Server starting at http://localhost:${port}`);
})