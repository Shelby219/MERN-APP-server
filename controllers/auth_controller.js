const UserModel = require("../models/user");
const jwt = require("jsonwebtoken");
const {updateUser, getUserByParam, deleteUser} = require("../utils/auth_utilities")
const {autoNewPreferences} = require("../middleware/pref_middleware")


function registerNew(req, res) {
    //res.render("user/register");
    res.send("This is register Page");
}

function registerCreate(req, res, next) {
            
    const newUserHandler = (user) => {
        req.login(user, (err) => {
        if(err){
            next(err)
        } else {
            autoNewPreferences(user)
            //console.log(req.session)
            res.send(user);
            //res.redirect("/home")
          }
        })
    }
    const { email, password, name, profile} = req.body;

    UserModel.create({ email, password, name, profile})
        .then(newUserHandler)
        //.then(autoNewPreferences(user))
        .catch(x => console.log("error" + x))
}

function logOut(req, res) {
    req.logout();
    //res.send("login create hit");
    res.redirect("/");
}

function loginNew(req, res) {
    //res.render("user/login");
    res.send("this is login new");
}

function loginCreate(req, res) {
    const token = jwt.sign({ sub: req.user._id }, process.env.JWT_SECRET);
    req.session.jwt = token;
    //console.log("token", token)
    //res.send("Hello")
    res.redirect(`/home`);
    //res.json("login create hit");
}

//Account settings get ROUTE
function editUser(req, res) {
    console.log(req)
     getUserByParam(req).exec((err, user) => {
        if (err) {
            // handle error
            res.status(404);
            //console.log(err)
            return res.json({
                error: err.message
            });
          }
          if (user !== null) {
            // there is user
            res.status(200);
            res.send(user);
            //res.redirect(`user/`${res.body.name}`/account-settings`);
          } else {
            // there is no user
            res.status(404);
            return res.json({
               error: "there is no user found"
            });
          }
         
    });
   
    
    //res.render("user/:name/account-settings")
    //res.send("this is account settings");
}

//Account settings PATCH ROUTE
function editUserReq(req, res) {
    //console.log(res)
    //console.log("hit controls")
    updateUser(req).exec((err, user) => {
        
        if (err) {
            res.status(500);
            //console.log(err)
            return res.json({
                error: err.message
            });
        }
        //console.log(user)
        res.status(200);
        res.send(user);
        //res.redirect(`user/`${res.body.name}`/account-settings`);
    });  
}

//DELETE USER
const removeUser = function (req, res) {
    // execute the query from deletePost
    deleteUser(req.session.passport.user).exec((err) => {
        if (err) {
            res.status(500);
            return res.json({
                error: err.message
            });
        }
        res.sendStatus(204);
        //res.redirect("/home")
    });
};

// async function removeUser (req, res) {
//     try {deleteUser(req.session.passport.user).exec(async (err) => {
//         if (err) {
//             res.status(500);
//             return res.json({
//                 error: err.message
//             });
//         }
//         else {res.redirect("/home")}
//     })}
//     catch(err) {console.log(err)}
// }



module.exports = {
    registerNew,
    registerCreate,
    logOut,
    loginNew,
    loginCreate,
    editUser,
    editUserReq
}