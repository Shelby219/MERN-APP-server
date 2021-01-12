

const ingredientJoiner = function (fridge, pantry) { 
    const ingredients = fridge.concat(pantry);
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

    //before executing this do an if else to determine if random recipes were returned or not- if they were then just return recipes
    const idArray = []
    const filtered = []

   await recipesObject.map(recipe => {
    idArray.push(recipe.id)
    filtered.push({
      id: recipe.id,
      usedIngred: recipe.usedIngredientCount, 
      missedIngred: recipe.missedIngredientCount
      })
    });
    const newString = idArray.join(",")
      
    const data = {ids: newString, usedAndMissedIng: filtered }
    //console.log(data)
   return data
  }
}







// let test = [{
//    id: 1,
//    vegetarian: false,
//    vegan: false,
//    glutenFree: true,
//    dairyFree: false,
//    veryHealthy: true,
//    cheap: false,
//    veryPopular: false,
//    sustainable: false
// },
//    {
//    id: 2,
//    vegetarian: true,
//    vegan: false,
//    glutenFree: true,
//    dairyFree: false,
//    veryHealthy: false,
//    cheap: false,
//    veryPopular: false,
//    sustainable: false
// }]

// async function recipeFilterFromPref(recipes, preferences) { 
//     const filteredPerson = await recipes.filter(function(r) {
//       r.vegetarian === preferences[vegetarian] ||
//       r.vegan === preferences[vegan] ||
//       r.glutenFree  === preferences[glutenFree] ||
//       r.dairyFree === preferences[dairyFree] ||
//       r.veryHealthy === preferences[veryHealthy] ||
//       r.cheap === preferences[cheap] ||
//       r.veryPopular === preferences[veryPopular] ||
//       r.sustainable === preferences[sustainable] 
//    });

//    console.log(filteredPerson)
// }

// let testPref = {
//     vegetarian: true,
//     vegan: true,
//     glutenFree: true,
//     dairyFree: true,
//     veryHealthy: true,
//     cheap: true,
//     veryPopular: true,
//     sustainable: true,
// }
// recipeFilterFromPref(test, testPref) 


module.exports = {
    userQueryBuilder,
    recipeIdGetter
}