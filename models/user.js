var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  likes: Array
});


var User = mongoose.model('User', userSchema);
// Make this available to our other files

module.exports = User;
// Dog model w/ Mongoose
