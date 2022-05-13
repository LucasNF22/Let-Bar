const path = require("path");
const fs = require("fs");
const bcrypt = require('bcryptjs');
const { validationResult } = require("express-validator");


const usersControllers = {

    //Carga el register 
    registro: (req, res) => {
        res.render(path.join(__dirname, "../views/register"))
    },
    //Procesa el register
    procesarRegistro: (req, res) => {
        const usuariosFilePath = path.join(__dirname, '../data/usersDataBase.json');
        const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));

        const validaciones = validationResult(req);

        console.log("---------------------");
        console.log("llego el envio")
        console.log(req.file);
        console.log(validaciones.mapped());
        console.log("---------------------");




        if (validaciones.errors.length > 0) {
            return res.render(path.join(__dirname, "../views/register"), {
                errors: validaciones.mapped(),
                oldData: req.body
            });

        }


        let usuariosOriginales = usuarios;
        let ultimoObjeto = (usuariosOriginales.length) - 1;
        let ultimoId = usuariosOriginales[ultimoObjeto].id;
        let nuevoId = ultimoId + 1;
        let passEncriptada = bcrypt.hashSync(req.body.password, 10);


        let nuevoUsuario = {
            "id": nuevoId,
            "first_name": req.body.first_name,
            "last_name": req.body.last_name,
            "email": req.body.email,
            "password": passEncriptada,
            "tel": req.body.tel,
            "avatar": req.file.filename,
            "category": "user",
            "birthday": req.body.birthday,
            "direccion": " ",
            "localidad": " ",
            "codigo_postal": " "
        };

        //Actualiza el array con el nuevo usuario
        usuariosOriginales.push(nuevoUsuario);
        let usuariosActualizados = usuariosOriginales;

        //Guarda los usuarios actualizados y redirije al Login
        fs.writeFileSync(usuariosFilePath, JSON.stringify(usuariosActualizados, null, ' '));
        res.redirect("/login")

    },

    //Imprime la vista del Login
    login: (req, res) => {
        res.render(path.join(__dirname, "../views/login"))

    },


    //Funcion procesar login
    procesarLogin: (req, res) => {
        const usuariosFilePath = path.join(__dirname, '../data/usersDataBase.json');
        const users = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));


        let validaciones = validationResult(req);

        console.log("----------------");
        //console.log(users)
        console.log("----------------");


        if (validaciones.errors.length > 0) {
            return res.render(path.join(__dirname, "../views/login"), {
                errors: validaciones.mapped(),
                oldData: req.body
            });
        }
        // Datos de usuario valido
        // lucas@gmail.com
        // pass: Let123456

        let usuarioALoguearse;

        /*if (users == "") {

            users = [];
        } else {
            users = JSON.parse(userJSON);
        }
        */
        
        // !!!! de aca para abajo tenemos que separar la validacion del email, y la de el password
        //      para poder mandar primero el mensaje de "el email no esta en la base de datos", 
        //      y si lo encuentra y la password no coincide mostrar el mensaje de "credenciales invalidas" ¡¡¡¡¡
        
        for (let i = 0; i < users.length; i++) {
            if (users[i].email == req.body.email) {
                if (bcrypt.compareSync(req.body.password, users[i].password)) {
                    usuarioALoguearse = users[i];
                    console.log(usuarioALoguearse);
                    req.session.usuarioLogueado = usuarioALoguearse;

                    res.redirect("/Home");
                    return;
                }
            }
        }

        console.log(usuarioALoguearse);

        if (usuarioALoguearse == undefined) {
            return res.render(path.join(__dirname, "../views/login"), {
                errors: {
                    email:{                                 /// aca si manda el mesaje si el usuario es undefined.
                        msg: "credenciales invalidas"
                    }
                },
                oldData: req.body
            });
           
        }
    },

    control: (req, res) => {
        res.render(path.join(__dirname, "../views/control"))
    }


}

module.exports = usersControllers;