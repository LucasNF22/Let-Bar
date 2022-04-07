const path = require("path");

const productosController = {

    catalogo : (req, res) => {
        res.render(path.join(__dirname, "../views/catalogo"));
    },

    detalleProducto: (req, res) => {
        res.render(path.join(__dirname, "../views/detalle-producto"));
    },

    agregarProducto: (req, res) => {
        res.render(path.join(__dirname, "../views/agregar-producto"));
    },

    editarProducto: (req, res) => {
        res.render(path.join(__dirname, "../views/editar-producto"));
    },
}

module.exports = productosController;