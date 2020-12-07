
const UserPref = require('../models/preferences');

const updatePref = function (req) {
    //console.log("hit utils")
    //console.log(req.session.passport.user)
    return UserPref.findOneAndUpdate(req.params.name, req.body, {
        new: true
    });
};

//     let updateDietPrefs= {};
//     updateDietPrefs.vegetarian = req.body.vegetarian;
//     updateDietPrefs.glutenFree = req.body.glutenFree;
//     updateDietPrefs.ketogenic = req.body.ketogenic;
//     updateDietPrefs.vegan = req.body.vegan;
//     updateDietPrefs.pescetarian = req.body.pescetarian;
//     updateDietPrefs.paleo = req.body.paleo;

//     let updateHealthPrefs= {};
//     updateHealthPrefs.dairy = req.body.dairy;
//     updateHealthPrefs.egg = req.body.egg;
//     updateHealthPrefs.gluten = req.body.gluten;
//     updateHealthPrefs.grain = req.body.grain;
//     updateHealthPrefs.peanut = req.body.peanut;
//     updateHealthPrefs.seafood = req.body.seafood;
//     updateHealthPrefs.sesame = req.body.sesame;
//     updateHealthPrefs.shellfish = req.body.shellfish;
//     updateHealthPrefs.soy = req.body.soy;
//     updateHealthPrefs.sulphite = req.body.sulphite;
//     updateHealthPrefs.treeNut = req.body.treeNut;
//     updateHealthPrefs.wheat = req.body.wheat;

// //{_id: req.session.passport.user}
//     return UserPref.findOneAndUpdate({name: req.params.name}, {$set: {dietPreferences: updateDietPrefs, healthPreferences: updateHealthPrefs}}, { overwrite: true }, function (err){
//              if (err) console.log(err);
          
//           });
//         }

module.exports = {updatePref}

