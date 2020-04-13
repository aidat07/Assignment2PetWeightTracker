const passport = require('passport'), // passport 
Strategy = require('passport-local').Strategy, // passport strategy
admin = require('../models/user'); // user
var configAuth = require('./configauth.js'); // configauth
var GoogleStrategy = require('passport-google-oauth20').Strategy; // google strategy passport 


// passport strategy 
/* So I haven't gained permission for this.
explantation of how to use it. 
DUE TO THIS I WILL CODE IT OUT IN MY GITHUB UPLOAD - in case if you have seen my screencast  
This function is used as a configuration in other terms it will verify the callback for any LOCAL 
authentication (accepting username + passport) submits back to app through a log in form  */
/* SOURCE: (passportjs). (n.d.). 
Username & Password . 
Retrieved from http://www.passportjs.org/docs/username-password/ */
//passport.use(new Strategy(function(username, password, done){
    //admin.findOne({username:username},function(err,user){
        //if(err) return done(err);
        //if(!user){
            //return done(null,false);
        //}
        //if(!user.comparePassword(password)){
            //return done(null,false);
        //}
        //return done(null,user);
    //});
//}));

// passport google strategy 
passport.use(new GoogleStrategy({
    clientID: configAuth.clientID, // clientID
    clientSecret: configAuth.clientSecret, // clientSecret
    callbackURL: configAuth.callbackURL // callbackURL 
  },
  
function(accessToken, refreshToken, profile, cb) { // token (access - refresh) - token can stay for so long 

passport.serializeUser(function(user,done){ // passport what data should be stored during the session
    done(null,user._id);
});


passport.deserializeUser(function(id,done){ // passport object retrieved through the deserialize key 
    admin.findById(id,function(err,user){
        if(err) return done(err);
        done(null,user);
    })
});

// export passport 
module.exports = passport;

// ending operators 
}))
