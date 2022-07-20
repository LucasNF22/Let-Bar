import React, { useEffect, useRef } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

function UserCard(props) {

    const detalleDeUsuario = useRef();

    return (

        <div className="tarjeta-producto-edit">
            <div>
                <img src={props.usuario.urlImage} alt="" className="img-edit" />
            </div>
            <div className="margin-LR">
                <div>
                    ID:
                </div>
                <div>
                    Permisos:
                </div>
                <div>
                    Nombre:
                </div>
                <div>
                    Email:
                </div>
            </div>

            <div className="flex-wrap overflow margin-LR">
                <div>

                    <div>
                        {props.usuario.id}
                    </div>

                    <div>
                        {props.usuario.category.user_type}
                    </div>




                </div>
                <div className="user-edit">
                    <div>
                        {props.usuario.first_name} {props.usuario.last_name}
                    </div>

                    <div>
                        {props.usuario.email}
                    </div>

                </div>
            </div>

        </div>

    )
}

export default UserCard