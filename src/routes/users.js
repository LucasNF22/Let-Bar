const express = require("express");
const usersControllers = require ("../controllers/usersController");
const multer = require('multer');
const path = require('path');

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
router.get ("/panel-control", usersControllers.control);

module.exports = router
