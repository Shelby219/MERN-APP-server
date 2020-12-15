
const axios = require('axios');
const User = require('../models/user');

const {
	userQueryBuilder
} = require("../helpers/recipe_helper")


const getUser = async (req) => {
   await User.findOne({ username: req.user.username })
    .then(returnUser =>  userQueryBuilder(returnUser))
    .then(query => ingredientAPISearch(query.ingredients))
    .catch(e => console.log(e))
};  

const ingredientAPISearch = async function (ingredients) { 
  //INTIAL FIND BY INGREDIENT CALL
  await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=20&apiKey=${process.env.RECIPE_API_KEY}`)
  .then(recipes =>  console.log(recipes.data)/*res.send(recipes.data)*/)
  .catch(e => console.log(e)/*res.status(400).json({
    message: 'Request to Spoonacular failed/unauthorized'
  })*/);
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
    getUser,
    ingredientAPISearch
}