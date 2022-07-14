import React, { useEffect, useRef } from 'react';
import {Link, Route, Switch} from 'react-router-dom';

function ProductCard(props) {
    
const detalleProducto = useRef();

        
    return (
        <>
            {/*<!--Tajeta para editar producto-->*/}
                    
                
            
            <div className="tarjeta-producto-edit">
                <div className="margin-LR">
                    <a href="/productos/detalle-producto/<%=producto.id%>">
                        <img src={props.producto.image} alt="" className="img-edit" />
                    </a>
                </div >
                <div className="margin-LR">
                    <div>
                        ID:
                    </div>
                    <div>
                        {props.producto.id}
                    </div>

                </div>
                <div className="margin-LR">
                    <div>
                        Nombre:
                    </div>
                    <div>
                        {props.producto.name}
                    </div>

                </div>
                <div className="margin-LR">
                    <div>
                        Stock:

                    </div>
                    <div>
                        {props.producto.stock}
                    </div>
                </div>
                <div className="box-icons">

                <Link className="nav-link text-white" to={`/productsList/detail/${props.producto.id}`}>
                    
                        <div className="boton-editar-prod" >
                            <i className="fa-solid fa-pen-to-square"></i>
                        </div>
                </Link>
                    
                    <form action="/productos/eliminar/<%= producto.id %>?_method=DELETE" method="POST">
                        <button type="submit" className="boton-editar-prod"><i className="fa-solid fa-trash"></i></button></form>
                </div>
            </div>
        </>
    )
}



export default ProductCard;

