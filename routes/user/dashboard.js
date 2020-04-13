var express = require('express');
var router = express.Router();
var {mongoose} = require('../../db/mongoose.js'); // mongoose 
var m_animals = require('../../models/m_animals.js'); // animals model path 
var isLoggedIn = require('./confirm_login.js'); // confirmed log in 

// save info on animal and user 
router.post("/user_save_info",function (req, res) {
    data = new m_animals({ // dogs 
      age: req.body.age, // age 
      name: req.body.name.toLowerCase(), // name 
      animaltype: req.body.animaltype.toLowerCase(), // cat or dog  
      breed: req.body.breed.toLowerCase(), // breed of animal
      weight: req.body.weight, // weight 
      created_at: new Date(), // date 
      password: req.body.password, // password 
      user_id: req.user._id // user id 
});

// save data 
// resB is a reserved byte - reserves empty space within a byte 
// also resB is a function of b() so bytes 
data.save(function (err,resB) {
    if (err) {
    console.log(err)
        res.sendStatus(401); // 401 authorization 
    }else{
        res.send(resB); // see comment above 
    }})
})

// get animal view (user is logged in)
router.get("/user_view_animals",isLoggedIn,function (req, res) {
        m_animals.find({user_id:req.user._id}).sort( { _id: -1 } ).then(function(animal){ // id acts as a primary key 
            res.send(animals) // sending response 
    })
})
  
// post delete of animals (user is logged in)
router.post("/user_delete_animals", isLoggedIn, function (req, res) {
    m_animals.deleteOne({ // delete 
         _id: req.body._id // id acts a primary key 
    }).then(function (data) { // runs if the request succeed and data is what is contained in the resulting data from the request 
        res.sendStatus(200);
    })
})

// exporting the router to use in index.js 
module.exports = router;
