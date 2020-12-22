const express = require('express');
const router = express.Router();
const {checkAuthentication} = require("../middleware/auth_middleware")
const {recipeParamValidationRules,validate} = require("../middleware/validator")
const {  displayRecipes,
        displaySingleRecipe,
        makeSavedRecipe,
        removeSavedRecipes,
        displayAllSavedRecipes} = require('../controllers/recipe_controller')




//GET Route for Search Recipes Page
router.get("/browse", displayRecipes)

// //POST Route for Search Recipes 
// router.post("/browse", editPref)


//GET All Saved Recipes
router.get("/saved-recipes", displayAllSavedRecipes)

//GET Route for Single Recipes Page
router.get("/:id",recipeParamValidationRules(),validate, displaySingleRecipe)

//CREATE Route for Saved Recipes
router.post("/add", makeSavedRecipe)

//DELETE Route for Saved Recipes
router.delete("/:id", removeSavedRecipes)


//passport.authenticate('jwt', {session: false})




module.exports = router;
