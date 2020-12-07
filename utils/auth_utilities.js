const User = require('../models/user');


// delete User
// returns a query
const deleteUser = function (id) {
    return User.findByIdAndRemove(id);
};

// GET USER BY NAME PARAMS for ACCOUNT SETTINGS
const getUserByParam = function (req) {
    return  User.findOne({ name: req.params.name });
};
 
const updateUser = function (req) {
 //can pass req.body through as update as the body gets prefilled with data from DB
    return User.findOneAndUpdate(req.params.name, req.body, {
        new: true
    });
};



module.exports = {updateUser, deleteUser, getUserByParam}