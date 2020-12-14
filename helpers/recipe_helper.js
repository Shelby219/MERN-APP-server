

//const request = 'https://api.spoonacular.com/recipes/complexSearch' +

//`?query=fillIngredients=false&ingredients=${queryIng}&limitLicense=true&number=25`

let user = {
    fridge: ["1", "2" ] ,
    pantry: ["1", "2"] ,
    diet: {dairy: true, egg: true} ,
    health: {dairy: true, egg: true}
}
const ingredientJoiner = function (fridge, pantry) { 
    const ingredients = fridge.concat(pantry);
    return ingredients.join(",")
}

const preferenceSeparator = function (preference) { 
    let result = Object.values(preference)
    return result.filter(Boolean);
}

const queryEditor = function (p, preferenceSeparator) { 
    let queryArray = preferenceSeparator(user.health)
    const newString = queryArray.join(",")
    return newString
}

console.log(queryEditor(user.health,  preferenceSeparator))


const queryBuilder = function (user) {
    
    if (user) {
        // let user = {
        //     fridge: user.fridgeIngredients,
        //     pantry: user.pantryIngredients,
        //     diet: user.dietPreferences,
        //     health:user.healthPreferences
        // }
        let user = {
            fridge: ["1", "2" ] ,
            pantry: ["1", "2"] ,
            diet: {dairy: false, egg: false} ,
            health: {dairy: false, egg: false}
        }
    
      let queryIng = ingredientJoiner(user.fridge, user.pantry)
      //let queryDiet = preferenceSeparator(user.diet) 
      //let queryHealth = preferenceSeparator(user.health)
      console.log(queryIng)


    } else  {
        console.log("No User Returned")
    }
};  

queryBuilder(user)
//console.log(preferenceSeparator(user.health))


