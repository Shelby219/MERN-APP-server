
const axios = require('axios');
const User = require('../models/user');

const {
  userQueryBuilder,
  recipeIdGetter
} = require("../helpers/recipe_helper")


const returnRecipesToBrowse = async (req) => {
   await User.findOne({ username: req.user.username })
    .then(returnUser =>  userQueryBuilder(returnUser))
    .then(queryItems =>  sanitizeDataForIngredientQuery(queryItems))
    .then(recipesObject => recipeIdGetter(recipesObject.data))
    .then(recipeIdsString => detailedRecipeAPISearch(recipeIdsString))
    .catch(e => console.log(e.message) /*res.status(400).json({
      message: 'Request to Spoonacular failed/unauthorized'
    })*/)
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

const detailedRecipeAPISearch = async function (recipeIdsString) { 
  //return random recipes if use has no ingredients
  await request.get(`informationBulk?ids=${recipeIdsString}&apiKey=${process.env.RECIPE_API_KEY}`)
  .then(recipes =>  console.log(recipes.data)/*res.send(recipes.data)*/)
  .catch(e => console.log(e)/*res.status(400).json({
    message: 'Request to Spoonacular failed/unauthorized'
  })*/);
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

//console.log(require('dotenv').config({path: __dirname + '/.env'}))
//ingredientAPISearch("chicken,+fish")

// const getRecipesFromAPI = function (req) {
//     request.get(`?query=fillIngredients=false&ingredients=${queryInfo[0]}&diet=${queryInfo[1]}&intolerances=${queryInfo[2]}&limitLicense=true&number=25
//     &apiKey=${process.env.RECIPE_API_KEY}`
//     )
//     .then(recipes => res.send(recipes.data))
//     .catch(e => res.status(400).json({
//       message: 'Request to Spoonacular failed/unauthorized'
//     }));
// };

// const getSingleRecipe =  function (req) {
   
// };


module.exports = {
  returnRecipesToBrowse,
    ingredientAPISearch
}