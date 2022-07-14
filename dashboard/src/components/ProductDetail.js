import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom"
import ProductInfo from './ProductInfo';

function ProductDetail() {



    return (
        <>
        <Link className="nav-link text-white" to="/ProductsList">
                    <div className="boton-volver"> Atras </div>
                </Link>
            <div className="col-lg-6 mb-4">

                <section className="tarjeta-categoria-edit ">
                    <div className="tarj-cat-sup padding20">
                        <div>
                            Detalle del producto
                        </div>
                    </div>

                    <ProductInfo />


                </section>
            </div>
        </>


    )
}


export default ProductDetail;