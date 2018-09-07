const axios = require('axios')

module.exports = {
    openWeather: function (req, res) {
        let city = req.params.city
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.WEATHER}`)
        .then(({data}) => {
            res.status(200).json({
                data
            })
            
        }).catch((err) => {
            res.status(400).json({
                err
            })
            
        });
    }
}