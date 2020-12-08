const express = require('express');
const router = express.Router();
const passport = require("passport");
const {  Joi, celebrate, errors, Segments } = require('celebrate');
const {registerCreate, registerNew , logOut, loginNew, loginCreate, editUser, editUserReq, removeUser} = require('../controllers/auth_controller')
const {authRedirect, checkAuthentication, authenticateJWT} = require("../middleware/auth_middleware")
const {passwordValidator} = require("../middleware/validator")
const { body } = require('express-validator');

// const pattern = "/(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[$@$!#.])[A-Za-zd$@$!%*?&.]{8,20}/";
// celebrate({
//     [Segments.BODY]: Joi.object().keys({
//      email: Joi.string().email({ minDomainSegments: 2 }).required(),
//       username: Joi.string().alphanum().min(3).max(30).required(), 
//       password: Joi.string().regex(RegExp(pattern)).required().min(8)
//     }),
//     [Segments.QUERY]: {
//       token: Joi.string().token().required()
//     }
//   })

//GET Route for Register Page
router.get('/register',authRedirect, registerNew);
//POST Route for registering and creating a user
router.post('/register',[
    body('email').isEmail().normalizeEmail().withMessage('Must be a valid email format'),
    body('password').isStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1}).withMessage('Password should not be empty, minimum eight characters, at least one letter, one number and one special character')
  ]
 , registerCreate);

 
//GET Route for Login page
router.get("/login", loginNew)
//POST Route for finding the user and logging them in
router.post("/login", celebrate({
    body: {
        email: Joi.string().required(),
        password: Joi.string().min(8).required(),
        username: Joi.string().required(),
    }}), 
    passport.authenticate('local', {
        failureRedirect: '/user/login',
        session: false
}), loginCreate);


//GET Route for Logout function
router.get('/logout', logOut);



//GET Route for Account Settings Page
router.get("/:username/account-settings", editUser)
//PATCH Route for Updating the user via account settings
router.patch("/:username/account-settings", editUserReq)

//router.delete("/:name/delete", removeUser)



//passport.authenticate('jwt', {session: false})



module.exports = router
