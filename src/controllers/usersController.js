const path = require("path");
const fs = require("fs");
const bcrypt = require('bcryptjs');
const { validationResult } = require("express-validator");


const usersControllers = {

    //Imprime vista del register 
    registro: (req, res) => {
        res.render(path.join(__dirname, "../views/register"))
    },
    //Procesa los datos del register
    procesarRegistro: (req, res) => {
        const usuariosFilePath = path.join(__dirname, '../data/usersDataBase.json');
        const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));

        const validaciones = validationResult(req);

        console.log("---------------------");
        console.log("llego el envio")
        console.log(req.file);
        console.log();
        console.log("---------------------");

        //Control de validaciones.
        if (validaciones.errors.length > 0) {
            return res.render(path.join(__dirname, "../views/register"), {
                errors: validaciones.mapped(),
                oldData: req.body
            });
        }

        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].email == req.body.email) {
                return res.render(path.join(__dirname, "../views/register"), {
                    errors: {
                        email: {                                
                            msg: "Email ya registrado en la base de datos"
                        }
                    },
                    oldData: req.body
                });    
            }}
        
        //Este codgido se ejecuta si no hay errores en las validaciones.
        
        //Info de la imagen de usuario
        let nombreImagen = Date.now() + path.extname(req.file.originalname);
        let destinoImagen = path.join(__dirname, "../../public/img/users/avatar/");
        let dataImagen = req.file.buffer;

        //Genera el nuevo usuario
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
            "avatar": nombreImagen,
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
        fs.writeFileSync(destinoImagen + nombreImagen, dataImagen);
        fs.writeFileSync(usuariosFilePath, JSON.stringify(usuariosActualizados, null, ' '));
        res.redirect("/users/login");

    },

    //Imprime la vista del Login
    login: (req, res) => {
        res.render(path.join(__dirname, "../views/login"))

    },


    //Procesa los datos login
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


        //let usuarioALoguearse = users.findByField("email", req.body.email)
        

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
                    email: {                                 /// aca si manda el mesaje si el usuario es undefined.
                        msg: "Alguno de los datos no es válido"
                    }
                },
                oldData: req.body
            });

        }
    },
    
    //Imprime la vista del Panel de control
    control: (req, res) => {
        res.render(path.join(__dirname, "../views/control"))
    },
    
    //Imprime la vista del perfil del usuario
    profile: (req, res) => {
        res.render("perfil", {usuario : req.session.usuarioLogueado});

    },

    listadoProductos: (req,res)=>{
        const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        const categoriesFilePath = path.join(__dirname, '../data/categoriesDataBase.json');
        const categories = JSON.parse(fs.readFileSync(categoriesFilePath, 'utf-8'));
        
        res.render("listaDeProductos", {productos: products, categorias: categories});

    },

    listadoUsuarios: (req, res) => {
        const usuariosFilePath = path.join(__dirname, '../data/usersDataBase.json');
        const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));
        
        res.render("listadoDeUsuarios", {usuarios: usuarios});
    }
}

module.exports = usersControllers;