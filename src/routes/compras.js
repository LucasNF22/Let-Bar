const express = require ("express")
const comprasController = require ("../controllers/comprasController")

var router = express.Router()

router.get ("/Carrito-desplegable", comprasController.carritoDesplegable);
router.get ("/check-out", comprasController.checkOut)

module.exports = router
