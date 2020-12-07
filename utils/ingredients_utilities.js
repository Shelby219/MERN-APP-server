const User = require('../models/user');

// get all Ingredients
// return a query
const getAllIngredients = function (req) {
    //console.log(req.user._id)
    return  User.findOne({ username:  req.params.username })
   
};


// add Ingredient
// returns a Post object
const addIngredient = async function (req) {
  //console.log(req.params.username )
    let user = await User.findOne({ username:  req.params.username }).exec();
    //console.log(user._id)
    
    const newItem = req.body.item;
    //console.log(newItem)
    user.fridgeIngredients.push(newItem);
    //console.log(user)
    return User.findByIdAndUpdate(user._id, user, {
        new: true //this is needed for updating
    });
};

// delete Ingredient
// returns a query
const removeIngredient = function (req) {
    console.log("hit utils")
    return  User.findOneAndUpdate(
        { username: req.params.username },
        { $pull: { fridgeIngredients: req.body.item} },
        { new: true }
    )
};


module.exports = {
    getAllIngredients,
    addIngredient,
    removeIngredient
}