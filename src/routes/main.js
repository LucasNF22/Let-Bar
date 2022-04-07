const express = require("express");
const mainController=require("../controllers/mainController");

var router = express.Router();

router.get("/", mainController.home);
router.get("/home", mainController.homeLogueado);

module.exports=router;
