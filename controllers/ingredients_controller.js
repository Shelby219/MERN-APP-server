const {
	getAllIngredients,
	addIngredient,
	removeIngredient,
	removeAllIngredients
} = require("../utils/ingredients_utilities")



//GET ALL INGREDIENTS
const getIngredients = function(req, res) {
	//console.log("Hit controls")
	  getAllIngredients(req)
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

//CREATE NEW INGREDIENT
const createIngredient = function(req, res) {
	//console.log(req)
	addIngredient(req)
		.then((user) => {
			//console.log(user)
			res.status(201)
			res.send(user)
			//res.redirect("/ingredients/fridge")
			})
		.catch(err => 
			//res.status(500)
			res.json({error: err})
			)
}

//DELETE A INGREDIENT
const deleteIngredient = function(req, res) {
	console.log("hit controls")
	//console.log(req)
	// Check for error from middleware
	if (req.error) {
		res.status(req.error.status)
		res.send(req.error.message)
	} else {
		// execute the query from deletePost
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
		removeAllIngredients(req).exec(err => {
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




module.exports = {
	getIngredients,
    createIngredient,
	deleteIngredient,
	deleteAllIngredients
}
