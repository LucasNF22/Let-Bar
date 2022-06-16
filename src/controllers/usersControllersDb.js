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

        //for (let i = 0; i < usuarios.length; i++) {
           // if (usuarios[i].email == req.body.email) {
            //    return res.render("register", {
             //       errors: {
              //          email: {
              //              msg: "Email ya registrado en la base de datos"
               //         }
               //     },
              //      oldData: req.body
              //  });
         //   }
       // }
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

    

    control: (req, res) => {
        db.User.findAll()
        .then (function(users){
        res.render( "control", {users : users})
        })
      
    },

    listadoUsuarios: function (req, res) {
        db.User.findAll()
            .then(function (users) {
                res.render("listadoDeUsuarios", { users: users })
            })
    },

    perfil: function (req, res) {
        db.perfil.findByPK(req.params.id)
            .then(function (users) {
                res.render("perfil", { users: users })
            })
    },

    logout: (req, res) =>{
        req.session.destroy();
        return res.redirect ('/')
        

    }
}



module.exports = usersControllersDb