const express = require("express");
var router = express.Router();

const productsAPIController = require('../../controllers/api/productsAPIController');

//Rutas
//Listado de productos
router.get("/", productsAPIController.list)

// para pruebas
router.get("/categorias", productsAPIController.productosPorCategoria)



module.exports = router;