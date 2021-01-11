const {
	getAllIngredients,
	addIngredient,
	removeIngredient,
	removeAllIngredients
} = require("../utils/ingredients_utilities")



//GET ALL INGREDIENTS
const getIngredients = function(req, res) {

	  getAllIngredients(req)
		.exec((err, items) => {
			if (err) {
				res.status(500)
				res.json({
					error: err.message
				})
			}
			try {
				items.fridgeIngredients.sort()
				items.pantryIngredients.sort()
				res.send(items)
			} catch (err) {	
				res.status(500).json({error: "Error retrieving ingredients"})
			}
		   
	
		})
}

//CREATE NEW INGREDIENT
const createIngredient = function(req, res) {

	addIngredient(req)
		.then((user) => {
			//console.log(user)
			//console.log(user)
			res.status(201)
			res.send(user)
			
			//res.redirect("/ingredients/fridge")
			})
		.catch(err => 
			res.status(500).json({error: err.message})
			)
}

//DELETE A INGREDIENT
const deleteIngredient = function(req, res) {
	console.log("hit controls")
	//console.log(req)
	// Check for error from middleware
	if (req.error) {
		//console.log(req.error.message)
		//res.status(500).json({error: req.error.message})
		res.status(req.error.status)
		res.send(req.error.message)
	} else {
		// execute the query from deleteIngr
		removeIngredient(req).exec(err => {
			if (err) {
				res.status(500)
				
				res.json({
				error: err.message
				})
			}
            res.sendStatus(204)
            //res.redirect("/ingredients/fridge")
		})
	}
}

//DELETE ALL INGREDIENTS
const deleteAllIngredients = function(req, res) {
//	console.log("hit controls")
	// Check for error from middleware
	if (req.error) {
		res.status(req.error.status)
		res.send(req.error.message)
	} else {
		// execute the query from deletePost
		removeAllIngredients(req).exec((err, user) => {
			if (err) {
				res.status(500)
				
				res.json({
				error: err.message
				})
			}
			if (user) {
				res.sendStatus(204)
			} else {
				res.status(500)
				
				res.json({
				error: 'Error deleting ingredients'
				})
			}
			//console.log(user)
           
		})
	}
}




module.exports = {
	getIngredients,
    createIngredient,
	deleteIngredient,
	deleteAllIngredients
}
