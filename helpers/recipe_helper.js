

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
    if (returnUser) {
        let user = {
            fridge: returnUser.fridgeIngredients,
            pantry: returnUser.pantryIngredients,
            diet: returnUser.dietPreferences,
            health:returnUser.healthPreferences
        }
      let queryIng = await ingredientJoiner(user.fridge, user.pantry)
      let queryHealth = await queryEditor(user.health,  preferenceSeparator)
      let queryDiet = await queryEditor(user.diet,  preferenceSeparator)
      let queryInfo = {ingredients: queryIng, health: queryHealth, diet: queryDiet}
      console.log(queryInfo)
      return queryInfo

    } else  {
        throw new Error("No User Returned")
        //console.log("No User Returned")
    }
};  

async function recipeIdGetter(recipesObject) { 
    //const newArray = await recipesObject.map(recipe => recipe.id);
    //const newString = newArray.join(",")
    //console.log(newString)
    //return newString

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


// console.log(recipeIdGetter([
//     {
//       id: 1142012,
//       title: 'Feta-Brined Roast Chicken',
//       image: 'https://spoonacular.com/recipeImages/1142012-312x231.jpg',
//       imageType: 'jpg',
//       usedIngredientCount: 3,
//       missedIngredientCount: 4,
//       missedIngredients: [ [Object], [Object], [Object], [Object] ],
//       usedIngredients: [ [Object], [Object], [Object] ],
//       unusedIngredients: [ [Object] ],
//       likes: 1
//     },
//     {
//       id: 38606,
//       title: 'Chicken Stewed In Garlic And Cinnamon',
//       image: 'https://spoonacular.com/recipeImages/38606-312x231.jpg',
//       imageType: 'jpg',
//       usedIngredientCount: 2,
//       missedIngredientCount: 5,
//       missedIngredients: [ [Object], [Object], [Object], [Object], [Object] ],
//       usedIngredients: [ [Object], [Object] ],
//       unusedIngredients: [],
//       likes: 19
//     }
//   ]))
//This is for filtering based off preferences TBA
function basedOnPreferenceExtractor(recipeDataArray) { 
   let newArray = recipeDataArray.filter(function(r) {
        return r.vegetarian === true ||
        r.vegan === true ||
        r.glutenFree=== true ||
        r.dairyFree === true ||
        r.veryHealthy === true ||
        r.cheap === true ||
        r.veryPopular === true ||
        r.sustainable === true ||
        r.lowFodmap === true 
   });
   return newArray
}

module.exports = {
    userQueryBuilder,
    basedOnPreferenceExtractor,
    recipeIdGetter
}