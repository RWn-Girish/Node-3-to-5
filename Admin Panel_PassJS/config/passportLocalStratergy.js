const passport = require("passport");

const LocalStrategy = require('passport-local').Strategy
const Admin = require("../models/admin.model");

passport.use( new LocalStrategy({ usernameField: 'email' },
    async (email, password, done) => {
            let loginAdmin = await Admin.findOne({email: email});
            if(loginAdmin){
                    if(password === loginAdmin.password){
                            done(null, loginAdmin);
                    }else{
                        done(null, false);
                    }
            }else{
                done(null, false);
            }
    }
));


passport.serializeUser((admin, cb)=>{
    return cb(null, admin.id)
})

passport.deserializeUser(async (id, cb)=> {
   let user =  await Admin.findById(id)
   cb(null, user);
});

passport.validateUser = (req, res, next) => {
    console.log(req.isAuthenticated());
    if(req.isAuthenticated()){
        next();
    }else{
        return res.redirect("/")
    }
}

module.exports = passport;