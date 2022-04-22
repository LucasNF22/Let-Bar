const path = require("path");
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const categoriesFilePath = path.join(__dirname, '../data/categoriesDataBase.json');
const categories = JSON.parse(fs.readFileSync(categoriesFilePath, 'utf-8'));



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
        let productoId = req.params.id
        let productosEdit = products.find(producto => producto.id == productoId)
        res.render ("editar-producto", {producto : productosEdit}) +
        console.log (productosEdit)
    },
    
    actualizarProducto:(req, res) =>{


    },

    categoriaProducto: (req, res) => {
        let idCategoria = req.params.id
        let categoria = products.filter(producto=> producto.category == idCategoria);
        res.render(path.join(__dirname, "../views/categoriaProducto"), {producto: categoria});
    },

}

module.exports = productosController;