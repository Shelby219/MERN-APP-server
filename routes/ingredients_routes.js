
const express = require('express');
const router = express.Router();

const { getIngredients,
       createIngredient,
        deleteIngredient
    } = require('../controllers/ingredients_controller')



//GET Route for Fridge Page
router.get("/:username/fridge", getIngredients)

//POST Route for Updating the user via Preferences
router.post("/:username/fridge/new", createIngredient)

//DELETE Route for Updating the user via Preferences
router.patch("/:username/fridge/delete", deleteIngredient)



module.exports = router
