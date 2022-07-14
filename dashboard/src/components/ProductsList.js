import React, { useState, useEffect, useRef } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import ProductCard from "./ProductCard";
import ProductDetail from './ProductDetail';

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

    
    return (
        <React.Fragment>
            <main className="main-producto-edit ">
                <Link className="nav-link text-white" to="/">
                    <div className="boton-volver"> Atras </div>
                </Link>
            <div className="row">
                
                {
                    listCategory.map((categoria, index) => { 

                        return ( 
<div className="col-lg-6 mb-4">
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
                                            
                                            if (product.relations.category.id == categoria.id) {
                                                return <ProductCard producto={product} key={product + index} />
                                            }
                                        })
                                    }


                                </div>
                            </section>
                            </div>
                        )
                    })
                }

                {/*<!-- Fin Tajeta de categoria-->*/}
                </div>
            </main>
        </React.Fragment>
    )
}



export default ProductsList;