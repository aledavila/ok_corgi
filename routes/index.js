var express = require('express');
var router = express.Router();
var Dog = require('../models/dog')

/* GET home page. */
router.get('/', function(req, res, next) {
  
  Dog.find({}, 'name age image aboutMe', function(err, dog) {
    if (err) console.log(err);
    
    res.render('index', {
      dogs: dog
    });


  });


});

module.exports = router;
