const express = require("express");
const multer = require("multer");

//Configuracion de multer para en buffer de memoria
const bufferImagen = multer.memoryStorage();

// Middlewares
const adminMiddleware = require("../middlewares/adminMiddleware");
const validacionesProductos = require("../middlewares/productsValidations")  // validaciones para imagen de producto
const validacionesProductosEdit = require("../middlewares/editProductsValidations")
const uploadFile = multer({ storage: bufferImagen }) // Middleware de multer 

const productosControllerDb = require("../controllers/productosControllerDb");

var router = express.Router();


router.get("/detalle-producto/:id", productosControllerDb.detalleProducto); /* OK DB */


router.get("/agregar-producto", /*[ adminMiddleware ],*/ productosControllerDb.agregarProducto); /* OK DB */
router.post("/agregar-producto/process", [/* adminMiddleware,*/ uploadFile.single('image'), validacionesProductos ], productosControllerDb.guardarProducto); /* OK DB */


router.get("/editar-producto/:id", /*[ adminMiddleware ],*/ productosControllerDb.editarProducto); /* OK DB */
router.put ("/editar-producto/:id", [/* adminMiddleware ,*/ uploadFile.single('image') ] ,validacionesProductosEdit, productosControllerDb.actualizarProducto); /* OK DB */

router.delete("/eliminar/:id", [ adminMiddleware ], productosControllerDb.eliminarProducto); /* OK DB */

router.get("/categoria/:id", productosControllerDb.categoriaProducto);  /* OK DB */

router.put("/valorar/:id", productosControllerDb.valorarProducto);


module.exports = router;