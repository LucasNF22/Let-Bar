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

    guardarProducto: (req, res) => {
      //  let productosOriginal=products;
        console.log("///// Tamaño")
      //  let nombre=req.body.name;
       console.log(req.body);
        res.send('sss');
    },


    editarProducto: (req, res) => {
        res.render(path.join(__dirname, "../views/editar-producto"));
    },
    
    categoriaProducto: (req, res) => {
        
        let categoria = products.filter(producto=> producto.category == "cervezas");
        
        res.render(path.join(__dirname, "../views/categoriaProducto"), {producto: categoria});
    },

}

module.exports = productosController;