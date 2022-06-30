const express = require("express");
var router = express.Router();

const mainController=require("../controllers/mainController");



router.get("/", mainController.home);
router.get("/home", mainController.homeLogueado);

// prueba modal
router.get("/prueba", mainController.pruebaModal);

let routesProductos = require("./productos.js");
let routesUsers= require ("./users.js");
let routesCompras = require ("./compras.js");


router.use("/productos", routesProductos);
router.use("/users", routesUsers);
router.use("/compras", routesCompras);



module.exports=router;
