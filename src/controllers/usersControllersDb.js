const path = require("path");
const fs = require("fs");
const bcrypt = require('bcryptjs');
const { validationResult } = require("express-validator");


const db = require("../database/models");



const usersControllersDb = {
    pruebadb: function (req, res) {
        db.User.findAll()
            .then(function (users) {
                return res.send(users)
            })
    },

    registro: (req, res) => {

        res.render("register");
    },

    procesarRegistro: function (req, res) {

        const validaciones = validationResult(req);

        //Control de validaciones.
        if (validaciones.errors.length > 0) {
            return res.render("register", {
                errors: validaciones.mapped(),
                oldData: req.body
            })
        }

        let passEncriptada = bcrypt.hashSync(req.body.password, 10);

        //Info de la imagen de usuario
        let nombreImagen = "default.jpg"
        let destinoImagen = " ";
        let dataImagen = " ";

        if (req.file) {
            nombreImagen = Date.now() + path.extname(req.file.originalname);
            destinoImagen = path.join(__dirname, "../../public/img/users/avatar/");
            dataImagen = req.file.buffer;
        }


        db.User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: passEncriptada,
            tel: req.body.tel,
            birthday: req.body.birthday,
            avatar: nombreImagen,
            category_id: 1,

        })
            .then(resultado => {
                if (req.file) {
                    fs.writeFileSync(destinoImagen + nombreImagen, dataImagen);
                };
                res.redirect("/users/login");
            })

    },

    login: (req, res) => {
        let email = req.cookies.emailUsuario ? req.cookies.emailUsuario : "";
        res.render("login", {
            email
        })

    },


    //Procesa los datos login
    procesarLogin: (req, res) => {

        let validaciones = validationResult(req);


        if (validaciones.errors.length > 0) {
            console.log(req.body.email);
            return res.render("login", {
                errors: validaciones.mapped(),
                email: req.body.email
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


        db.User.findOne({

            where: {
                email: req.body.email
            },
            include: [
                { association: "categories" }
            ],
        })
            .then(usuario => {
                if (usuario) {
                    let usuarioDb = usuario
                    if (bcrypt.compareSync(req.body.password, usuarioDb.password)) {
                        usuarioALoguearse = usuarioDb;
                        delete usuarioALoguearse.password;
                        req.session.usuarioLogueado = usuarioALoguearse;
                        if (req.body.recordar) {
                            res.cookie("emailUsuario", req.body.email, { maxAge: 1000 * 60 })
                        }
                        res.redirect("/Home");
                        return;
                    }
                }


                if (usuarioALoguearse == undefined) {
                    return res.render("login", {
                        errors: {
                            password: {                                 /// aca si manda el mesaje si el usuario es undefined.
                                msg: "La contraseña no es válida"
                            }
                        },
                        email: req.body.email
                    });

                }
            })


    },


    control: (req, res) => {
        res.render("control")
    },


    listadoProductos: (req, res) => {
        let pedidoProductos = db.Product.findAll({
            include: [
                {
                    association: "categories",
                    as: "category"
                }
            ]
        });
        let pedidoCategorias = db.Product_category.findAll();

        Promise.all([pedidoProductos, pedidoCategorias])
            .then(([productosDb, categoriasDb]) => {

                res.render("listaDeProductos", { productos: productosDb, categorias: categoriasDb });
            })



    },
    listadoUsuarios: (req, res) => {
        let pedidoUsuarios = db.User.findAll();
        let pedidoCategorias = db.User_category.findAll();
        
        Promise.all([pedidoUsuarios, pedidoCategorias])
            .then(([usuariosDb, categoriasDb]) => {

                res.render("listadoDeUsuarios", { usuarios: usuariosDb, categorias: categoriasDb });
            })
        
        
    },


    profile: (req, res) => {
        console.log(req.cookies.emailUsuario)
        res.render("perfil", { usuario: req.session.usuarioLogueado });

    },

    logout: (req, res) => {
        req.session.destroy();
        return res.redirect('/')


    },

    usuarioEdit: (req, res) => {
        let pedidoUsuario = db.User.findByPk(req.params.id);
        let pedidoCategorias = db.User_category.findAll();

        Promise.all([pedidoUsuario, pedidoCategorias])
            .then(([usuarioDb, categoriasDb]) => {

                res.render("usuario-admin", { usuario: usuarioDb, categorias: categoriasDb });
            })
    },

    usuarioEditProcess: (req, res) => {

        console.log(req.body.category)
        db.User.update({
            "category_id": req.body.category
        },
            {
                where: {
                    "id": req.params.id
                }
            })
            .then(resultado => {
                res.redirect("/users/listadousuarios")
            })

    },

    eliminarUsuario: (req, res) => {
        
        db.User.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(resultado => {

                res.redirect("/users/listadousuarios")
            })
    }
}



module.exports = usersControllersDb