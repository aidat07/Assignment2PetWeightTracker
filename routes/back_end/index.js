var express = require('express');
var router = express.Router();
var login = require('./login.js'); // login js 
var register = require('./register.js'); // register js 

// login and register 
router.use('/', login,register);

// exporting the router to use in index.js 
module.exports = router;
