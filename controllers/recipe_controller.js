const {
	getRecipesFromAPI,
	getSingleRecipe,
} = require("../utils/ingredients_utilities")



//DISPLAY SEARCH RESULTS- based on API CALL
const displayRecipes = function(req, res) {
    
    
    
	  getRecipesFromAPI(req)
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