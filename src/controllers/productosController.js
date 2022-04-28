const path = require("path");
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const categoriesFilePath = path.join(__dirname, '../data/categoriesDataBase.json');
const categories = JSON.parse(fs.readFileSync(categoriesFilePath, 'utf-8'));



const productosController = {

    catalogo: (req, res) => {
        res.render(path.join(__dirname, "../views/catalogo"));
    },

    detalleProducto: (req, res) => {
        const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        let idProd = req.params.id;
        let detProd = productos.find(producto => producto.id == idProd);
        res.render(path.join(__dirname, "../views/detalle-producto"), { producto: detProd });
    },

    agregarProducto: (req, res) => {

        res.render(path.join(__dirname, "../views/agregar-producto"));
    },

    guardarProducto: (req, res) => {


        let productosOriginales = products;

        let ultimoObjeto = (productosOriginales.length) - 1;
        let ultimoId = productosOriginales[ultimoObjeto].id;
        let nuevoId = ultimoId + 1;
        let nuevoProducto = {
            "id": nuevoId,
            "name": req.body.name,
            "description": req.body.description,
            "image": req.body.image,
            "category": req.body.categoria,
            "size": req.body.size,
            "priceUnit": req.body.priceUnit,
            "cantDisc": req.body.cantDisc,
            "priceCant": req.body.priceCant,
            "offer": req.body.offer,
            "graduation": req.body.graduation,
            "years": req.body.years,
            "stock": req.body.stock,
            "cantValoration": 0,
            "acuValoration": 0,
            "valoration": 0,

        };
        productosOriginales.push(nuevoProducto);

        fs.writeFileSync(productsFilePath, JSON.stringify(productosOriginales, null, ' '));
        res.redirect("/Home")

    },


    editarProducto: (req, res) => {
        let productoId = req.params.id
        let productosEdit = products.find(producto => producto.id == productoId)

        res.render(path.join(__dirname, "../views/editar-producto"), { producto: productosEdit, categorias: categories })

    },

    actualizarProducto: (req, res) => {
        const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
        const productosOriginales = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        let productoId = req.params.id;
        let productosActualizados = productosOriginales;

        console.log("*****");
        console.log(productoId)

        productosActualizados.forEach(producto => {
            if (producto.id == productoId) {

                producto.name = req.body.name;
                producto.description = req.body.description;
                producto.category = req.body.category;
                producto.size = req.body.size;
                producto.priceUnit = req.body.priceUnit;
                producto.cantDisc = req.body.cantDisc;
                producto.priceCant = req.body.priceCant;
                producto.offer = req.body.offer;
                producto.graduation = req.body.graduation;
                producto.years = req.body.years;
                producto.stock = producto.stock + parseInt(req.body.stock)

                console.log(producto);
                console.log(producto.stock);

            }

        })



        fs.writeFileSync(productsFilePath, JSON.stringify(productosActualizados, null, ' '));
        res.redirect("/productos/detalle-producto/" + productoId)
    },






    categoriaProducto: (req, res) => {
        let idCategoria = req.params.id
        let categoria = products.filter(producto => producto.category == idCategoria);
        res.render(path.join(__dirname, "../views/categoriaProducto"), { producto: categoria });
    },

    eliminarProducto: (req, res) => {
        let idAEliminar = req.params.id;
        console.log(idAEliminar);
        let productosActualizados = products.filter(product => product.id != idAEliminar);

        fs.writeFileSync(productsFilePath, JSON.stringify(productosActualizados, null, ' '));
        res.redirect("/home")

    },

    valorarProducto: (req, res) => {
        const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
        const productosOriginales = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        let productoId = req.params.id;

        let nuevaValoracion = req.body.estrellas;
        console.log("nueva valoracion" + nuevaValoracion);

        let productoValorado = productosOriginales;

        /* console.log("*****");
        console.log(productoId) */

        if (nuevaValoracion != undefined) {
            productoValorado.forEach(producto => {
                if (producto.id == productoId) {

                    /* console.log('-----originales------');
                    console.log(producto.cantValoration);
                    console.log(producto.acuValoration);
                    console.log(producto.valoration); */

                    producto.cantValoration = parseInt(producto.cantValoration) + 1;
                    producto.acuValoration = parseInt(producto.acuValoration) + parseInt(nuevaValoracion);
                    promedio = parseInt(producto.acuValoration) / parseInt(producto.cantValoration);
                    producto.valoration = promedio.toFixed(1);

                    /* console.log('------actuzalizados-----');
                    console.log(producto.cantValoration);
                    console.log(producto.acuValoration);
                    console.log(producto.valoration); */
                }

            })
        }

        fs.writeFileSync(productsFilePath, JSON.stringify(productoValorado, null, ' '));
        res.redirect("/productos/detalle-producto/" + productoId);
    }

}

module.exports = productosController;