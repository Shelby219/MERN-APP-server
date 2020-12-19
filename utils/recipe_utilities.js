
const axios = require('axios');
const User = require('../models/user');

const {
  userQueryBuilder,
  recipeIdGetter
} = require("../helpers/recipe_helper")


const returnRecipesToBrowse = async (req) => {
   const recipes = await User.findOne({ username: req.user.username })
    .then(recipes =>  userQueryBuilder(recipes))
    .then(queryItems =>  sanitizeDataForIngredientQuery(queryItems))
    .then(recipesObject => recipeIdGetter(recipesObject.data))
    .then(recipeIdsString => detailedRecipeAPISearch(recipeIdsString))
    .then(recipes =>  {return recipes})
    .catch(error => console.log(error) /*res.status(400).json({
      message: 'Request to Spoonacular failed/unauthorized'
   /})*/)
  return recipes
};  

const request = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes/',
  timeout: 5000
});

const ingredientAPISearch = async function (ingredients) { 
  //INTIAL FIND BY INGREDIENT CALL
  return await request.get(`findByIngredients?ingredients=${ingredients}&number=20&apiKey=${process.env.RECIPE_API_KEY}`)
}

const randomRecipeAPISearch = async function (ingredients) { 
  //return random recipes if use has no ingredients
  return await request.get(`/random?apiKey=${process.env.RECIPE_API_KEY}`)
}

//Utilmately returns the main recipe results to be displayed on the user browser
const detailedRecipeAPISearch = async function (recipeIdsString) { 
  //return random recipes if use has no ingredients
  return await request.get(`informationBulk?ids=${recipeIdsString}&apiKey=${process.env.RECIPE_API_KEY}`)
}

const sanitizeDataForIngredientQuery = function(queryItems) {
    // If ingredients are empty
    if (queryItems.ingredients === "" || null || undefined) {
      return randomRecipeAPISearch(queryItems.ingredients) 
      // then do an api call for random recipes display and put an alert like
      // We see you have no ingredients! Here are some recipes you can check out
    } else {
      //else do ingredient API search
      return ingredientAPISearch(queryItems.ingredients)
    }
  }


const getSingleRecipe =  function (req) {
   
};


module.exports = {
  returnRecipesToBrowse,
  ingredientAPISearch,
  getSingleRecipe
}