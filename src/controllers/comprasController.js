const path = require ("path")
const comprasController = {

    carritoDesplegable: (req, res) => {
        res.render(path.join(__dirname,"../views/Carrito-desplegable"));
    },
    checkOut:(req, res) => {
        res.render(path.join(__dirname,"../views/check-out"));

    },

}

module.exports = comprasController