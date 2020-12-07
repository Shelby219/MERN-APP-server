const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    email: {
        type: String,
        unique: true,
        require: true
  },
    password: {
        type: String,
        require: true  
    },
    name: {
        type: String,
    },
    username: {
        type: String,
        unique: true,
        require: true
    },
    profile: {
        type: String,
    },
    preferences:{
        type: Schema.Types.ObjectId, 
        ref: "preferences" 
    },
    fridgeIngredients: {
        type:  Array,
        default: []
    },
    pantryIngredients: {
        type:  Array,
        default: ["water", "salt", "olive oil", "black pepper"]
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    lastLogin: {
        type: Date,
        default: Date.now
    }
});

User.plugin(require('mongoose-bcrypt'));
module.exports = mongoose.model('user', User);

