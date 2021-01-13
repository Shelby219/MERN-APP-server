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
		 res.json(recipes)
		 console.log("recipe search returned")
	} catch (err) {
		 if (err) {res.status(500)
            res.json({
             error: err.message
		 })
	     }
	}
}

//DISPLAY SINGLE RECIPE PAGE- based on either API call if it doesnt exist in user saved recipes
const displaySingleRecipe =  function(req, res) {
	//console.log(req)
	getSingleRecipe(req).then( function(singleRecipe){
		//console.log(singleRecipe)
		if (singleRecipe) {
			res.status(200)
			res.send(singleRecipe)
		} else {
			res.status(404)
			res.json({
				error: err.message
			})
		} 
	}).catch(function(err){
		if (err) {
			res.status(500)
			res.json({
				error: err.message
			})
			throw err;
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
	//req.body.username = "testusername"  //THIS IS only for test purposes
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
			console.log("success")
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