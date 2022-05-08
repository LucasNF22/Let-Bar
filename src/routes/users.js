const express = require("express");
const usersControllers = require ("../controllers/usersController");
const multer = require('multer');
const path = require('path');
//const session= require('express-session');
const req = require("express/lib/request");
const {check}= require("express-validator");


/* Configuracion donde se guardan las imagenes con MULTER */
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let carpetaDeGuardado = path.join(__dirname, "../../public/img/users/avatar");
        cb(null, carpetaDeGuardado);
    },
    filename: (req, file, cb) => {
        
        let nombreImagen = Date.now() + path.extname(file.originalname);
        cb(null, nombreImagen);
    }
});
 
/* Middleware de multer */
const uploadFile = multer({ storage });


var router = express.Router()

router.get ("/register", usersControllers.registro);
router.post("/register", uploadFile.single('avatar'), usersControllers.procesarRegistro);

router.get ("/login", usersControllers.login);

/* Validación de datos ingresados */

/*Middleware errores */

let errores= [
    check('email').isEmail().withMessage("El correo no es valido"),
    check ('password'). isLength({min: 2}).withMessage('La contraseña debe tener al menos 2 caracteres'),
 ];
 
router.post("/login",errores, usersControllers.procesarLogin);



router.get('/check', function(req, res){
    if (req.session.usuarioLogueado == undefined){
        res.send("No estas Logueado");

    }else {
        res.send("El usuario logueado es" + req.session.usuarioLogueado.email);
    }
})

router.get ("/panel-control", usersControllers.control);

module.exports = router
