const express = require("express");
const usersControllers = require("../controllers/usersController");
const multer = require('multer');
const path = require('path');
var router = express.Router()

const guestMiddleware = require ('../middlewares/guestMiddleware')
const auntenticadoMiddleware = require ('../middlewares/autentidadoMiddleware')


const session= require('express-session');

const { check } = require("express-validator");
const { body } = require('express-validator');
const autenticadoMiddleware = require("../middlewares/autentidadoMiddleware");

//***** Configuracion donde se guardan las imagenes con MULTER ****
/*const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let carpetaDeGuardado = path.join(__dirname, "../../public/img/users/avatar");
        cb(null, carpetaDeGuardado);
    },
    filename: (req, file, cb) => {
        let nombreImagen = Date.now() + path.extname(file.originalname);
        cb(null, nombreImagen);
    }
});*/
const bufferImagen = multer.memoryStorage();

/* Middleware de multer */
const uploadFile = multer({ storage: bufferImagen })




// validaciones para register
const validacionesRegister = [
    body("first_name")
        .notEmpty().withMessage("Debes introducir tu nombre").bail()
        .isLength({ min: 3 }).withMessage("tu nombre debe tener mínimo 4 letras")
        .isAlpha().withMessage("solo puede introducir letras"),

    body("last_name")
        .notEmpty().withMessage("Debes introducir tu apellido").bail()
        .isLength({ min: 4 }).withMessage("tu apellido debe tener mínimo 4 letras")
        .isAlpha().withMessage("solo puede introducir letras"),

    body("email")
        .notEmpty().withMessage("Debes introducir un correo").bail()
        .isEmail().withMessage("Debes introducir un correo válido"),

    body("password")
        //.trim() //Elimina espacio inicial y final
        .notEmpty().withMessage("Debes introducir una contraseña")
        .isLength({ min: 6 }).withMessage('La contraseña debe contener minimo 8 caracteres')  // validacion minimo y maximo de caracteres
        .isAlphanumeric().withMessage("La contraseña debe contener al menos un número y una letra"),   //validacion alfanumerica 

    body("pass_confirm")
        .custom(async (pass_confirm, { req }) => {
            const password = req.body.password
            if (password !== pass_confirm) {
                throw new Error('Las contraseñas deben coincidir') //validacion custom para que coincidan las contraseñas
            }
            return true
        }),

    body("tel")
        .notEmpty().withMessage("Debes introducir un numero telefónico")
        .isNumeric().withMessage("Solo puede ingresar caracteres numericos"),

    body("birthday")
        .notEmpty().withMessage("Debes introducir tu fecha de nacimiento")
        .custom((date, { req }) => {
            let birthday = req.body.birthday;

            function calcularEdad(birthday) {
                var hoy = new Date();
                var cumpleanos = new Date(birthday);
                var edad = hoy.getFullYear() - cumpleanos.getFullYear();
                var m = hoy.getMonth() - cumpleanos.getMonth();
                if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
                    edad--;
                }
                return edad;
            }
            var edad = calcularEdad(birthday);

            if (edad < 18) {
                throw new Error("Debes ser mayor de 18 años")
            }
            return true
        }),

    body('avatar')
        .custom((value, { req }) => {
            let file = req.file;
            let extensionesValidas = ['.jpg', '.png', '.gif'];

            if (!file) {
                throw new Error('Tenes que seleccionar una imagen');

            } else if (file) {
                let fileExtension = path.extname(file.originalname);
                if (!extensionesValidas.includes(fileExtension)) {
                    throw new Error(`Las extensiones de imagen permitidas son: ${extensionesValidas.join(', ')}`);
                }
            }
            return true;
        })
        .custom((value, { req }) => {
            let file = req.file
            if (file) {
                let tamaño = file.size
                if (parseInt(tamaño) > 1000000) {
                    throw new Error('El tamaño de imagen maximo permitido es de 1MB');
                }
            }
            return true;
        })
]

// validaciones para Login
const validacionesLogin = [

    check('email')
        .notEmpty().withMessage("Debes introducir tu email").bail()
        .isEmail().withMessage("El correo no es valido"),

    check('password')
        .notEmpty().withMessage("Debes introducir una contraseña").bail()
        .isLength({ min: 6 }).withMessage('La contraseña debe contener minimo 8 caracteres')  // validacion minimo y maximo de caracteres
        .isAlphanumeric().withMessage("La contraseña debe contener al menos un número y una letra"),
];


// Rutas registro
router.get("/register", guestMiddleware, usersControllers.registro);
router.post("/register/process", uploadFile.single('avatar'), validacionesRegister, usersControllers.procesarRegistro,);


// Rutas Login
router.get("/login", guestMiddleware, usersControllers.login);
router.post("/login/process", validacionesLogin, usersControllers.procesarLogin);

// Rutas Panel de control
router.get("/panel-control", usersControllers.control); //Dashboard
router.get("/listadoProductos", usersControllers.listadoProductos) //Listado de Productos
router.get("/listadoUsuarios", usersControllers.listadoUsuarios) //Listado de Usuarios

// Ruta de prueba de session
router.get('/check', function (req, res) {
    if (req.session.usuarioLogueado == undefined) {
        res.send("No estas Logueado");

    } else {
        console.log(req.session);
        res.send("El usuario logueado es" + req.session.usuarioLogueado.email);
    }
})

//Rutas de Perfil de Usuario
router.get("/perfil",autenticadoMiddleware, usersControllers.profile);

//Logout
router.get("/",autenticadoMiddleware, usersControllers.profile);
module.exports = router
