var express = require('express');
var router = express.Router();
var {mongoose} = require('../../db/mongoose.js'); // mongoose 
var admin = require('../../models/user.js'); // user 
var bcrypt = require('bcrypt-js'); // bcrypt js 
var isLoggedIn = require('./confirmlogin.js'); // confirmlogin path 

// admin update 
router.post("/user_updateadminprofile", isLoggedIn, function (req, res) {

    user = {
        firstName: req.body.firstName, // first name
        lastName: req.body.lastName, // last name 
        username: req.body.username // username 
    }; 

// user request change password 
router.post("/user_change_password",isLoggedIn,function (req, res) {
    bcrypt.compare(req.body.oldPassword, req.user.password, function(err, response) { // old password callback
    if(response==true){
        var hash = bcrypt.hashSync(req.body.password) // callback hash sync 
            user ={ // user 
                password: hash // hash password 
};

// storing the hash password into the database 
admin.updateOne({_id:req.user._id}, user, {upsert: true, 'new': true}, function(err, doc){
    if(err){
        console.log("Something went wrong uploading"+err); // error 
    }
        res.send("Updated") // updated 
    })
    // else 
    }else{
    res.status(401).send("incorrect");} // incorrect hash error 
});

// pass error to callback 
},function err(){
    console.log("err")
     res.status(401) // 401 authorization 
  });   
  
// file systems module - used for crud function 
var fs = require('fs'); 

// exporting the router to use in index.js 
module.exports = router;

}) // end 