const User = require("../models/user");
const jwt = require("jsonwebtoken");
const crypto = require('crypto');
const nodemailer = require('nodemailer');

const {updateUser, getUserByParam, updateForForgotPassword, findForResetPassword,
    findForUpdatePassword,
    insertPasswordToken} = require("../utils/auth_utilities")
const passport = require('passport');

function registerNew(req, res) {
    //res.render("user/register");
    res.send("This is register Page");
}

function registerCreate(req, res, next) { 
    const newUserHandler = (user) => {
        req.login(user, (err) => {
        if(err){
            //console.log(err)
            //console.log('error');
            next(err)
           // res.send(err);
        } else {
            //autoNewPreferences(user)
            console.log("User registered")
           // console.log(req.user)
            const token = jwt.sign({ sub: req.user._id }, process.env.JWT_SECRET);
            res.cookie("jwt", token);
            res.send(user);
            //res.redirect("/")
          }
        })
    }
    const { email, password, username} = req.body;

    User.create({ email, password, username})
        .then(newUserHandler)
        //.then(autoNewPreferences(user))
        .catch(x => 
            res.send(x))
}

function logOut(req, res) {
  
    req.logout();
    res.cookie("jwt", null, { maxAge: -1 });
    console.log('logged out user');
    //console.log('session object:', req.session);
    //console.log('req.user:', req.user);
    res.sendStatus(200);
    //console.log("heraae ")
    
}

function loginNew(req, res) {
    //res.render("user/login");
    res.send("this is login new");
}




function loginCreate(req, res) {
    console.log("hit here")
   
    const token = jwt.sign({ sub: req.user._id }, process.env.JWT_SECRET);
    res.cookie("jwt", token);
       
    res.status(200);
    res.json({profile: req.user.profile, user: req.user.username, sessionID: req.sessionID, cookie: req.cookies});
    //console.log(res)
 
 }
 

//Account settings get ROUTE
function editUser(req, res) {
    
     getUserByParam(req).exec((err, user) => {
        if (err) {
            // handle error
            res.status(500);
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



//Forgot password POST ROUTE
function forgotPassword (req, res) {
    if(req.body.email ===''){
        res.status(400).send('email required');
    }
    console.error(req.body.email)
    updateForForgotPassword(req).then((user)=>{
        if(user === null){
            console.error('email not in database')
            res.status(403).send('email not in db')
        } else {
            const token = crypto.randomBytes(20).toString('hex');
           
            insertPasswordToken(user, token).exec((err, user) => {
                if (err) {
                    console.log(err)
                    // res.status(500);
                    // return res.json({error: err.message});
                }
                //console.log(user)
                return user
                //res.status(200);
                //res.send(user);
             
            });  

            //console.log(user)
            //console.log("updated", u)
            const transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                user: `${process.env.EMAIL_ADDRESS}`,
                pass: `${process.env.EMAIL_PASSWORD}`,
              },
            });

          const mailOptions = {
              from: 'fridgemate2020@gmail.com',
              to: `${user.email}`,
              subject: 'Link To Reset Password',
              text:
                'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n'
                + 'Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\n'
                + `http://localhost:3000/user/reset-password/${token}\n\n`
                + 'If you did not request this, please ignore this email and your password will remain unchanged.\n',
            };

             console.log('sending mail');

              transporter.sendMail(mailOptions, (err, response) => {
              if (err) {
                  console.error('there was an error: ', err);
              } else {
                  console.log('here is the res: ', response);
                  res.status(200).json('recovery email sent');
              }
              });
        }
    })

}

//Reset password GET ROUTE
function resetPassword (req, res) {
    //console.log(req)
   //console.log("cec", req.query)
    findForResetPassword(req).then((user) => {
        //console.log(user)
        if (user == null) {
          console.error('password reset link is invalid or has expired');
          res.status(403).send('password reset link is invalid or has expired');
        } else {
          res.status(200).send({
            username: user.username,
            message: 'password reset link a-ok',
          });
        }
       });
     }


//Update password PATCH ROUTE
function sendResetPassword(req, res) {
   
    console.log("hit controls")
    findForUpdatePassword(req).exec((err, user) => {
        if (err) {
            res.status(500);
            console.log(err)
            return res.json({
                error: err
            });
        }
        console.log("check", user)
        res.status(200);
        res.send({
            username: user.username,
            message: 'password updated',
          });
  
    });  
}



// //DELETE USER
// const removeUser = function (req, res) {
//     // execute the query from deletePost
//     deleteUser(req.session.passport.user).exec((err) => {
//         if (err) {
//             res.status(500);
//             return res.json({
//                 error: err.message
//             });
//         }
//         res.sendStatus(204);
//         //res.redirect("/home")
//     });
// };



module.exports = {
    registerNew,
    registerCreate,
    logOut,
    loginNew,
    loginCreate,
    editUser,
    editUserReq,
    forgotPassword,
    resetPassword,
    sendResetPassword
}