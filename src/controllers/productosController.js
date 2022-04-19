const path = require("path");
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productosController = {

    catalogo : (req, res) => {
        res.render(path.join(__dirname, "../views/catalogo"));
    },

    detalleProducto: (req, res) => {
        let idProd = req.params.id;
		let detProd = products.find(producto=> producto.id == idProd);
		res.render(path.join(__dirname, "../views/detalle-producto"), {producto : detProd});
    },

    agregarProducto: (req, res) => {
        res.render(path.join(__dirname, "../views/agregar-producto"));
    },

        editarProducto: (req, res) => {
        res.render(path.join(__dirname, "../views/editar-producto"));
    },
    
    categoriaProducto: (req, res) => {
        let idCategoria = req.params.id
        let categoria = products.filter(producto=> producto.category == idCategoria);
        res.render(path.join(__dirname, "../views/categoriaProducto"), {producto: categoria});
    },

}

module.exports = productosController;