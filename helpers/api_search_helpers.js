const axios = require('axios');

const request = axios.create({
    baseURL: 'https://api.spoonacular.com/recipes/',
    timeout: 5000
  });
  
  const ingredientAPISearch = async function (ingredients) { 
    //INTIAL FIND BY INGREDIENT CALL
    return await request.get(`findByIngredients?ingredients=${ingredients}&number=2&apiKey=${process.env.RECIPE_API_KEY}`)
  }
  
  const randomRecipeAPISearch = async function (ingredients) { 
    //return random recipes if use has no ingredients
    return await request.get(`/random?apiKey=${process.env.RECIPE_API_KEY}`)
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
  
  const singleRecipeAPISearch = async function (recipeID) { 
    //return single recipe based on ID if user does not have it saved
     let recipe = await request.get(`${recipeID}/information?includeNutrition=true&apiKey=${process.env.RECIPE_API_KEY}`)
     return recipe
  }


  //Utilmately returns the main recipe results to be displayed on the user browser
  const detailedRecipeAPISearch = async function (data) { 
    console.log("hit here")
    //console.log(data)
    let ingInfo = await data.usedAndMissedIng
    let recipeData = await request.get(`informationBulk?ids=${data.ids}&includeNutrition=true&apiKey=${process.env.RECIPE_API_KEY}`)
    //let recipes = await [ data.usedAndMissedIng, bulkRecipes = recipeData.data];

    
   let arr3 = ingInfo.map((item, i) => Object.assign({}, item, recipeData.data[i]));
   console.log(arr3)
  //  const mergeById = (a1, a2) =>
  //   a1.map(itm => ({
  //       ...a2.find((item) => (item.id === itm.id) && item),
  //       ...itm
  //   }));

  // console.log(mergeById(ingInfo, recipeData.data));
  }


module.exports = {
    ingredientAPISearch,
    randomRecipeAPISearch,
    sanitizeDataForIngredientQuery,
    singleRecipeAPISearch,
    detailedRecipeAPISearch
}