const User = require('../models/user');

const updatePref = function (req) {
    return User.findOneAndUpdate(   
        { username: req.params.username },
        { preferences: req.body},
        { new: true });
}
     
module.exports = {updatePref}

