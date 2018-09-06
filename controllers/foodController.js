const axios = require('axios')

class FoodController {

    static getRandomFood(req,res) {
    
        axios({
            method: 'GET',
            url: "https://www.themealdb.com/api/json/v1/1/random.php"
        })
        .then(response => {
            
            res.status(200).json({
                data : response.data
            })      
        })
        .catch(err => {
            res.status(500).json({
                message : err.message
            })
        })

    }

    static getFoodBySearch(req,res) {
        
        let queryStr = req.query.name

        axios({
            method: 'GET',
            url: `https://www.themealdb.com/api/json/v1/1/search.php?s=${queryStr}`
        })
        .then(response => {
            res.status(200).json({
                data : response.data
            })      
        })
        .catch(err => {
            res.status(500).json({
                message : err.message
            })    
        })
    }

}

module.exports = FoodController