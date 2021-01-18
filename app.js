
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const session = require('express-session')
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const passport = require("passport")


//ROUTES
const authRouter = require("./routes/auth_routes");
const pageRouter = require("./routes/page_routes");
const prefRouter = require("./routes/pref_routes");
const ingredientRouter = require("./routes/ingredients_routes");
const recipeRouter = require("./routes/recipe_routes");


const app = express();
const port = process.env.PORT || 3009;


// If we are not running in production, load our local .env
if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

//
app.use(cookieParser());
//app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({
    extended: true 
}));


// CORS
const whitelist = [
    'http://localhost:3000',
    'https://fridgemate.netlify.app/']
app.use(cors({
    credentials: true,
    //methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    origin: function (origin,callback) {
        // Check each url in whitelist and see if it includes the origin (instead of matching exact string)
        const whitelistIndex = whitelist.findIndex((url) => url.includes(origin))
        console.log("found whitelistIndex", whitelistIndex)
        callback(null,whitelistIndex > -1)
    }
}));


// SESSION
const sessionConfig = {
    secret: "Secret of The Recipe App",
    resave: false,
    saveUninitialized: false,
    proxy: true,
    cookie: {
      expires: 3600000,
      httpOnly: false
    },
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
    }),
  }
  // for production, cookie needs 2 more settings
  if (process.env.NODE_ENV === "production") {
    sessionConfig.cookie.secure = true;
    sessionConfig.cookie.sameSite = "none";
  }
app.enable('trust proxy');
app.use(session(sessionConfig));



//PASSPORT   
require("./middleware/passport");
app.use(passport.initialize());
app.use(passport.session());


// MONGODB
const dbConn =  process.env.MONGODB_URI ||  'mongodb://localhost/recipe_app'
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



//ROUTES
app.use('/user', authRouter);
app.use('/', pageRouter);
app.use('/preferences', prefRouter);
app.use('/ingredients', ingredientRouter);
app.use('/recipes', recipeRouter);


//PORT
module.exports = app.listen(port, () => {
    console.log(`Blog express app listening on port ${port}`);
});
