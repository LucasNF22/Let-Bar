const express = require("express");
const usersControllers = require ("../controllers/usersController");

var router = express.Router()

router.get ("/register", usersControllers.registro);
router.get ("/login", usersControllers.login)

module.exports = router
