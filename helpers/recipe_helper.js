//SHUFFLING ALL INGREDIENTS
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

//JOINING FRIDGE AND PANTRY INGREDIENTS 
const ingredientJoiner = function (fridge, pantry) { 
    const ingredients = fridge/*.concat(pantry);*/ //Removed pantry for now
    shuffleArray(ingredients)
    return ingredients.join(",+")
}

//SEPARATING USER PREFERENCES
const preferenceSeparator = function (preference) { 
    let result = Object.keys(preference).filter((key) => preference[key])
    return result
}

//
function queryEditor(p, preferenceSeparator) { 
    let queryArray = preferenceSeparator(p)
    const newString = queryArray.join(",+")
    return newString
}

//CALLING ABOVE FUNCTIONS TO BUILD A OBJECT WHICH GETS USED IN QUERY
async function userQueryBuilder(returnUser) {
   // console.log(returnUser)
    if (returnUser) {
        let user = {
            fridge: returnUser.fridgeIngredients,
            pantry: returnUser.pantryIngredients,

            pref: returnUser.preferences
        }
      let queryIng = await ingredientJoiner(user.fridge, user.pantry)
      let querypref = await queryEditor(user.pref,  preferenceSeparator)
      let queryInfo = {ingredients: queryIng, pref: querypref }
      console.log(queryInfo)
      return queryInfo

    } else  {
        throw new Error("No User Returned")
    }
};  

//GETTING ALL IDS FROM RECIPE ARRAY OF OBJECTS TO USE IN BULK RECIPE SEARCH
async function recipeIdGetter(recipesObject) { 
    // if the object returned first value is recipes then the random recipe API query was called- so just return the data
    if (Object.keys(recipesObject)[0] === "recipes") {
           return recipesObject
    } else {
        //console.log(recipesObject)
   
    const idArray = []
    const filtered = []

    await recipesObject.map(recipe => {
        idArray.push(recipe.id)
        filtered.push({
        id: recipe.id,
        usedIngred: recipe.usedIngredientCount, 
        missedIngred: recipe.missedIngredientCount,
        usedIngredItems: recipe.usedIngredients, 
        missedIngredItems: recipe.missedIngredients
        })
        });

     const newString = idArray.join(",")
      
     const data = {ids: newString, usedAndMissedIng: filtered }
   // console.log(data)
   return data
  }
}


//THIS IS FOR FILTERING SEARCHED RECIPES BY USER PREFERENCES
async function userPrefFilter (userPrefs, recipes) {
    //let userPrefs = JSON.parse(getPref())
      //console.log("check",userPrefs, recipes)
     const myArrayFiltered = await recipes.filter((r) => {
       return  r.vegetarian === userPrefs.vegetarian 
       || r.vegan === userPrefs.vegan
       || r.glutenFree === userPrefs.glutenFree
       || r.dairyFree === userPrefs.dairyFree
       || r.veryHealthy === userPrefs.veryHealthy
       || r.cheap === userPrefs.cheap
       || r.veryPopular === userPrefs.veryPopular
       || r.sustainable === userPrefs.sustainable
       ;
   });
   
  return myArrayFiltered
}


module.exports = {
    userQueryBuilder,
    recipeIdGetter,
    userPrefFilter
}