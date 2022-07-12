import React, { useState, useEffect, useRef } from 'react';
import Category from './Category';

function GenresInDb() {

    const [categoryList, setGenres] = useState([])


    useEffect(() => {
        fetch('/api/products')
            .then(respuesta => {
                // console.log(respuesta)
                return respuesta.json()
            })
            .then(genres => {
                //console.log(genres)
                setGenres(genres.data)
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
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3 ">
                        <h6 ref={h6} onMouseOver={cambioColor} onMouseOut={cambioColor} className="m-0 font-weight-bold text-gray-800 ">Genres in Data Base</h6>
                    </div>
                    <div className="card-body fondoCaja">
                        <div className="row">
                            {
                                categoryList.map((genre, index) => {
                                    return <Category generos={genre} key={genre + index} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}


export default GenresInDb;