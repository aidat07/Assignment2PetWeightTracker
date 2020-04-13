var express = require('express');
var router = express.Router();
var {mongoose} = require('../../db/mongoose.js'); // mongoose 
var m_animals = require('../../models/m_animals.js'); // animals model path 
var isLoggedIn = require('./confirm_login.js'); // confirmed log in 


// post user selected animals (user is logged in)
router.post("/user_selected_animals", isLoggedIn, function (req, res) {
    m_animals.findOne({_id: req.body.id}).then(function (data) { // id acts as a primary key 
        if(data){
            res.send(data); // sent data of animals
        }else{
            res.sendStatus(401); // 401 authorization 
        }
    })
})

// post user selected animal to edit (user is logged in)
router.post("/user_selected_animals_edit",isLoggedIn,function (req, res) { // id acts as a primary ke
    m_animals.updateOne({_id:req.body.id}, req.body, function(err, doc){
        if(err){
            console.log("Something wrong when updating data!"+err); // error 
        }
            res.send("Updated") // Updated
     })
})

// exporting the router to use in index.js 
module.exports = router;