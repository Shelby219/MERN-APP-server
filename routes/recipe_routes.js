const express = require('express');
const router = express.Router();
const passport = require("passport");
const {checkAuthentication} = require("../middleware/auth_middleware")
const {recipeParamValidationRules,validate, recipeSaveRules} = require("../middleware/validator")
const {  displayRecipes,
        displaySingleRecipe,
        makeSavedRecipe,
        removeSavedRecipes,
        displayAllSavedRecipes} = require('../controllers/recipe_controller')




//GET Route for Search Recipes Page
router.get("/browse", passport.authenticate('jwt', {session: false}), displayRecipes)

//GET All Saved Recipes
router.get("/saved-recipes", passport.authenticate('jwt', {session: false}), displayAllSavedRecipes)

//GET Route for Single Recipes Page
router.get("/:id", passport.authenticate('jwt', {session: false}),recipeParamValidationRules(),validate, displaySingleRecipe)

//CREATE Route for Saved Recipes
router.post("/add",recipeSaveRules(),validate, makeSavedRecipe)

//DELETE Route for Saved Recipes
router.delete("/:id", removeSavedRecipes)




module.exports = router;
