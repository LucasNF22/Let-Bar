import React, { useState, useEffect, useRef } from 'react';
import Category from './Category';

function CategoryList() {

    const [categoryList, setCategoryList] = useState([])


    useEffect(() => {
        fetch('/api/products')
            .then(respuesta => {
                // console.log(respuesta)
                return respuesta.json()
            })
            .then(data => {
                
                setCategoryList(data.countByCategory)
            })
            .catch(error => console.log(error))
    }, [])

    const h6 = useRef();

    const cambioColor = () => {
        document.querySelector("div.card-body.fondoCaja").classList.toggle("bg-secondary")
    }


    return (
        <React.Fragment>
            {/*<!-- Categories in DB -->*/}
            <div className="col-lg-6 mb-4 ">
                <div className="card shadow mb-4">
                    <div className="card-header py-3 ">
                        <h6 ref={h6} onMouseOver={cambioColor} onMouseOut={cambioColor} className="m-0 texto-titulo-categorias ">Categorias en base de datos</h6>
                    </div>
                    <div className="card-body fondoCaja">
                        <div className="row">
                            {
                                categoryList.map((categoria, index) => {
                                    return <Category categoria={categoria} key={categoria + index} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}


export default CategoryList;