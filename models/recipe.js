const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const SavedRecipe = new Schema({
    username: {
        type: String,
        required: true
    },
    recipeID: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    readyInMinutes: {
        type: Number
    },
    servings: {
        type: Number
    },
    servings: {
        type: Number
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