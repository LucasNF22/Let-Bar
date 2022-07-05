const express = require("express");
const usersControllers = require("../controllers/usersController");

const usersControllersDb = require("../controllers/usersControllersDb");

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
router.get("/register", [ guestMiddleware ], usersControllersDb.registro);  /* OK DB */
router.post("/register/process", [ uploadFile.single('avatar'), validacionesRegister ], usersControllersDb.procesarRegistro,);  /* OK DB */

//Ruta de address para storage

router.post("/addressForStorage", usersControllersDb.adressStorage);

// Rutas Login
router.get("/login", [ guestMiddleware ], usersControllersDb.login);  /* OK DB */
router.post("/login/process", [ validacionesLogin ], usersControllersDb.procesarLogin);  /* OK DB */


//---------------- Rutas de administrador ------------- //
//Dashboard
router.get("/panel-control", [ adminMiddleware ], usersControllersDb.control);     /* OK DB */
//Listado de Productos
router.get("/listadoProductos", [ adminMiddleware ], usersControllersDb.listadoProductos)  /* falta ver el tema de los includes para linkear categorias */
//Listado de Usuarios
router.get("/listadoUsuarios", [ adminMiddleware ], usersControllersDb.listadoUsuarios)     /* OK DB */
//elimina Usuario
router.delete("/eliminar/:id", [ adminMiddleware ], usersControllersDb.eliminarUsuario)     /* OK DB */
//Edicion de permisos de usuario
router.get("/usuario-admin/:id", [ adminMiddleware ], usersControllersDb.usuarioEdit)     /* OK DB */
//Edicion de permisos de usuario
router.put("/usuario-admin/:id/process", [ adminMiddleware ], usersControllersDb.usuarioEditProcess)     /* OK DB */

// ----------------------------------------------------- //

//Logout
router.get("/logout",[ autenticadoMiddleware ], usersControllersDb.logout); /* OK DB */

//Rutas de Perfil de Usuario
router.get("/perfil",[ autenticadoMiddleware ], usersControllersDb.profile); /* OK DB */



// Ruta de prueba de session
router.get('/check', function (req, res) {
    if (req.session.usuarioLogueado == undefined) {
        res.send("No estas Logueado");
        
    } else {
        console.log(req.session);
        res.send("El usuario logueado es" + req.session.usuarioLogueado.email);
    }
})

// Ruta de prueba para base de datos
router.get ("/pruebadb", usersControllersDb.pruebadb);

module.exports = router
