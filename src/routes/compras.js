const express = require ("express")
const comprasController = require ("../controllers/comprasController")
var router = express.Router()

//Middlewares
const autenticadoMiddleware = require("../middlewares/autentidadoMiddleware"); //redirije usuarios no logueados al login

router.get ("/Carrito-desplegable", comprasController.carritoDesplegable); /* terminar */
router.get ("/check-out", [ autenticadoMiddleware ], comprasController.checkOut) /* OK Db */

module.exports = router
