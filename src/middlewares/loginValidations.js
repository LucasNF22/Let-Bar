const { body } = require('express-validator');

const validacionesLogin = [

    body('email')
        .notEmpty().withMessage("Debes introducir tu email").bail()
        .isEmail().withMessage("El correo no es valido"),

    body('password')
        .notEmpty().withMessage("Debes introducir una contraseña").bail()
        .isLength({ min: 6 }).withMessage('La contraseña debe contener minimo 8 caracteres')  // validacion minimo y maximo de caracteres
        .isAlphanumeric().withMessage("La contraseña debe contener al menos un número y una letra"),
];

module.exports = validacionesLogin;