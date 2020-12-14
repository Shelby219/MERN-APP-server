const passport = require("passport");
const LocalStrategy = require("passport-local");
const UserModel = require("./../models/user");
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt;
require('dotenv').config();



passport.serializeUser((user, done) => {
    done(null, user._id);
});

//start with ID end up with user
passport.deserializeUser((userId, done) => {
    UserModel.findById(userId)
        .then((user) => done(null, user))
        .catch(done)
    })

const canLogin = (user, password) => {
    if(user){
        return user.verifyPasswordSync(password) //mongoose bcrypt
    } else {
        return false
    }
}

const verifyCallback = (email, password, done) => {
    UserModel.findOne({email})
    .then((user) => {
        if(canLogin(user, password)){
            return done(null, user)
        } else {
            return done(null, false)
        }
    })
    .catch(done)
}
// this is setting passport username to email as passport local accepts username and password
const fields = { usernameField: "email"}

passport.use(new LocalStrategy(fields, verifyCallback))


passport.use(new JwtStrategy(
    // {
    //     jwtFromRequest: (req) => {
    //         if (req.session && req.session.jwt) {
    //             return req.session.jwt;
    //         }
    //         return null;
    //     },
    //     secretOrKey: process.env.JWT_SECRET
    {
        jwtFromRequest: (req) => {
            let token = null;
            
            if (req && req.cookies) {
                token = req.cookies['jwt'];
            }

            return token;
        },
        secretOrKey: process.env.JWT_SECRET
    },
    async (jwt_payload, done) => {
        const user = await UserModel.findById(jwt_payload.sub)
            .catch(done);

        if (!user) {
            return done(null, false);
        }

        return done(null, user);
      
    }
));