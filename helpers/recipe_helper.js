



const queryBuilder = function (user) {
    
    if (user) {
        let user = {
            fridge: user.fridgeIngredients,
            pantry: user.pantryIngredients,
            diet: user.dietPreferences,
            health:user.healthPreferences
        }
    


      ingredientJoiner(user.fridge, user.pantry)
      preferenceSeparator(diet)
      preferenceSeparator(health)

    } else  {
        console.log("No User Returned")
    }
};


const ingredientJoiner = function (fridge, pantry) { 
    const ingredients = fridge.concat(pantry);
    return ingredients
}


const preferenceSeparator = function (preference) { 

    let result = Object.keys(preference)
    .reduce((o, key) => {
        preference[key] === true && (o[key] = preference[key]);
      return o;
    }, {});
    return result;
}

const queryEditor = function (queryArray) { 

    const newString = queryArray.map(q => 
        q + '%2C'
    );

    return newString
}

