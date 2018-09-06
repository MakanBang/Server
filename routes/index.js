var express = require('express');
var router = express.Router();

var zomato = require('./zomato')

router.use('/zomato', zomato)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Makan Bang');

});

module.exports = router;
