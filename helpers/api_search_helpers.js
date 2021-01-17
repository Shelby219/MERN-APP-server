const axios = require('axios');

const request = axios.create({
    baseURL: 'https://api.spoonacular.com/recipes/',
    timeout: 5000
  });
  
  const ingredientAPISearch = async function (ingredients) { 
    //INTIAL FIND BY INGREDIENT CALL
    return await request.get(`findByIngredients?ingredients=${ingredients}&number=15&ranking=1&apiKey=${process.env.RECIPE_API_KEY}`)
  }
  
  const randomRecipeAPISearch = async function () { 
    //return random recipes if use has no ingredients
    return await request.get(`/random?number=2&apiKey=${process.env.RECIPE_API_KEY}`)
  }
  
  const sanitizeDataForIngredientQuery = function(queryItems) {
      // If ingredients are empty
      if (queryItems.ingredients === "" || null || undefined) {
        console.log("random recipe search returned")
        return randomRecipeAPISearch() 
        // then do an api call for random recipes display and put an alert like
        // We see you have no ingredients! Here are some recipes you can check out
      } else {
        //else do ingredient API search
        console.log(" recipe search returned")
        return ingredientAPISearch(queryItems.ingredients)
      }
    }
  
  const singleRecipeAPISearch = async function (recipeID) { 
    //return single recipe based on ID if user does not have it saved
     let recipe = await request.get(`${recipeID}/information?includeNutrition=false&apiKey=${process.env.RECIPE_API_KEY}`)
     return recipe
  }


  //Utilmately returns the main recipe results to be displayed on the user browser
  const detailedRecipeAPISearch = async function (data) { 
    // if the object returned first value is recipes then the random recipe API query was called- so just return the data
    //refactor to break the promise chain instead?
    if (Object.keys(data)[0] === "recipes") {
      console.log("hit random recipe returned")
      return data.recipes

    } else {
        console.log("hit here")
        //console.log(data)
        let ingInfo = await data.usedAndMissedIng
        let recipeData = await request.get(`informationBulk?ids=${data.ids}&includeNutrition=true&apiKey=${process.env.RECIPE_API_KEY}`)
        //let recipes = await [ data.usedAndMissedIng, bulkRecipes = recipeData.data];

        //this returns a combined array of objects putting the used and missing ingredients with all the other recipe data, as this data was needed 
      let arr3 = await ingInfo.map((item, i) => Object.assign({}, item, recipeData.data[i]));
      //console.log(arr3)
      return arr3
      }
   //THIS ALSO WORKS
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