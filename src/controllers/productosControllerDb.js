const path = require("path");
const fs = require('fs');
const { validationResult } = require("express-validator");

const productsFilePath = path.join(__dirname, '../database/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const categoriesFilePath = path.join(__dirname, '../database/categoriesDataBase.json');
const categories = JSON.parse(fs.readFileSync(categoriesFilePath, 'utf-8'));

const db = require("../database/models");

const productosControllerDb = {

    detalleProducto: (req, res) => {
        db.Product.finByPk(req.params.id) /* inlcuir relaciones */
            .then(productoDb => {

                res.render("detalle-producto", { producto: productoDb });
            })
    },

    agregarProducto: (req, res) => {

        db.Product_category.findAll()
        .then(categoriasDb => {

            res.render("agregar-producto", {categorias : categoriasDb});
        });
    },

    guardarProducto: (req, res) => {

        let validaciones = validationResult(req);

        if (validaciones.errors.length > 0) {
            
            return res.render("agregar-producto", {
                errors: validaciones.mapped(),
                oldData: req.body
            });
        }

        //Info de la imagen de prodcuto
        let nombreImagen = "producto" + "_" + nuevoId + "_" + Date.now() + path.extname(req.file.originalname);
        let destinoImagen = path.join(__dirname, "../../public/img/products/");
        let dataImagen = req.file.buffer;


        db.Product.create({

            "name": req.body.name,
            "description": req.body.description,
            "image": nombreImagen,
            "category_id": req.body.category,
            "brand": "/* ver de donde sacarlo */",
            "size": req.body.size,
            "priceUnit": req.body.priceUnit,
            "cantDisc": req.body.cantDisc,
            "priceCant": req.body.priceCant,
            "offer": req.body.offer,
            "graduation": req.body.graduation,
            "year": req.body.years,
            "stock": req.body.stock,
            "cantValoration": 0,
            "acuValoration": 0,
            "valoration": 0,
        })
            .then(resultado => {

                fs.writeFileSync(destinoImagen + nombreImagen, dataImagen);
                res.redirect("/users/panel-control")
            })
    },


    editarProducto: (req, res) => {

        let pedidoProducto = db.Product.finByPk(req.params.id);
        let pedidoCategorias = db.Product_category.findAll();

        Promise.all([pedidoProducto, pedidoCategorias])
            .then(([productoDb, categoriasDb]) => {

                res.render("editar-producto", { producto: productoDb, categorias: categoriasDb })
            })






    },

    actualizarProducto: (req, res) => {

        let productoId = req.params.id

        db.Product.update({

            "name": req.body.name,
            "description": req.body.description,
            "image": nombreImagen,
            "category_id": req.body.category,
            "brand": "/* ver de donde sacarlo */",
            "size": req.body.size,
            "priceUnit": req.body.priceUnit,
            "cantDisc": req.body.cantDisc,
            "priceCant": req.body.priceCant,
            "offer": req.body.offer,
            "graduation": req.body.graduation,
            "year": req.body.years,
            "stock": db.Product.stock + parseInt(req.body.stock) /* cargar el dato existente de stock */

        }, {
            where: {
                id: productoId
            }
        })
            .then(resultado => {

                res.redirect("/productos/detalle-producto/" + productoId)
            });

    },






    categoriaProducto: (req, res) => {

        let idCategoria = req.params.id
        let categoria = products.filter(producto => producto.category == idCategoria);
        res.render(path.join(__dirname, "../views/categoriaProducto"), { producto: categoria });
    },

    eliminarProducto: (req, res) => {
        let idAEliminar = req.params.id;

        db.Product.destroy({  /* configurar el modelo para soft delete */
            where: {
                id: req.params.id
            }
        })
            .then(resultado => {

                res.redirect("/home")
            })
    },

    valorarProducto: (req, res) => { /* ver como cargar datos previos para trabajar con esos */

        let productoId = req.params.id;

        let nuevaValoracion = req.body.estrellas;
        
        db.Product.findByPk(productoId)
        .then(y=>{
            db.Product.update({

            }).then({

            })
        })

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

module.exports = productosControllerDb;