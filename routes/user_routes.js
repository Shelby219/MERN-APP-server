const express = require('express');
const router = express.Router();
const passport = require("passport");
const {  Joi, celebrate, errors } = require('celebrate');
const {registerCreate, registerNew , logOut, loginNew, loginCreate} = require('../controllers/user_controller')


//authRedirect is middleware and can be run before any route function

router.get('/register', registerNew);
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
        failureRedirect: '/login',
    session: false
}), loginCreate);

router.get('/logout', logOut);


module.exports = router
