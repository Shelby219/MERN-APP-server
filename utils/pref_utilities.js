const UserPref = require('../models/preferences');

const updatePref = function (req) {
    return UserPref.findOneAndUpdate(req.params.username, req.body, {
        new: true
    });
}

module.exports = {updatePref}

