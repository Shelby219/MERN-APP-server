const User = require('../models/user');


// delete User
// returns a query
const deleteUser = function (id) {
    return User.findByIdAndRemove(id);
};

// // update User
// // returns a query
// const updateUser = function (req) {
//     let body = {}
//     Object.assign(body, JSON.parse(JSON.stringify(req.body)));
//     actualRequest= {}

//     for (const [key, value] of Object.entries(body)) {
//         if (value) {
//             console.log(key)
//             actualRequest[key] = value
//         }
//     }
//     return User.findByIdAndUpdate(req.session.passport.user, actualRequest, {
//         new: true
//     });
// };

// GET USER BY NAME PARAMS for ACCOUNT SETTINGS
// returns a query
const getUserByParam = function (req) {
    //console.log("hit utils")
    //console.log(req.params.name)
    return  User.findOne({ name: req.params.name });
};
 
const updateUser = function (req) {
    //console.log("hit utils")
    //console.log(req.session.passport.user)
    //console.log(req.params.name)   Test User 1
    //console.log(req.body)   { email: 'updatetest@test.com', password: 'abcdef' }
    // use new:true to return the updated post rather than the original post when the query is executed
    return User.findOneAndUpdate(req.params.name, req.body, {
        new: true
    });
};







module.exports = {updateUser, deleteUser, getUserByParam}