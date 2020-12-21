const {
	returnRecipesToBrowse,
	getSingleRecipe,
} = require("../utils/recipe_utilities")

//DISPLAY SEARCH RESULTS- based on API CALL
const displayRecipes =  async function(req, res) {
	try {
		//start recipe results
		 let recipes = await returnRecipesToBrowse(req)
		 //console.log(recipes)
		 //return recipes
		 res.status(200)
		 res.send(recipes)

	} catch (err) {
		 if (err) //{res.status(500)
            res.json({
               // error: err.message
		 })
		   //console.log(err.message)
		//}
	}
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