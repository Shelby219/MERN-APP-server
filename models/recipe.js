const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const SavedRecipe = new Schema({
    username: {
        type: String,
        required: true
    },
    recipeID : { type : Number, required : true },
    title: {
        type: String,
        required: true
    },
    servings: {
        type: Number
    },
    readyInMinutes: {
        type: Number
    },
    extendedIngredients: {
        type: Array
    },
    sourceUrl: {
        type: String
    },
    image: {
        type: String
    },
    cuisines: {
        type: Array
    },
    dishTypes: {
        type: Array
    },
    diets: {
        type: Array
    },
    instructions: {
        type: Array
    },
    vegetarian: {type: Boolean,default: false},
    vegan: {type: Boolean,default: false},
    glutenFree: {type: Boolean,default: false},
    dairyFree: {type: Boolean,default: false},
    veryHealthy: {type: Boolean,default: false},
    cheap: {type: Boolean,default: false},
    veryPopular: {type: Boolean,default: false},
    sustainable: {type: Boolean,default: false},
    create_date: {
        type: Date, 
        required: true
    },
    modified_date: {
        type: Date, 
        required: true
    }
});


module.exports = mongoose.model("SavedRecipe", SavedRecipe);