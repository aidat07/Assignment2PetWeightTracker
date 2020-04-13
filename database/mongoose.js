var mongoose = require('mongoose'); // mongoose 

mongoose.connect('mongodb+srv://aidat:<password>@cluster0-x254q.mongodb.net/test',{useUnifiedTopology: true,useNewUrlParser: true, useFindAndModify: false}).catch(err => { 
        console.error('App starting error:', err.stack); // error 

// promise - refer to previous comments 
mongoose.Promise = global.Promise;
// export mongoose 
module.exports = {mongoose}; 

// end operators 
})
