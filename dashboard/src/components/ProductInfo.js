import React, { useState, useEffect, useRef } from 'react';
import { useParams } from "react-router-dom"

function ProductInfo() {

    const [productDB, setProductDB] = useState([]);
    const id = useParams();


    useEffect(() => {
        if (id.id != undefined) {
            fetch(`/api/products/detail/${id.id}`)
                .then(respuesta => {
                    return respuesta.json()
                })
                .then(data => {

                    setProductDB(data.data)

                })
                .catch(error => console.log(error))
        } else {
            fetch(`/api/products/lastInDb`)
                .then(respuesta => {
                    return respuesta.json()
                })
                .then(data => {

                    setProductDB(data.data)

                })
                .catch(error => console.log(error))
        }
    }, [])




    return (
        <>
            <div className="tarjeta-popUp">

                <div className="cont-img">
                    <img src={productDB.urlImageProducto} alt=""
                        className="img-popUp" />
                    <div className="tituloImg">
                        {productDB.name}
                    </div>
                </div>

                <div className="renglon-popUp">
                    <div className="renglon-tit-popUp">Precio:</div>
                    <div className="renglon-cont-popUp">${productDB.priceUnit}
                    </div>
                </div>

                <div className="renglon-popUp">
                    <div className="renglon-tit-popUp">Tamaño:</div>
                    <div className="renglon-cont-popUp">
                        {productDB.size}
                    </div>
                </div>
                <div className="renglon-popUp">
                    <div className="renglon-tit-popUp">Valoracion:</div>
                    <div className="renglon-cont-popUp">
                        {productDB.valoration} <i className="fa-regular fa-star"></i>
                    </div>
                </div>
                <div className="renglon-popUp">
                    <div className="renglon-tit-popUp">Descripcion:</div>
                </div>

                <div className="renglon-cont-popUp desc-popUp">
                    {productDB.description}
                </div>


                <a href="/productos/detalle-producto/<%=ProMod.id%>" className="boton-verMas-popUp">Ver mas</a>
            </div>




        </>


    )
}


export default ProductInfo;