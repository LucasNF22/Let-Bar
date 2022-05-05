const express = require("express");



const productosController = require("../controllers/productosController");

var router = express.Router();

router.get("/catalogo", productosController.catalogo);
router.get("/detalle-producto/:id", productosController.detalleProducto);


router.get("/agregar-producto", productosController.agregarProducto);
router.post("/", productosController.guardarProducto);

router.get("/editar-producto/:id", productosController.editarProducto);

router.put ("/editar-producto/:id", productosController.actualizarProducto)

router.delete("/eliminar/:id", productosController.eliminarProductos)

router.get("/categoria/:id", productosController.categoriaProducto);

router.put("/valorar/:id", productosController.valorarProducto);



module.exports = router;