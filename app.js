const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require("passport")
const cookieParser = require('cookie-parser')
const expressSession = require('express-session')

const MongoStore = require('connect-mongo')
const flash = require("connect-flash")


const postRouter = require('./routes/posts_routes');

const port = process.env.port || 3009;
// If we are not running in production, load our local .env
if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({
    extended:true   
}));

app.use(expressSession({
    secret: "dogs",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}));


const dbConn =  process.env.MONGODB_URI ||  'mongodb://localhost/recipe_app'
// Set three properties to avoid deprecation warnings:
// useNewUrlParser: true
// useUnifiedTopology: true
// useFileAndModify: false
mongoose.connect(dbConn, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    },
    (err) => {
        if (err) {
            console.log('Error connecting to database', err);
        } else {
            console.log('Connected to database!');
        }
    });

    require("./middleware/passport");
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(flash());
    
// app.get('/', (req, res) => {
//     console.log("get on /");
//     res.send("got your request");
// })

app.use('/posts', postRouter);

app.listen(port, () => {
    console.log(`Blog express app listening on port ${port}`);
});