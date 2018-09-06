const jwt = require('jsonwebtoken');
let User = require('../models/user');
require('dotenv').config()

module.exports = {
    isLogin: (req, res, next)=> {
        let token = req.headers.token
        if(token){
            let info = jwt.verify(token, process.env.JWT)
            User.findOne({email: info.email})
            .then((result) => {
                if(result){
                    next()
                }else{
                    res.status(400).json({msg: 'you have login first',err})
                }
            })
            .catch((err) => {
                res.status(400).json({msg: 'you have login first',err})
            });
        }
    }
};