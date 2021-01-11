
const express = require('express');
const router = express.Router();
const passport = require("passport");
const { getIngredients,
       createIngredient,
        deleteIngredient,
        deleteAllIngredients
    } = require('../controllers/ingredients_controller')

//NOTE same controller functions apply to fridge and pantry due to conditionals in utilities

//GET Route for Fridge Page
router.get("/:username/fridge", /*passport.authenticate('jwt', {session: false}),*/ getIngredients)

//POST Route for Updating the user via Fridge
router.post("/:username/fridge/new", createIngredient)

//DELETE Route for Updating the user via Fridge
router.delete("/:username/fridge/delete", deleteIngredient)

//DELETE ALL Route for Updating the user via Fridge
router.delete("/:username/fridge/clear-all", deleteAllIngredients)

//GET Route for Pantry Page
router.get("/:username/pantry", /*passport.authenticate('jwt', {session: false}),*/ getIngredients)

//POST Route for Updating the user via pantry
router.post("/:username/pantry/new", createIngredient)

//DELETE Route for Updating the user via pantry
router.delete("/:username/pantry/delete", deleteIngredient)

//DELETE ALL Route for Updating the user via pantry
router.delete("/:username/pantry/clear-all", deleteAllIngredients)



module.exports = router
