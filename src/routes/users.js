const express = require("express");
const usersControllers = require("../controllers/usersController");
const multer = require('multer');
var router = express.Router();


//Configuracion de multer para en buffer de memoria
const bufferImagen = multer.memoryStorage();


//Middlewares para rutas de usuario
const uploadFile = multer({ storage: bufferImagen }) // Middleware de multer 
const validacionesRegister = require("../middlewares/registerValidations"); // validaciones para register
const validacionesLogin = require("../middlewares/loginValidations")  // validaciones para Login
const guestMiddleware = require ('../middlewares/guestMiddleware') //Redirije usuarios logueados a perfil.
const autenticadoMiddleware = require("../middlewares/autentidadoMiddleware"); //redirije usuarios no logueados al login
const adminMiddleware = require("../middlewares/adminMiddleware");


// Rutas registro
router.get("/register", guestMiddleware, usersControllers.registro);
router.post("/register/process", uploadFile.single('avatar'), validacionesRegister, usersControllers.procesarRegistro,);


// Rutas Login
router.get("/login", guestMiddleware, usersControllers.login);
router.post("/login/process", validacionesLogin, usersControllers.procesarLogin);

// Rutas de administrador
router.get("/panel-control", adminMiddleware, usersControllers.control); //Dashboard
router.get("/listadoProductos", adminMiddleware, usersControllers.listadoProductos) //Listado de Productos
router.get("/listadoUsuarios", adminMiddleware, usersControllers.listadoUsuarios) //Listado de Usuarios

//Logout
router.get("/logout",autenticadoMiddleware, usersControllers.logout);

//Rutas de Perfil de Usuario
router.get("/perfil",autenticadoMiddleware, usersControllers.profile);

// Ruta de prueba de session
router.get('/check', function (req, res) {
    if (req.session.usuarioLogueado == undefined) {
        res.send("No estas Logueado");

    } else {
        console.log(req.session);
        res.send("El usuario logueado es" + req.session.usuarioLogueado.email);
    }
})


module.exports = router
