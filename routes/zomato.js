var express = require('express');
var router = express.Router();

var { getAllCategoryFood, getCitiesSearch, getCollection,
    getCuisie, getEstablishments, getGeocode,
    getLocationDetail, getLocation, getDailyMenu,
    getRestotan, getRestotanReviews, getSearch
} = require('../controllers/zomatoController')

router.get('/', getAllCategoryFood)
router.get('/city/:q', getCitiesSearch)
router.get('/collection/:id', getCollection)
router.get('/cuisines/:id', getCuisie)
router.get('/establishments/:id', getEstablishments)
router.get('/geocode/:lat/:lon', getGeocode)
router.get('/locdetail/:id/:type', getLocationDetail)
router.get('/location/:query', getLocation)
router.get('/restoran/menu/:restoid', getDailyMenu)
router.get('/restoran/:restoid', getRestotan)
router.get('/review/:restoid', getRestotanReviews)
router.get('/search/:category/:cuisines/:q', getSearch)


module.exports = router;
