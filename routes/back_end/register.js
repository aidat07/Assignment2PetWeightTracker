var express = require('express');
var router = express.Router();
var {mongoose} = require('../../databse/mongoose.js'); // mongoose 
var admin = require('../../models/user.js'); // admin 
const uniqueString = require('unique-string'); // unique string - refer to the comment in the server.js

// register 
router.post("/register",function (req, res) {
   
// registering user 
data = new admin({
    role: "1",
    firstName: req.body.firstName, // first name 
    lastName: req.body.lastName, // last name 
    username: req.body.username, // username 
    password: req.body.password, // passowrd 
});

// findOne returns document that only contains projection fields 
// req body request 
admin.findOne({username:req.body.username}).then(function(user){
    if(!user){ // user 
        data.save(function (err) {
        if (err) {
            console.log(err) // error 
            res.sendStatus(401); // 401 authorized 
        }else {
            res.sendStatus(200); // 200 authorized
        }})
    }else{
            res.status(401).send("exist"); // 401 authorized 
        }
    });
});

// exporting the router to use in index.js 
module.exports = router;    