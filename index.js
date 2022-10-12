const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
//const path = require('path');
const port = 7000;
const expressLayouts = require('express-ejs-layouts');



 const db = require('./config/mongoose');
 const session = require('express-session');
 const passport = require('passport');
 const passportLocal = require('./config/passport-local-strategy');
// const { Mongoose } = require('mongoose');
 const MongoStore = require('connect-mongo');


 app.use(express.urlencoded());
 app.use(cookieParser());

 app.use(express.static('./assets'));
 app.use(expressLayouts);

 app.set('layout extractStyles', true);
 app.set('layout extractScripts', true);

 

app.set('view engine', 'ejs');
app.set('views',  './views');
 

app.use(session({
    name:'music',
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store:  MongoStore.create({
        mongoUrl: 'mongodb://localhost/favorite_db',
        autoRemove: 'disabled'
    },
    function(err){
        console.log(err || 'connect-mongodb setup is ok')
    }

    )
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser) ;

app.use('/', require('./routes'));




// app.get('/',function(req,res){
//     return res.render('home');
// });

// app.get('/user',function(req,res){
//     return res.render('user');
// });



app.listen(port, function(err){
    if(err){
        console.log('Error is running the server',err);
    }
    console.log('yes! My Express Server is running on port:',port);
})