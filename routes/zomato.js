var express = require('express');
var router = express.Router();

var { getAllCategoryFood } = require('../controllers/zomatoController')

router.get('/', getAllCategoryFood)


module.exports = router;
