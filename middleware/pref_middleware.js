const UserPref= require("../models/preferences");


function autoNewPreferences(user) {

        UserPref.create({ 
            user: user._id
        })
        .then(x => console.log(x._id))
        .catch(x => console.log(x))
}


module.exports = {
    autoNewPreferences
}
