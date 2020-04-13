var mongoose = require('mongoose'), // mongoose 
Schema = mongoose.Schema; // schema 
ObjectId = Schema.ObjectId // objectId

// schema 
var m_animals = new Schema({ //
    name: String, // string 
    age: Number, // number 
    animaltype: String, // animal type 
    breed: String, // breed
    weight: Number, // weight 
    user_id: ObjectId, // objectID
    created_at: Date // date
});

// module exports for mongoose = m_animal
module.exports = mongoose.model('m_animals',m_animals);
