const express = require('express');
const path = require('path');
const port = 5555;
const db = require("./config/dbConnection");
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require("passport");
const localSt = require("./config/passportLocalStratergy");
const flash = require("connect-flash");
const flashConnect = require("./config/flashConnect");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded());
app.use(cookieParser());
app.use(flash());
app.use("/assets", express.static(path.join(__dirname, 'assets')))
app.use("/uploads", express.static(path.join(__dirname, 'uploads')))

app.use(session({
    name: 'learning',
    secret: "learning",
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60,
    }
}))

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setLocalUser)
app.use(flashConnect.setFalsh);


app.use("/", require("./routes/auth.routes"));
app.use("/admin", require('./routes/admin.routes'));
app.use("/category", passport.validateUser, require('./routes/category.routes'));
app.use("/subcategory", passport.validateUser, require('./routes/subcategory.routes'));
app.use("/extracategory", passport.validateUser, require('./routes/extracategory.routes'));


app.listen(port, () => {
    console.log(`Server starting at http://localhost:${port}`);
})