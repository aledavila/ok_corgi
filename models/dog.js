var mongoose = require('mongoose');

// var Schema = mongoose.Schema;

var corgiSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: String, required: true },
  image: { type: String, required: true },
  aboutMe: String

});


var Corgi = mongoose.model('Corgi', corgiSchema);
// Make this available to our other files
module.exports = Compliment;
// Dog model w/ Mongoose
