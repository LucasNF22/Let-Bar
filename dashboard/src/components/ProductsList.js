import React, { useState, useEffect, useRef } from 'react';

import ProductCard from "./ProductCard";

function ProductsList() {

    const [listCategory, setListCategory] = useState([]);

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        fetch('/api/products')
            .then(respuesta => {
                return respuesta.json()
            })
            .then(response => {
                let categories = response.countByCategory
                let productos = response.data
                setListCategory(categories)
                setProductList(productos)
            })
            .catch(error => console.log(error))
    }, [])

    console.log(productList);
    return (
        <React.Fragment>
            <main className="main-producto-edit">
                <a href="/users/panel-control">
                    <div className="boton-editar-prod"> Atras </div>
                </a>

                {
                    listCategory.map((categoria, index) => {

                        return ( 

                            <section className="tarjeta-categoria-edit ">
                                <div className="tarj-cat-sup padding20">
                                    <div>
                                        {categoria.name}
                                    </div>
                                </div>
                                <div className="cont-producto-edit">

                                    {/*<!--Tajeta para editar producto-->*/}
                                    {
                                        productList.map((product, index) => {
                                           console.log(product)
                                            if (product.relations.category.id == categoria.id) {
                                                return <ProductCard producto={product} key={product + index} />
                                            }
                                        })
                                    }


                                </div>
                            </section>
                        )
                    })
                }

                {/*<!-- Fin Tajeta de categoria-->*/}
            </main>
        </React.Fragment>
    )
}



export default ProductsList;