var express = require('express');
var router = express.Router();
var Dog = require('../models/dog');

function shuffle(o){
   for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
   return o;
}

/* GET home page. */
router.get('/', function(req, res, next) {

  Dog.find({}, 'name age image aboutMe', function(err, dog) {
    if (err) console.log(err);

    dog = shuffle(dog);

    res.render('index', {
      dogs: dog
    });

  });

});

router.get('/likes', function(req, res, next) {
  res.render('show');
  console.log('like clicked!')
})

module.exports = router;
