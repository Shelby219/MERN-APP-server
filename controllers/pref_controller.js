const {getUserByParam} = require("../utils/auth_utilities")
const {updatePref} = require("../utils/pref_utilities")


//Preferences get ROUTE
function editPref(req, res) {
     getUserByParam(req).exec((err, user) => {
        if (err) {
            res.status(404);
            return res.json({
                error: err.message
            });
        }
        res.status(200);
        res.send(user.preferences);
    });

}

//Preferences PATCH ROUTE
function editPrefReq(req, res) {
    updatePref(req).exec((err, user) => {
        if (err) {
            res.status(500);
            return res.json({
                error: err.message
            });
        }
        res.status(200);
        res.send(user.preferences);
    });  
}


module.exports = {
    editPref,
    editPrefReq
}