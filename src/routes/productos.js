const express = require("express");
const multer = require("multer");

//Configuracion de multer para en buffer de memoria
const bufferImagen = multer.memoryStorage();

// Middlewares
const adminMiddleware = require("../middlewares/adminMiddleware");
const validacionesProductos = require("../middlewares/productsValidations")  // validaciones para imagen de producto
const uploadFile = multer({ storage: bufferImagen }) // Middleware de multer 

const productosControllerDb = require("../controllers/productosControllerDb");

var router = express.Router();


router.get("/detalle-producto/:id", productosControllerDb.detalleProducto);


router.get("/agregar-producto", [ adminMiddleware ], productosControllerDb.agregarProducto);
router.post("/agregar-producto/process", [ uploadFile.single('image'), validacionesProductos ], productosControllerDb.guardarProducto);


router.get("/editar-producto/:id",[ adminMiddleware ], productosControllerDb.editarProducto);
router.put ("/editar-producto/:id", productosControllerDb.actualizarProducto)

router.delete("/eliminar/:id", [ adminMiddleware ], productosControllerDb.eliminarProducto)

router.get("/categoria/:id", productosControllerDb.categoriaProducto);

router.put("/valorar/:id", productosControllerDb.valorarProducto);



module.exports = router;