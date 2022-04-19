const express = require("express");
const { append } = require("express/lib/response");
const productosController = require("../controllers/productosController");

var router = express.Router();

router.get("/catalogo", productosController.catalogo);
router.get("/detalle-producto/:id", productosController.detalleProducto);


router.get("/agregar-producto", productosController.agregarProducto);
router.post("/", productosController.guardarProducto);
router.get("/editar-producto", productosController.editarProducto);
router.get("/categoria", productosController.categoriaProducto);



module.exports = router;