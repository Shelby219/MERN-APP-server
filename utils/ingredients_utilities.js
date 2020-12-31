const User = require('../models/user');

// get all Ingredients
// return a query
const getAllIngredients = function (req) {
    return  User.findOne({ username:  req.params.username })
};


// add Ingredient
// returns a Post object
const addIngredient = async function (req) {
    let checker = req.path
    let fridge = checker.includes("fridge")
    let pantry = checker.includes("pantry")
    //console.log(fridge)
    //console.log(pantry)
    let user = await User.findOne({ username:  req.params.username }).exec();
 
    const newItem = req.body.item;
  
    if (fridge) {
        user.fridgeIngredients.push(...newItem);
        console.log("new Fridge Item")
    } else if (pantry)  {
        user.pantryIngredients.push(...newItem);
        console.log("new Pantry Item")
    } else {
        console.log("error message")
    }
  
    return User.findByIdAndUpdate(user._id, user, {
        new: true //this is needed for updating
    });
};

// delete Ingredient
// returns a query
const removeIngredient = function (req) {
    let checker = req.path
    let fridge = checker.includes("fridge")
    let pantry = checker.includes("pantry")
    console.log(fridge)
    console.log(pantry)
    if (fridge) {
        console.log("delete Fridge Item")
        return  User.findOneAndUpdate(
            { username: req.params.username },
            { $pull: { fridgeIngredients: req.body.item} },
            { new: true }
        )
    } else if (pantry) {
        console.log("delete pantry Item")
        return  User.findOneAndUpdate(
            { username: req.params.username },
            { $pull: { pantryIngredients: req.body.item} },
            { new: true }
        )
    } else {
        console.log("error message")
    }
};

// Clear ALL INGREDIENTS per fridge or pantry
// returns a query
const removeAllIngredients = function (req) {
    let checker = req.path
    let fridge = checker.includes("fridge")
    let pantry = checker.includes("pantry")
    console.log(fridge)
    console.log(pantry)
    if (fridge) {
        console.log("delete All Fridge Items")
        return  User.findOneAndUpdate(
            { username: req.params.username },
            { $set: { fridgeIngredients: []} },
            { new: true }
        )
    } else if (pantry) {
        console.log("delete All pantry Items")
        return  User.findOneAndUpdate(
            { username: req.params.username },
            { $set: { pantryIngredients: []} },
            { new: true }
        )
    } else {
        console.log("error message")
    }
};





module.exports = {
    getAllIngredients,
    addIngredient,
    removeIngredient,
    removeAllIngredients
}