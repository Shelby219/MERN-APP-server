const User = require('../models/user');


// GET USER BY NAME PARAMS for ACCOUNT SETTINGS
const getUserByParam = function (req) {
   console.log(req.params.username)
    return  User.findOne({ username: req.params.username });
};
 
const updateUser = function (req) {
 //can pass req.body through as update as the body gets prefilled with data from DB
    return User.findOneAndUpdate(req.params.username, req.body, {
        new: true
    });
};



// delete User
// returns a query
const deleteUser = function (id) {
    return User.findByIdAndRemove(id);
};
module.exports = {updateUser, deleteUser, getUserByParam}