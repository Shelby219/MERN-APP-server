const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session')
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const passport = require("passport")
const cookieParser = require('cookie-parser')

//const flash = require("connect-flash")


//routes

const authRouter = require("./routes/auth_routes");
const pageRouter = require("./routes/page_routes");
const prefRouter = require("./routes/pref_routes");
const ingredientRouter = require("./routes/ingredients_routes");
const recipeRouter = require("./routes/recipe_routes");

const port = process.env.PORT || 3009;
const app = express();

// If we are not running in production, load our local .env
if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

// //FOR TESTING PURPOSES
// if(process.env.NODE_ENV == 'development') {
// app.use(function testSession(req, res, next) { // lets stub session middleware
//     req.session = {};
//     next();
//   })
// }

// Use cors
const whitelist = ['http://localhost:3000']
app.use(cors({
    credentials: true,
    origin: function (origin,callback) {
        // Check each url in whitelist and see if it includes the origin (instead of matching exact string)
        const whitelistIndex = whitelist.findIndex((url) => url.includes(origin))
        console.log("found whitelistIndex", whitelistIndex)
        callback(null,whitelistIndex > -1)
    }
}));
app.use(session({
    secret: 'Secret of The Recipe App',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 600000,
        sameSite: 'none',
       // secure: true,
        httpOnly: false,
    },
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}))

//app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({
    extended:true   
}));

require("./middleware/passport");
app.use(passport.initialize());
app.use(passport.session());
//app.use(flash());

const dbConn =  /*process.env.MONGODB_URI ||*/  'mongodb://localhost/recipe_app'
// Set three properties to avoid deprecation warnings:
// useNewUrlParser: true
// useUnifiedTopology: true
// useFileAndModify: false
mongoose.connect(dbConn, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    },
    (err) => {
        if (err) {
            console.log('Error connecting to database', err);
        } else {
            console.log('Connected to database!');
        }
    });


//test sessions
app.get('/', (req, res) => {
    console.log("get on /");
    console.log(process.env)
    console.log(req.session.jwt)
    //console.log(res)
    res.send("got your request");
})


app.use('/user', authRouter);
app.use('/', pageRouter);
app.use('/preferences', prefRouter);
app.use('/ingredients', ingredientRouter);
app.use('/recipes', recipeRouter);

module.exports = app.listen(port, () => {
    console.log(`Blog express app listening on port ${port}`);
});
