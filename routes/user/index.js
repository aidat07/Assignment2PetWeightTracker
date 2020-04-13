var express = require('express');
var router = express.Router();
var userprofile = require('./profileuser.js'); // user profile 
var dashboard = require('./dashboard.js'); // dashboard 
var animals = require('./animals.js'); // animals 
router.use('/',profileuser,dashboard,animals); // router s

// exporting the router to use in index.js 
module.exports = router;
