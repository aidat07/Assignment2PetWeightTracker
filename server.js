// server.js 
// require reads a Javascript file, executes the file and exports the file. 
var express = require('express')
var app = express(); 
var session = require('express-session'); // express-session
var bodyParser = require("body-parser"); // body parser 
    app.user(bodyParser.json()); // telling it to use json 
    app.use(bodyParser.urlencoded({extended: true})); // deep parsing for nested objects 
var morgan = require('morgan') // morgan - generates log/logger
var passport = require('passport'); // passport 
var compression = require('compression'); // compression
    app.use(compression()); 
const uniqueString = require('unique-string') // unique names for resources

// monogodb 
const MongoStore = require('connect-mongo')(session); // connect-mongo 
const {MongoClient,ObjectId} = require("mongodb"); // ObjectId - Uniquely calls things
var {mongoose} = require('./database/mongoose.js'); // manages data/schema validation

var admin = require('./database/models/user.js'); // admin
var passportConf = require('./configure/passport'); // "configure" passport
var bcrypt = require('bcrypt-js'); // makes it easier to hash and compare passwords

app,use(express.static(__dirname + "/public")); // serves the resource from the public folder


/* So I haven't gained permission for this.
explantation of how to use it. 
DUE TO THIS I WILL CODE IT OUT IN MY GITHUB UPLOAD - in case if you have seen my screencast 
This function is primarly used as when a vistor loads a website - 
the server will check if there were any changes in the files the last time 
it's been accessed. */
/* SOURCE: (Vlasenko, K). (2011, October 11). 
[EXPRESS/CONNECT.STATIC] SET ‘LAST-MODIFIED’ TO NOW TO AVOID 304 NOT MODIFIED. 
Retrieved from https://vlasenko.org/2011/10/12/expressconnect-static-set-last-modified-to-now-to-avoid-304-not-modified/ */
//app.get('/*', function(req, res, next){ 
    //res.setHeader('Last-Modified', +'-'+(new Date()).toUTCString());
    //next(); 
  //});

/* So I haven't gained permission for this.
explantation of how to use it. 
DUE TO THIS I WILL CODE IT OUT IN MY GITHUB UPLOAD - in case if you have seen my screencast  
This function is used to intialize passport sessions and any sessions if a user is a constant user on the site. */
/* SOURCE: (CodeExpedia). (n.d.). 
node.js authentication using passport local strategy. 
Retrieved from https://www.codexpedia.com/node-js/node-js-authentication-using-passport-local-strategy/ */
//app.use(session({
    //secret: "tHiSiSasEcRetStr",
    //resave: true,
    //saveUninitialized: true }));
//app.use(passport.initialize());
//app.use(passport.session());

/* So I haven't gained permission for this.
explantation of how to use it. 
DUE TO THIS I WILL CODE IT OUT IN MY GITHUB UPLOAD - in case if you have seen my screencast 
This function will ensure if a user is actually login and the isAuthenticated refers to if a user is authenticated. */
/* SOURCE: (CodeExpedia). (n.d.). 
node.js authentication using passport local strategy. 
Retrieved from https://www.codexpedia.com/node-js/node-js-authentication-using-passport-local-strategy/*/
//function isLoggedIn(req, res, next) {
    //if (req.isAuthenticated())
        //return next();
    //res.sendStatus(401);
//}

// logout has been successful 
app.get('/logout', function (req, res) { // request (object) logout to response (object) logout
    req.logout(); 
    res.send('User has been log out'); 
}); 

// all routes directory 
var allroute = require('./routes/index.js'); // main page 
    app.use('/', allroute); 

// file systems module - used for crud function 
var fs = require('fs'); 

// item and login path 
app.get(['/', '/items', '/login', '*'], function(req, res) {
    res.sendFile(__dirname + '/public/index.html'); // main page 
})

// generates a site map for the project or application
app.get('[/sitemap.xml]', function(req,res) {
    res.send(__dirname + '/public/sitemap.xml'); 
}); 

// to sum up when you have robots.txt it tells a search engine it can and can't go on your site
app.get(['robots.txt'], function(req, res) {
    res.sendFile(__dirname + '/public/robots.txt'); 
}); 

// initizaling port server 3000 
app.listen(port, () => { // listens for open port 
    console.log("Listening on port:" + port); 
});
const post = process.env.PORT || 3000; 