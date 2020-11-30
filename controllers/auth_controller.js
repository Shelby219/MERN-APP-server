const UserModel = require("../models/user");
const jwt = require("jsonwebtoken");

function registerNew(req, res) {
    console.log("test")
    res.send("this is register get");
}

function registerCreate(req, res, next) {
    const newUserHandler = (user) => {
        console.log(req)
        req.login(user, (err) => {
        if(err){
            next(err)
        } else {
            res.redirect("/home")
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
    res.redirect("/home");
}

function loginNew(req, res) {
    res.send("this is login new ");
}

function loginCreate(req, res) {
    const token = jwt.sign({ sub: req.user._id }, process.env.JWT_SECRET);
    req.session.jwt = token;
    res.redirect("/home");
}

module.exports = {
    registerNew,
    registerCreate,
    logOut,
    loginNew,
    loginCreate
}