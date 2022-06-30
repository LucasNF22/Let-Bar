const { body } = require('express-validator');
const db = require('../database/models');

const validacionesLogin = [

    body('email')
        .trim()
        .notEmpty().withMessage("Debes introducir tu email").bail()
        .isEmail().withMessage("El correo no es valido")
        .custom(value => {
            return db.User.findOne({
                where: {"email" : value}
            }) .then (resultado => {
                if (resultado == undefined) {
                    throw new Error("El email no esta registrado") 
            }
            return true
        })
     

    })

            
          ,

    body('password')
        .notEmpty().withMessage("Debes introducir una contraseña").bail()
        .isLength({ min: 6 }).withMessage('La contraseña debe contener minimo 8 caracteres')  // validacion minimo y maximo de caracteres
        .isAlphanumeric().withMessage("La contraseña debe contener al menos un número y una letra")
];

module.exports = validacionesLogin;