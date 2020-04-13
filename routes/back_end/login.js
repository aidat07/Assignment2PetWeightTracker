var express = require('express');
var router = express.Router();
var {mongoose} = require('../../database/mongoose.js'); // manages data/schema validation
var passport = require('passport'); // passport 
var gObj = require('../configure/gobj.js'); // gobj

// user login 
function user_login(req, res, next) {
    if (req.isAuthenticated()){ // requesting if the user is authenicated 
    if(req.user.role=="1"){  // user role - req object contains the JWT Token in orddr for a successful authentication of a user. 
            return next();
    } else{
    res.sendStatus(401); // 401 authorizing the user    
    }
    } else{
         res.sendStatus(401); // 401 authorizing the user  
    }
}

// session id used to get/set to the session id for the current session 
function session_idx(req, res, next) {
    if (req.isAuthenticated()){ // requesting if the user is authenicated  
    if(req.user.role=="1"){ // user role - req object contains the JWT Token in orddr for a successful authentication of a user. 
            return next();
    }else{
    res.sendStatus(401); // 401 authorizing the user 
    }
    }else{
         res.sendStatus(401); // 401 authorizing the user 
    }
}

// login 
router.post("/login",
passport.authenticate("local", { failureRedirect: "/login"}), // error has occured for login authentication 
function (req, res) {
    if(req.user){
     res.send(req.user.role)
    }
});

// router auth google 
router.get('/auth/google',
    passport.authenticate('google', { scope: ['profile','email'] }),function err(){ // authenticate google profile and email
    console.log("error") // error 
});

// authenication to google 
router.get('/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: '/login' }),
     function(req, res) {
    // successful authentication leads to dashboard
        res.redirect('/user/dashboard');
  });
    router.get("/session_user", user_login, function (req, res) { // session user 
        res.send(req.user.username); // username 
});

// session id 
router.get("/session_idx",  session_idx, function (req, res) {
    res.send(req.user.role); // user role - refer to comments above 
});

// exporting the router to use in index.js 
module.exports = router;