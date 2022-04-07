const express = require("express");
const { append } = require("express/lib/response");
const productosController = require("../controllers/productosController");

var router = express.Router();

router.get("/catalogo", productosController.catalogo);
router.get("/detalle-producto", productosController.detalleProducto);
router.get("/agregar-producto", productosController.agregarProducto);
router.get("/editar-producto", productosController.editarProducto);

module.exports = router;