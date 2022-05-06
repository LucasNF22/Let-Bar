const path = require("path")
const fs = require("fs");
const multer = require("multer");





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
        
        
        let nuevoUsuario = {
            "id": nuevoId,
            "first_name": req.body.name,
            "last_name": " ",
            "email": req.body.email,
            "password": req.body.password,
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
        //res.redirect("/Home")


        console.log("---------------------");
        console.log(req.body);
        console.log("---------------------");
        
    },

    login: (req, res) => {
        res.render (path.join (__dirname, "../views/login"))
    },

    control: (req, res) => {
        res.render(path.join(__dirname, "../views/control"))
    }
}

module.exports = usersControllers;