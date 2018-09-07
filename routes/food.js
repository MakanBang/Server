const routes = require('express').Router()
const FoodController = require('../controllers/foodController')

routes.get('/',FoodController.getRandomFood)
routes.get('/search/?',FoodController.getFoodBySearch)

module.exports = routes