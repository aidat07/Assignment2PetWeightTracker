const mongoose = require('mongoose'), // mongoose 
bcrypt = require('bcrypt-js'), // bcrypt 
Schema = mongoose.Schema; // mongoose 
ObjectId = Schema.ObjectId // ObjectId

//User Schema
const UserSchema = new Schema({
        role:String, // role 
        username: String, // username 
        password: String, // password 
        firstName:String, // first name
        lastName:String, // last name 
        token:String, // token 
        tokenexpire:Date, // token expire 
        image_name:String, // image name 

    google:{
        id:String, // id 
        token:String, // token 
        email:String, // email
        name:String // name 
    }
})

/* So I haven't gained permission for this.
explantation of how to use it. 
DUE TO THIS I WILL CODE IT OUT IN MY GITHUB UPLOAD - in case if you have seen my screencast 
This works as a hashed passport before send it to the database */
/* SOURCE: (Codota). (n.d.). 
Best JavaScript code snippets using bcrypt-nodejs.genSalt. 
https://www.codota.com/code/javascript/functions/bcrypt-nodejs/genSalt */
//UserSchema.pre('save',function(next){
    //const user = this;
        //if(!user.isModified('password')) return next(); // pasport
             //bcrypt.genSalt(10, function(err,salt){ // generate random salt text used with hash password
        //if(err) return next(err);
            //bcrypt.hash(user.password,salt,null,function(err,hash){
        //if(err) return next(err);
            //user.password = hash;
            //next();
        //});
    //});
//});

// compared password 
UserSchema.methods.comparePassword = function(password){
    return bcrypt.compareSync(password,this.password);
}

module.exports = mongoose.model('admin',UserSchema);

