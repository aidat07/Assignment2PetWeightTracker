var express = require('express');
var router = express.Router();

// loggedIn user confirmation 
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()){ // authenticated user for log in 
    if(req.user.role=="1"){ // user role 
        return next();
    }else{
         res.sendStatus(401); // 401 authorization 
        }
    }else{
        res.sendStatus(401); // 401 authorization 
    }

// exporting the router to use in isLoggedIN 
module.exports = isLoggedIn 

} // end 