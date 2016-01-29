var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var dogs = new Corgi([
  {
    name: 'Remington',
    age: 2,
    image: 'http://bit.ly/1JM6soG',
    aboutMe: 'Remington fields forever!'
  },
  {
    name: 'Mitch',
    age: 1,
    image: 'http://bit.ly/1NFGa29',
    aboutMe: 'All about the triceps and biceps'
  },
  {
    name: 'Banjo',
    age: 3,
    image: 'http://bit.ly/1Qxj42k ',
    aboutMe: 'Mama\'s boy'
  }
  ]);

});

module.exports = router;
