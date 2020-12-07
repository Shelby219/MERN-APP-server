const {
	getAllIngredients,
	addIngredient,
	removeIngredient
} = require("../utils/ingredient_utilities")




const getIngredients = function(req, res) {
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
			res.send(items)
		})
}


const createIngredient = function(req, res) {
	addIngredient(req).then((err, user) => {
		if(err){
			res.status(500)
			return res.json({
				error: err.message
			})
        }
		res.status(201)
        res.send(user)
        //res.redirect("/ingredients/fridge")
	})
}

const deleteIngredient = function(req, res) {
	// Check for error from middleware
	if (req.error) {
		res.status(req.error.status)
		res.send(req.error.message)
	} else {
		// execute the query from deletePost
		removeIngredient(req.user.id).exec(err => {
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
    deleteIngredient
}
