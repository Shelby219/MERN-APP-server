const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session')
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const passport = require("passport")
//const cookieParser = require('cookie-parser')

//const flash = require("connect-flash")

const postRouter = require('./routes/posts_routes');
const userRouter = require("./routes/user_routes");
const pageRouter = require("./routes/page_routes");



const port = process.env.port || 3000;
// If we are not running in production, load our local .env
if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const app = express();
app.use(cors());
//app.use(cookieParser());
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
        useFindAndModify: false
    },
    (err) => {
        if (err) {
            console.log('Error connecting to database', err);
        } else {
            console.log('Connected to database!');
        }
    });

app.use(session({
        secret: "dogs",
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({ mongooseConnection: mongoose.connection })
    }));
    
// app.get('/', (req, res) => {
//     console.log("get on /");
//     res.send("got your request");
// })

app.use('/posts', postRouter);
app.use('/user', userRouter);
app.use('/', pageRouter);



app.listen(port, () => {
    console.log(`Blog express app listening on port ${port}`);
});