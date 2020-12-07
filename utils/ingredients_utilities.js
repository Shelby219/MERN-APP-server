const User = require("../models/User");



// get all Ingredients
// return a query
const getAllIngredients = function (req) {
    let user = User.findById(req.user._id);
    return user
};


// add Ingredient
// returns a Post object
const addIngredient = async function (req) {
    let user = await User.findById(req.user._id);

    const newItem = {req.body};

    user.fridgeIngredients.push(newItem);
    return User.findByIdAndUpdate(req.params.name, user, {
        new: true //this is needed for updating
    });
};

// delete Ingredient
// returns a query
const removeIngredient = function (id) {
    return  User.findOneAndUpdate(
        { _id: req.user._id },
        { $pull: { fridgeIngredients: req.body} },
        { new: true }
    )
};


module.exports = {
    getAllIngredients,
    addIngredient,
    removeIngredient
}