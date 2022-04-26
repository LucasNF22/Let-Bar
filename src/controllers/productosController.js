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

       
        let productosOriginales = products;
        
        let ultimoObjeto = (productosOriginales.length) - 1;
		let ultimoId = productosOriginales[ultimoObjeto].id;
		let nuevoId = ultimoId +1;
      let nuevoProducto = {
        "id": nuevoId,
        "name":req.body.name,
        "description": req.body.description,
        "image": req.body.image,
        "category": req.body.categoria,
        "size":req.body.size,
        "priceUnit": req.body.priceUnit,
        "cantDisc": req.body.cantDisc,
        "priceCant": req.body.priceCant,
        "valoration": req.body.valoration,
        "offer": req.body.offer,
        "graduation": req.body.graduation,
        "years": req.body.years,

    } ;
           productosOriginales.push (nuevoProducto);

           fs.writeFileSync(productsFilePath,JSON.stringify(productosOriginales, null , ' '));
		res.redirect("/Home")

    },


    editarProducto: (req, res) => {
        let productoId = req.params.id
        let productosEdit = products.find(producto => producto.id == productoId)
    
        res.render (path.join (__dirname, "../views/editar-producto"), {producto : productosEdit}) 
    
    },
    
    actualizarProducto:(req, res) =>{
        let productoId = req.params.id
        let productosOriginales = products
        let productosActualizados = productosOriginales.forEach (producto => {if (producto.Id == productoId){
        producto.Id = req.body.Id

        producto.name = req.body.name;
        producto.description = req.body.description;
        producto.image = req.body.image;
        producto.category = req.body.categoria;
        producto.size = req.body.size;
        producto.priceUnit = req.body.priceUnit;
        producto.cantDisc = req.body.cantDisc;
        producto.priceCant = req.body.priceCant;
        producto.valoration = req.body.valoration;
        producto.offer = req.body.offer;
        producto.graduation = req.body.graduation;
        producto.years = req.body.years;
        }
        
    })
     console.log (productosActualizados)
    /**fs.writeFileSync(productsFilePath,JSON.stringify(productosOriginales, null , ' ')); */
    res.redirect("/Home")
    },

        
        

    

    categoriaProducto: (req, res) => {
        let idCategoria = req.params.id
        let categoria = products.filter(producto=> producto.category == idCategoria);
        res.render(path.join(__dirname, "../views/categoriaProducto"), {producto: categoria});
    },

    eliminarProducto : (req, res) => {
		let idAEliminar =  req.params.id;
		console.log(idAEliminar);
        let productosActualizados = products.filter(product => product.id != idAEliminar);
		
        fs.writeFileSync(productsFilePath,JSON.stringify(productosActualizados, null , ' '));
        res.redirect("/home")
    
    }

}

module.exports = productosController;