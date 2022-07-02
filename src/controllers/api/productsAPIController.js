const db = require('../../database/models');

const productsAPIController = {

    list: (req, res) => {
        db.Product.findAll({
            include: ["categories"]
        })
            .then(products => {
                
                let productosArray = [];

                products.forEach(producto => {
                    let data = {
                        id: producto.id,
                        name: producto.name,
                        description: producto.description,
                        relaciones: producto.categories,
                        detail: "/api/products/" + producto.id

                    }
                    productosArray.push(data)
                })

                let respuesta = {
                    meta: {
                        status: 200,
                        url: "api/products"
                    },
                    count: products.length,
                    countByCategory: "this.productosPorCategoria",
                    data: productosArray
                }
                res.json(respuesta);
            })
    },

    productosPorCategoria: (req, res) => {
        let pedidoProductos = db.Product.findAll();
        let pedidoCategorias = db.Product_category.findAll();
        let cats = [];

        Promise.all([pedidoProductos, pedidoCategorias])
            .then(([productosDb, categoriasDb]) => {

                let categoriaInfo = {};

                categoriasDb.forEach(categoria => {
                    categoriaInfo = {
                        id: categoria.id,
                        name: categoria.name,
                        category: categoria.category,
                        productCount: 0
                    }

                    productosDb.forEach(producto => {
                        if (producto.category_id == categoria.id) {
                            categoriaInfo.productCount++
                        }
                    })



                    cats.push(categoriaInfo);
                })
                return cats
            })
    }

}

module.exports = productsAPIController;