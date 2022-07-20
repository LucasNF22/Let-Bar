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

   console.log(categoryList);

    
    return (
        <React.Fragment>
            {/*<!-- Categories in DB -->*/}
            <div className="col-lg-6 mb-4 ">
                <div className="tarjeta-categoria-edit" >
                <div className="tarj-cat-sup padding20">
                    <div>
                    Categorias en base de datos
                    </div>
                </div>
                        
                <div className="tarjeta-popUp ">
                    
                        <div className="row gap">
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