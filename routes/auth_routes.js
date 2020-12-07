const express = require('express');
const router = express.Router();
const passport = require("passport");
const {  Joi, celebrate, errors } = require('celebrate');
const {registerCreate, registerNew , logOut, loginNew, loginCreate, editUser, editUserReq, removeUser} = require('../controllers/auth_controller')
const {authRedirect, checkAuthentication, authenticateJWT} = require("../middleware/auth_middleware")


//GET Route for Register Page
router.get('/register',authRedirect, registerNew);
//POST Route for registering and creating a user
router.post('/register', registerCreate);


//GET Route for Login page
router.get("/login", loginNew)
//POST Route for finding the user and logging them in
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


//GET Route for Logout function
router.get('/logout', logOut);



//GET Route for Account Settings Page
router.get("/:name/account-settings", editUser)
//PATCH Route for Updating the user via account settings
router.patch("/:name/account-settings", editUserReq)

//router.delete("/:name/delete", removeUser)



//passport.authenticate('jwt', {session: false})



module.exports = router
