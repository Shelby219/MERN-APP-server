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
        default: "user"
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
    dietPreferences: {
        vegetarian: {type: Boolean,default: false},
        glutenFree: {type: Boolean,default: false},
        ketogenic: {type: Boolean,default: false},
        vegan: {type: Boolean,default: false},
        pescetarian: {type: Boolean,default: false},
        paleo: {type: Boolean,default: false},
    },
    healthPreferences: {
        dairy: {type: Boolean,default: false},
        egg: {type: Boolean,default: false},
        gluten: {type: Boolean,default: false},
        grain: {type: Boolean,default: false},
        peanut: {type: Boolean,default: false},
        seafood: {type: Boolean,default: false},
        sesame: {type: Boolean,default: false},
        shellfish: {type: Boolean,default: false},
        soy: {type: Boolean,default: false},
        sulphite: {type: Boolean,default: false},
        treeNut: {type: Boolean,default: false},
        wheat: {type: Boolean,default: false}
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

// User.pre("save", function(next) {
//     console.log('pre save password: ' + this.password);
//     if(!this._update.password) {
//         return next();
//     } else {
//     this.password = Bcrypt.hashSync(this.password, 10);

//         next();
//     }
// });

// User.pre('findOneAndUpdate', function(next) {
//     console.log('pre save password: ' + this.password);
//     if (this.isModified('password')) // If the pw has been modified, then encrypt it again
//         this.password = Bcrypt.hashSync(this.password, 10);
//     next();
// });

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

