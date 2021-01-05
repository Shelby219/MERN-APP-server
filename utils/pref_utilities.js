const User = require('../models/user');

const updatePref = function (req) {
    return User.findOneAndUpdate({ username:  req.params.username }, req.body, {
        new: true
    });
}

module.exports = {updatePref}

