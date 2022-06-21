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
        db.Product.findByPk(req.params.id) /* inlcuir relaciones */
            .then(productoDb => {

                res.render("detalle-producto", { producto: productoDb });
            })
    },

    agregarProducto: (req, res) => {

        db.Product_category.findAll()
            .then(categoriasDb => {

                res.render("agregar-producto", { categorias: categoriasDb });
            });
    },

    guardarProducto: (req, res) => {

        let validaciones = validationResult(req);



        db.Product_category.findAll()
            .then(categoriasDb => {
                if (validaciones.errors.length > 0) {

                    return res.render("agregar-producto", {
                        errors: validaciones.mapped(),
                        oldData: req.body,
                        categorias: categoriasDb
                    });
                }





                //Info de la imagen de prodcuto
                let nombreProd = req.file.originalname.split(".")
                let nombreImagen = "producto" + "_" + nombreProd[0] + "_" + Date.now() + path.extname(req.file.originalname);
                let destinoImagen = path.join(__dirname, "../../public/img/products/");
                let dataImagen = req.file.buffer;


                db.Product.create({

                    "name": req.body.name,
                    "description": req.body.description,
                    "image": nombreImagen,
                    "category_id": req.body.category,
                    "brand": req.body.brand,
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
            })

    },


    editarProducto: (req, res) => {

        let pedidoProducto = db.Product.findByPk(req.params.id);
        let pedidoCategorias = db.Product_category.findAll();

        Promise.all([pedidoProducto, pedidoCategorias])
            .then(([productoDb, categoriasDb]) => {

                res.render("editar-producto", { producto: productoDb, categorias: categoriasDb })
            })






    },

    actualizarProducto: (req, res) => {

        let productoId = req.params.id;
        let nombreImagen = "";
        let destinoImagen = "";
        let dataImagen = "";

        db.Product.findByPk(productoId)
            .then(productoOriginal => {

                if (!req.file) {
                    nombreImagen = productoOriginal.image;
                } else {
                    let nombreProd = req.file.originalname.split(".")
                    nombreImagen = "producto" + "_" + nombreProd[0] + "_" + Date.now() + path.extname(req.file.originalname);
                    destinoImagen = path.join(__dirname, "../../public/img/products/");
                    dataImagen = req.file.buffer;
                }

                // Para suma de stock
                let st = 0
                if (req.body.stock == "") {
                    st = 0;
                } else {
                    st = parseInt(req.body.stock);
                }


                db.Product.update({

                    "name": req.body.name,
                    "description": req.body.description,
                    "image": nombreImagen,
                    "category_id": req.body.category,
                    "brand": req.body.brand,
                    "size": req.body.size,
                    "priceUnit": req.body.priceUnit,
                    "cantDisc": req.body.cantDisc,
                    "priceCant": req.body.priceCant,
                    "offer": req.body.offer,
                    "graduation": req.body.graduation,
                    "year": req.body.years,
                    "stock": parseInt(productoOriginal.stock) + st

                }, {
                    where: {
                        id: productoId
                    }
                })
                    .then(resultado => {
                        if (!req.file) {
                            res.redirect("/users/listadoProductos")
                        } else {
                            fs.writeFileSync(destinoImagen + nombreImagen, dataImagen);
                            res.redirect("/users/listadoProductos")
                        }
                    });
            })

    },






    categoriaProducto: (req, res) => {


        pedidoCategorias = db.Product_category.findOne({
            where: {
                category: req.params.id
            }
        })
            .then(categoria => {

                db.Product.findAll({
                    where: {
                        category_id: categoria.id
                    }
                })
                    .then(ProductosCat => {

                        res.render("categoriaProducto", { producto: ProductosCat });
                    })
            })



    },

    eliminarProducto: (req, res) => {
        let idAEliminar = req.params.id;

        db.Product.destroy({
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
            .then(ProdValo => {

                cantValoration = parseInt(ProdValo.cantValoration) + 1;
                acuValoration = parseInt(ProdValo.acuValoration) + parseInt(nuevaValoracion);
                promedio = parseInt(ProdValo.acuValoration) / parseInt(ProdValo.cantValoration);
                valoration = promedio.toFixed(1);
                
                console.log(promedio);
                console.log(valoration);

                db.Product.update({

                    "cantValoration": cantValoration,
                    "acuValoration": acuValoration,
                    "valoration": valoration,
                }, {
                    where: {
                        id: productoId
                    }
                })

                    .then(resultado => {

                        res.redirect("/productos/detalle-producto/" + productoId)
                    })
            })

    }

}

module.exports = productosControllerDb;