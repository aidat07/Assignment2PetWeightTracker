var express = require('express');
var router = express.Router();
var front_end = require('./front_end'); // front end path folder 

var user = require('./user'); // user path 

router.use('/', front_end,user); // front end user

// exporting the router to use in index.js 
module.exports = router;