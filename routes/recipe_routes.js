const express = require('express');
const router = express.Router();
const {checkAuthentication} = require("../middleware/auth_middleware")

const { displayRecipes,
    displaySingleRecipe} = require('../controllers/recipe_controller')




//GET Route for Search Recipes Page
router.get("/browse", displayRecipes)

// //POST Route for Search Recipes 
// router.post("/browse", editPref)


//GET Route for Single Recipes Page
router.get("/single-recipe", displaySingleRecipe)




//passport.authenticate('jwt', {session: false})




module.exports = router;
