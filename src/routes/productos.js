const express = require("express");
const multer = require("multer");

//Configuracion de multer para en buffer de memoria
const bufferImagen = multer.memoryStorage();

// Middlewares
const adminMiddleware = require("../middlewares/adminMiddleware");
const validacionesProductos = require("../middlewares/productsValidations")  // validaciones para imagen de producto
const uploadFile = multer({ storage: bufferImagen }) // Middleware de multer 
const productosController = require("../controllers/productosController");
const productosControllerDb = require("../controllers/productosControllerDb");

var router = express.Router();


router.get("/detalle-producto/:id", productosController.detalleProducto);


router.get("/agregar-producto", [ adminMiddleware ], productosControllerDb.agregarProducto);
router.post("/agregar-producto/process", [ uploadFile.single('image'), validacionesProductos ], productosController.guardarProducto);


router.get("/editar-producto/:id",[ adminMiddleware ], productosController.editarProducto);
router.put ("/editar-producto/:id", productosController.actualizarProducto)
router.delete("/eliminar/:id", [ adminMiddleware ], productosController.eliminarProducto)

router.get("/categoria/:id", productosController.categoriaProducto);

router.put("/valorar/:id", productosController.valorarProducto);



module.exports = router;