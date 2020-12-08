const express = require('express');
const router = express.Router();
const {checkAuthentication} = require("../middleware/auth_middleware")


const { editPref,
    editPrefReq} = require('../controllers/pref_controller')



//GET Route for Preferences Page
router.get("/:username", editPref)

//PATCH Route for Updating the user via Preferences
router.patch("/:username/edit", editPrefReq)


//passport.authenticate('jwt', {session: false})




module.exports = router;
