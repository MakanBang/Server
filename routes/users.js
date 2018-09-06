var express = require('express');
var router = express.Router();
const { signUpUser, signInUser, loginFacebook } = require('../controllers/userController');

router.post('/signUp', signUpUser);
router.post('/signIn', signInUser);
router.post('/loginFacebook', loginFacebook)

module.exports = router;
