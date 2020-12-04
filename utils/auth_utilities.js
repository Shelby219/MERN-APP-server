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
 
const updateUser = function (req) {
    console.log("hit utils")
    console.log(req.session.passport.user)
    // use new:true to return the updated post rather than the original post when the query is executed
    return User.findByIdAndUpdate(req.params.name, req.body, {
        new: true
    });
};










module.exports = {updateUser, deleteUser}