const User = require('../models/user');


// delete User
// returns a query
const deleteUser = function (id) {
    return User.findByIdAndRemove(id);
};


// GET USER BY NAME PARAMS for ACCOUNT SETTINGS
// returns a query
const getUserByParam = function (req) {
    //console.log("hit utils")
    //console.log(req.params.name)
    return  User.findOne({ name: req.params.name });
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
    //console.log("hit utils")
    //console.log(req.session.passport.user)
    //console.log(req.params.name)   Test User 1
    //console.log(req.body)   { email: 'updatetest@test.com', password: 'abcdef' }
   
  
    // let updateSettings = {};
    // updateSettings.name = req.body.name;
    // updateSettings.email = req.body.email;
    // updateSettings.password = req.body.password;
    // updateSettings.profile = req.body.profile;


    // User.update({_id: req.session.passport.user}, {$set: updateSettings}, function (err){
    //     if (err) console.log(err);
     //     res.render("user/"+ req.body.name+ "accounts-settings", {
     //     user: req.user
     // });
    
    return User.findOneAndUpdate(req.params.name, req.body, {
        new: true
    });
};



module.exports = {updateUser, deleteUser, getUserByParam}