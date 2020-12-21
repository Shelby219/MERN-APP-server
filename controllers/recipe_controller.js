const {
	returnRecipesToBrowse,
	getAllSavedRecipes,
	getSingleRecipe,
	addSavedRecipe,
	deleteFromSavedRecipes
} = require("../utils/recipe_utilities")
const {
	singleRecipeAPISearch,
  } = require("../helpers/api_search_helpers.js")
  
//DISPLAY SEARCH RESULTS- based on API CALL
const displayRecipes =  async function(req, res) {
	try {
		 let recipes = await returnRecipesToBrowse(req)
		 res.status(200)
		 res.send(recipes)

	} catch (err) {
		 if (err) {res.status(500)
            res.json({
             error: err.message
		 })
	     }
	}
}

//DISPLAY SINGLE RECIPE PAGE- based on either API call if it doesnt exist in user saved recipes
const displaySingleRecipe = function(req, res) {
	getSingleRecipe(req).exec((err, singleRecipe) => {
			if (err) {
				res.status(500)
				res.json({
					error: err.message
				})
            }
		   ///console.log(items)
		   if (singleRecipe === "" || null || undefined) {
			let recipeFromAPI = singleRecipeAPISearch(req.params.id)
			console.log(recipeFromAPI)
			res.send(recipeFromAPI)
		  } else {
			console.log(singleRecipe)
			res.send(singleRecipe)
		  }	
	})
}

const displayAllSavedRecipes = function(req, res) {
    getAllSavedRecipes(req)
		.exec((err, savedRecipes) => {
			if (err) {
				res.status(500)
				res.json({
					error: err.message
				})
			}
			res.send(savedRecipes)
		})
};


const makeSavedRecipe = function (req, res) {
    // Add date
	const date = new Date()
	req.body.modified_date = date
	// add the username from req.user
	req.body.username = req.user.username

	addSavedRecipe(req).save((err, savedRecipe) => {
		if (err) {
			res.status(500)
			res.json({
				error: err.message
			})
		}
		res.status(201)
		res.send(savedRecipe)
	})
};

const removeSavedRecipes = function(req, res) {
    // Check for error from middleware
	if (req.error) {
		res.status(req.error.status)
		res.send(req.error.message)
	} else {
		// execute the query 
		deleteFromSavedRecipes(req.params.id).exec(err => {
			if (err) {
				res.status(500)
				res.json({
					error: err.message
				})
			}
			res.sendStatus(204)
		})
	}
};

module.exports = {
    displayRecipes,
	displaySingleRecipe,
	makeSavedRecipe,
	removeSavedRecipes,
	displayAllSavedRecipes
}