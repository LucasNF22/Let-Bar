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
                <div className="row">
                    <div className="tarjeta-categoria-edit">



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