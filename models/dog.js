var mongoose = require('mongoose');

// var Schema = mongoose.Schema;

var dogSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: String, required: true },
  image: { type: String, required: true },
  aboutMe: String

});


var Dog = mongoose.model('Dog', dogSchema);
// Make this available to our other files

module.exports = Dog;
// Dog model w/ Mongoose
