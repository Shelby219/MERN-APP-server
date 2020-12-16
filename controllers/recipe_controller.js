const {
	getRecipesFromAPI,
	getSingleRecipe,
	getUser,
	ingredientAPISearch
} = require("../utils/recipe_utilities")
const {
	queryBuilder
} = require("../helpers/recipe_helper")


//DISPLAY SEARCH RESULTS- based on API CALL
const displayRecipes = function(req, res) {
	//console.log(req.user.username)
    returnRecipesToBrowse(req).then((err, user) => {
        if (err) {res.status(500)
            res.json({
                error: err.message
            })
		}
		console.log(user)
	   //return user  
	})

}
const sanitizeQuery = function(queryItems) {
// If ingredients are empty
// then do an api call for random recipes display and put an alert like
// We see you have no ingredients! Here are some recipes you can check out

}






//DISPLAY SINGLE RECIPE PAGE- based on either API call if it doesnt exist in user saved recipes
const displaySingleRecipe = function(req, res) {
	//console.log("Hit controls")
	  getSingleRecipe(req)
		// .sort({
		// 	modified_date: -1
		// })
		.exec((err, items) => {
			if (err) {
				res.status(500)
				res.json({
					error: err.message
				})
            }
	
		   ///console.log(items)
			res.send(items)
		})
}

module.exports = {
    displayRecipes,
    displaySingleRecipe
}