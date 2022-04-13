const express = require("express");
const usersControllers = require ("../controllers/usersController");

var router = express.Router()

router.get ("/register", usersControllers.registro);
router.get ("/login", usersControllers.login);
router.get ("/panel-control", usersControllers.control);

module.exports = router
