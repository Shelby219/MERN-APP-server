const express = require('express');
const router = express.Router();

const { editPref,
    editPrefReq} = require('../controllers/pref_controller')

//const {authRedirect, checkAuthentication} = require("../middleware/auth_middleware")


//GET Route for Preferences Page
router.get("/:name", editPref)

//PATCH Route for Updating the user via Preferences
router.patch("/:name/edit", editPrefReq)





module.exports = router;
