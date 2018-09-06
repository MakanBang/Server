var express = require('express');
var router = express.Router();
const {openWeather} = require('../controllers/weatherController')

router.get('/:city', openWeather)

module.exports = router;