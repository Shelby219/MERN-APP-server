const {getUserByParam} = require("../utils/auth_utilities")
const {updatePref} = require("../utils/pref_utilities")


//Preferences get ROUTE
function editPref(req, res) {
    console.log("hit pref")
     getUserByParam(req).exec((err, user) => {
        if (err) {
            res.status(404);
            //console.log(err)
            return res.json({
                error: err.message
            });
        }
        res.status(200);
        res.send(user);
    });
    //res.render("user/:name/preferences")
    //res.send("this is account settings");
}

//Preferences PATCH ROUTE
function editPrefReq(req, res) {
    //console.log("hit controls")
    updatePref(req).exec((err, userPref) => {
        if (err) {
            res.status(500);
            //console.log(err)
            return res.json({
                error: err.message
            });
        }
        //console.log(userPref)
        res.status(200);
        res.send(userPref);
        //res.redirect(`user/`${res.body.name}`/preferences`);
    });  
}


module.exports = {
    editPref,
    editPrefReq
}