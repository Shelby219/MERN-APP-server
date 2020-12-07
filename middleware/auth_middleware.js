
const authenticateJWT = (req, res, next) => {

    if(req.isAuthenticated()){
        //req.isAuthenticated() will return true if user is logged in
        next();
    } else{
        console.log("test")
        //res.redirect("/user/login");
    }
    passport.authenticate('jwt', {session: false})
 
};



function authRedirect(req, res, next) {
    if (req.user) {
        return res.redirect("/");
    }
    return next();
}

function authorise(req, res, next) {
    if (req.user) {
        return next();
    }
    return res.redirect("/home");
}

function checkAuthentication(req,res,next){
    if(req.isAuthenticated()){
        //req.isAuthenticated() will return true if user is logged in
        next();
    } else{
        console.log("test")
        //res.redirect("/user/login");
    }
}


module.exports = {
    authRedirect,
    authorise,
    checkAuthentication
}
