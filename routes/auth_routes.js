const express = require('express');
const router = express.Router();
const passport = require("passport");
const {  Joi, celebrate, errors } = require('celebrate');
const {registerCreate, registerNew , logOut, loginNew, loginCreate} = require('../controllers/auth_controller')
const {authRedirect, checkAuthentication} = require("../middleware/auth_middleware")

//authRedirect is middleware and can be run before any route function

router.get('/register',authRedirect, registerNew);
router.post('/register', registerCreate);


router.get("/login", loginNew)
//router.post("/login", loginCreate )

router.post("/login", celebrate({
    body: {
        email: Joi.string().required(),
        password: Joi.string().required()
    }
    }), 
    passport.authenticate('local', {
        failureRedirect: '/user/login',
        session: false
}), loginCreate);

router.get('/logout', logOut);


module.exports = router
