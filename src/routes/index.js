
var express = require('express')
var router = express.Router()
const Users = require("../controllers/Users");


router.post("/v1/users/signup", Users.signup);
router.post("/v1/users/login", Users.login);
router.post("/v1/users/forgotpassword", Users.forgotpassword);
router.post("/v1/users/restpassword", Users.resetpassword);

module.exports = router