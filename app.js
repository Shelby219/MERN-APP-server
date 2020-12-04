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
const postRouter = require('./routes/posts_routes');
const authRouter = require("./routes/auth_routes");
const pageRouter = require("./routes/page_routes");



const port = process.env.PORT || 3000;
const app = express();

// If we are not running in production, load our local .env
if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

app.use(session({
    secret: 'Secret of The Recipe App',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1800000,
        sameSite: 'none',
        secure: true,
        httpOnly: false,
    },
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}))

app.use(cors());
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

const dbConn =  process.env.MONGODB_URI ||  'mongodb://localhost/recipe_app'
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

app.use('/posts', postRouter);
app.use('/user', authRouter);
app.use('/', pageRouter);



module.exports = app.listen(port, () => {
    console.log(`Blog express app listening on port ${port}`);
});
