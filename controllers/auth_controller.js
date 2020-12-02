const UserModel = require("../models/user");
const jwt = require("jsonwebtoken");


// helper functions
//const authenticate = passport.authenticate('local');

function registerNew(req, res) {
    //res.render("user/register");
}

function registerCreate(req, res, next) {
    const newUserHandler = (user) => {
        req.login(user, (err) => {
        if(err){
            next(err)
        } else {
            //console.log(user)
            res.send(user);
            //res.redirect("/home")
        }
        })
    }
    const { email, password, name, profile} = req.body;

    UserModel.create({ email, password, name, profile})
        .then(newUserHandler)
        .catch(x => console.log(x))
}

function logOut(req, res) {
    req.logout();
    //res.send("login create hit");
    res.redirect("/home");
}

function loginNew(req, res) {
    //res.render("user/login");
    res.send("this is login new");
}

function loginCreate(req, res) {
    const token = jwt.sign({ sub: req.user._id }, process.env.JWT_SECRET);
    req.session.jwt = token;
    //console.log("token", token)
    //res.send("Hello")
    res.json("login create hit");
}

module.exports = {
    registerNew,
    registerCreate,
    logOut,
    loginNew,
    loginCreate
}