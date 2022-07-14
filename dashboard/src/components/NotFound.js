import React from 'react';
import { Link } from 'react-router-dom';
import imgError from '../assets/images/logo-error-404.png';
import imgIzq from '../assets/images/fondo-variable-01.png';
import imgDer from '../assets/images/fondo-variable-02.png';

function NotFound() {
    return (
        <>
            <div className="body-error-404 " >

                <img src={imgIzq} alt="" className="wall-izq" />
                <img src={imgDer} alt="" className="wall-der" />

                <div className="erorr-404 parpadea">
                    <img src={imgError} alt="" />

                </div>
                <div>
                    <Link to="/" >
                        <button className="button-voler"> Volver a inicio </button>
                    </Link>
                </div>




            </div>
        </>
    )
}


export default NotFound;