const express = require("express");
var router = express.Router();

const productsAPIController = require('../../controllers/api/productsAPIController');

//Rutas
//Listado de productos
router.get("/", productsAPIController.list)
router.get("/detail/:id", productsAPIController.detail)
router.get("/lastInDB", productsAPIController.last)
// para pruebas




module.exports = router;