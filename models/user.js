const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Bcrypt = require('mongoose-bcrypt')

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
        require: true,
        default: ""
    },
    profile: {
        type: String,
        default: ""
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
    },
    preferences: {
        vegetarian: {type: Boolean,default: false},
        vegan: {type: Boolean,default: false},
        glutenFree: {type: Boolean,default: false},
        dairyFree: {type: Boolean,default: false},
        veryHealthy: {type: Boolean,default: false},
        cheap: {type: Boolean,default: false},
        veryPopular: {type: Boolean,default: false},
        sustainable: {type: Boolean,default: false},
    }
});

User.plugin(require('mongoose-bcrypt'));

User.statics.findByUsername = function (user) {
    return this.find({username: user});
}

User.statics.findByEmail = function (user) {
    return this.find({email: user});
}

User.methods.isValidPassword = async function(password) {
    const user = this;
    const compare = await bcrypt.compare(password, user.password);
  
    return compare;
}

module.exports = mongoose.model('user', User);

