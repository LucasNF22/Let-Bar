const path = require("path");
const db = require("../database/models");


const mainController = {
    homeLogueado: (req, res) => {

        let pedidoProductos = db.Product.findAll();
        let pedidoCategorias = db.Product_category.findAll();

        Promise.all([pedidoProductos, pedidoCategorias])
            .then(([productosDb, categoriasDb]) => {

                res.render("Home-logueado", { productos: productosDb, categorias: categoriasDb })
            })
    },

    home: (req, res) => {
        res.render(path.join(__dirname, "../views/Home-sin-loguear"));

    },

    pruebaModal: (req, res) => {

        let pedidoProductos = db.Product.findAll();
        let pedidoCategorias = db.Product_category.findAll();

        Promise.all([pedidoProductos, pedidoCategorias])
            .then(([productosDb, categoriasDb]) => {

                res.render("prueba", { productos: productosDb, categorias: categoriasDb })
            })
    },

};

module.exports = mainController;
