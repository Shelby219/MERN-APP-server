const User = require('../models/user');
const SavedRecipe = require('../models/recipe');
const {
  userQueryBuilder
} = require("../helpers/recipe_helper")
const {
  sanitizeDataForIngredientQuery,
  singleRecipeAPISearch,
} = require("../helpers/api_search_helpers.js")


const returnRecipesToBrowse = async (req) => {
   const recipes = await User.findOne({ username: req.user.username })
    .then(recipes =>  userQueryBuilder(recipes))
    .then(queryItems =>  sanitizeDataForIngredientQuery(queryItems))
    //.then(recipesObject => recipeIdGetter(recipesObject.data))
    //.then(recipeIdsString => detailedRecipeAPISearch(recipeIdsString))
    .then(recipes =>  {return recipes})
    .catch(error => console.log(error) /*res.status(400).json({
      message: 'Request to Spoonacular failed/unauthorized'
   /})*/)
  return recipes
};  


const getAllSavedRecipes = function (req) {
  return SavedRecipe.find({ username: 'testusername'})  //for testing purposes only
  //return SavedRecipe.find({ username: req.user.username })
}

const getSingleRecipe =  function (req) {
  return SavedRecipe.findById(req.params.id);
}

const addSavedRecipe = function (req) {
   let date = Date.now();
    // Set date for this new recipe
    req.body.create_date = date
    req.body.modified_date = date
  return new SavedRecipe(req.body);
}

const deleteFromSavedRecipes = function (id) {
  return SavedRecipe.findByIdAndRemove(id);
};


module.exports = {
  returnRecipesToBrowse,
  singleRecipeAPISearch,
  getAllSavedRecipes,
  getSingleRecipe,
  addSavedRecipe,
  deleteFromSavedRecipes
}