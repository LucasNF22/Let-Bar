const path = require("path")
const fs = require("fs");
const multer = require("multer");
const res = require("express/lib/response");
const bcrypt= require ('bcryptjs');
const {validationResult}=require("express-validator");





const usersControllers = {
    registro: (req, res) => {         
        res.render (path.join(__dirname, "../views/register"))
     },

    procesarRegistro: (req, res)=>{
        const usuariosFilePath = path.join(__dirname, '../data/usersDataBase.json');
        const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));
        
        console.log("---------------------");
        console.log("llego el envio")
        //console.log(uploadFile);
        console.log("---------------------");
        //console.log(usuarios)
        let usuariosOriginales = usuarios;

        let ultimoObjeto = (usuariosOriginales.length) - 1;
        let ultimoId = usuariosOriginales[ultimoObjeto].id;
        let nuevoId = ultimoId + 1;
        let passEncriptada = bcrypt.hashSync(req.body.password, 10);
console.log(passEncriptada);

        let nuevoUsuario = {
            "id": nuevoId,
            "first_name": req.body.name,
            "last_name": " ",
            "email": req.body.email,
            "password": passEncriptada,
            "tel": req.body.tel,
            "avatar": " ",
            "category": "user",
            "direccion": "direccion",
            "localidad":"localidad",
            "codigo_postal":"codigo_postal",
            "fecha_nac":req.body.birthday,
            
            

        };


        
        //console.log(nuevoUsuario);
        
        usuariosOriginales.push(nuevoUsuario);
        let usuariosActualizados = usuariosOriginales;
        
       fs.writeFileSync(usuariosFilePath, JSON.stringify(usuariosActualizados, null, ' '));
        res.redirect("/Home")


        console.log("---------------------");
       // console.log(req.body);
        console.log("---------------------");
        
    },

    login: (req, res) => {
        res.render (path.join (__dirname, "../views/login"))
    },

    control: (req, res) => {
        res.render(path.join(__dirname, "../views/control"))
    },

    //Funcion procesar login

    procesarLogin:(req, res) => {
        
        let errors =validationResult(req);
        let usuarioALoguearse;
        if (errors.isEmpty()){
            const usuariosFilePath = path.join(__dirname, '../data/usersDataBase.json');
            const users = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));

           // let usersJSON= fs.readFileSync('usersDataBase.json',( users.json, {encoding: utf8}));
            
         //let users;
          /*  if(usersJSON == ""){

                users=[];
            } else{
                users=JSON.parse(userJSON);
            }*/
            for (let i = 0; i< users.length; i++) {
                if(users[i].email==req.body.email) {
                    if (bcrypt.compareSync(req.body.password, users[i].password)){
                    let usuarioALoguearse =users[i];
                    break;

                 }
                }

            }
        if (usuarioALoguearse == undefined){
             res.redirect('/users/login', {errors: [{msg:"Credenciales invalidas"}]}
            );
        }
        req.session.usuarioLogueado = usuarioALoguearse;
        res.redirect ('succes');


        } else{
             res.redirect('/users/login',{errors:errors.errors});
        }



    }

}

module.exports = usersControllers;