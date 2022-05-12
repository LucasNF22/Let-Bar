const path = require("path")
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
        
        
        

        if(validaciones.errors.length > 0){
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

        //Guarda los usuarios actualizados
        fs.writeFileSync(usuariosFilePath, JSON.stringify(usuariosActualizados, null, ' '));
        res.redirect("/Home")
    
    },

    login: (req, res) => {
        res.render(path.join(__dirname, "../views/login"))
    },

    control: (req, res) => {
        res.render(path.join(__dirname, "../views/control"))
    },

    //Funcion procesar login
    procesarLogin: (req, res) => {

        let errors = validationResult(req);
        let usuarioALoguearse;
        if (errors.isEmpty()) {
            const usuariosFilePath = path.join(__dirname, '../data/usersDataBase.json');
            const users = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));

            // let usersJSON= fs.readFileSync('usersDataBase.json',( users.json, {encoding: utf8}));

            //let users;
            /*  if(usersJSON == ""){
  
                  users=[];
              } else{
                  users=JSON.parse(userJSON);
              }*/
            for (let i = 0; i < users.length; i++) {
                if (users[i].email == req.body.email) {
                    if (bcrypt.compareSync(req.body.password, users[i].password)) {
                        let usuarioALoguearse = users[i];
                        break;

                    }
                }

            }
            if (usuarioALoguearse == undefined) {
                res.redirect('/users/login', { errors: [{ msg: "Credenciales invalidas" }] }
                );
            }
            req.session.usuarioLogueado = usuarioALoguearse;
            res.redirect('succes');


        } else {
            res.redirect('/users/login', { errors: errors.errors });
        }



    }

}

module.exports = usersControllers;