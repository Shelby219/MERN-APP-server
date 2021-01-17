//shuffling all ingredients
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

const ingredientJoiner = function (fridge, pantry) { 
    const ingredients = fridge.concat(pantry);
   
    shuffleArray(ingredients)
    return ingredients.join(",+")
}

const preferenceSeparator = function (preference) { 
    let result = Object.keys(preference).filter((key) => preference[key])
    return result
}

function queryEditor(p, preferenceSeparator) { 
    let queryArray = preferenceSeparator(p)
    const newString = queryArray.join(",+")
    return newString
}
   
async function userQueryBuilder(returnUser) {
   // console.log(returnUser)
    if (returnUser) {
        let user = {
            fridge: returnUser.fridgeIngredients,
            pantry: returnUser.pantryIngredients,
            //diet: returnUser.dietPreferences,
            //health:returnUser.healthPreferences
            pref: returnUser.preferences
        }
      let queryIng = await ingredientJoiner(user.fridge, user.pantry)
      let querypref = await queryEditor(user.pref,  preferenceSeparator)
      //let queryHealth = await queryEditor(user.health,  preferenceSeparator)
      //let queryDiet = await queryEditor(user.diet,  preferenceSeparator)
      //let queryInfo = {ingredients: queryIng, health: queryHealth, diet: queryDiet}
      let queryInfo = {ingredients: queryIng, pref: querypref }
      console.log(queryInfo)
      return queryInfo

    } else  {
        throw new Error("No User Returned")
        //console.log("No User Returned")
    }
};  

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
   
   //console.log("check userPref filter", myArrayFiltered)
  return myArrayFiltered
}


module.exports = {
    userQueryBuilder,
    recipeIdGetter,
    userPrefFilter
}