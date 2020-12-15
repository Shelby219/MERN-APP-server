//Need to add validation code for if objects are empty- ie false 

//const request = 'https://api.spoonacular.com/recipes/complexSearch' 
//+ `?query=fillIngredients=false&ingredients=${queryInfo[0]}&diet=${queryInfo[1]}&intolerances=${queryInfo[2]}&limitLicense=true&number=25`

// let user = {
//     fridge: ["1", "2" ] ,
//     pantry: ["1", "2"] ,
//     diet: {vegetarian: false, paleo: false} ,
//     health: {dairy: true, egg: true}
// }
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
   
function userQueryBuilder(returnUser) {
    if (returnUser) {
        let user = {
            fridge: returnUser.fridgeIngredients,
            pantry: returnUser.pantryIngredients,
            diet: returnUser.dietPreferences,
            health:returnUser.healthPreferences
        }
      let queryIng = ingredientJoiner(user.fridge, user.pantry)
      let queryHealth = queryEditor(user.health,  preferenceSeparator)
      let queryDiet = queryEditor(user.diet,  preferenceSeparator)
      let queryInfo = {ingredients: queryIng, health: queryHealth, diet: queryDiet}
      //console.log(queryInfo)
      return queryInfo

    } else  {
        console.log("No User Returned")
    }
};  



module.exports = {
    userQueryBuilder
}