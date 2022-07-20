import React, { useState, useEffect, useRef } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import UserCard from "./UserCard";


function UsersList() {

    const [usersList, setUsersList] = useState([]);



    useEffect(() => {
        fetch('/api/users')
            .then(respuesta => {
                return respuesta.json()
            })
            .then(response => {

                setUsersList(response.data)

            })
            .catch(error => console.log(error))
    }, [])
    console.log(usersList);

    return (
        <React.Fragment>
            <main className="main-producto-edit ">
                <Link className="nav-link text-white" to="/">
                    <div className="boton-volver"> Atras </div>
                </Link>
                <div className="cont-producto-edit">
                    
                    <div className="tarjeta-categoria-edit">

                    <div className="tarj-cat-sup padding20">
                                    <div>
                                        Listado de usuarios
                                    </div>
                                </div>

                        {
                            usersList.map((user, index) => {


                                return <UserCard usuario={user} key={user + index} />

                            })
                        }



                    </div>
                    {/*<!-- Fin Tajeta de categoria-->*/}
                </div>
            </main>
        </React.Fragment>
    )
}



export default UsersList;