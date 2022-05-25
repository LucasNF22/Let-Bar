const { body } = require('express-validator');
const path = require("path");

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

            if (file) {
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

module.exports = validacionesRegister;