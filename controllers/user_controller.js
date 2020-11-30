const UserModel = require("./../models/user");
const jwt = require("jsonwebtoken");

function registerNew(req, res) {
    res.render("user/register");
}

async function registerCreate(req, res, next) {
    const { email, password } = req.body;
    const user = await UserModel.create({ email, password });
    req.login(user, (err) => {
        if (err) {
            return next(err);
        }

        res.redirect("/home");
    });
}

function logOut(req, res) {
    req.logout();
    res.redirect("/home");
}

function loginNew(req, res) {
    res.render("user/login");
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